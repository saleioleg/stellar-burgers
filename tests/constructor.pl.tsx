import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_URL = 'http://localhost:4000';

test.describe('Интеграционные тесты страницы конструктора бургера с использованием HAR', () => {
  
  test.beforeEach(async ({ page }) => {
    // Перехват ВСЕХ запросов приложения через единый HAR-файл
    await page.routeFromHAR(path.join(__dirname, 'hars/stellar.har'), {
      update: true,
      notFound: 'fallback',
    });

    // Установка моковых данных авторизации (токены и cookies)
    await page.context().addCookies([
      { name: 'accessToken', value: 'mock-token', domain: 'localhost', path: '/' }
    ]);
    await page.addInitScript(() => {
      localStorage.setItem('refreshToken', 'mock-refresh-token');
    });

    await page.goto(TEST_URL);
  });

  test('Добавление ингредиентов (булки и начинки) из списка в конструктор', async ({ page }) => {
    const bunCard = page.locator('li').filter({ hasText: 'Краторная булка N-200i' }).first();
    await expect(bunCard).toBeVisible();
    await bunCard.locator('button').click();

    const tab = page.locator('div[class*="tab"]').filter({ hasText: /начинки|соусы/i }).first();
    if (await tab.isVisible()) {
      await tab.click();
    }

    const mainCard = page.locator('li').filter({ hasText: /Филе Люминесцентного/i }).first();
    await expect(mainCard).toBeVisible();
    await mainCard.locator('button').click();

    await expect(page.locator('.constructor-element_pos_top')).toContainText('Краторная булка N-200i (верх)');
    await expect(page.locator('.constructor-element').filter({ hasText: /Филе Люминесцентного/i })).toBeVisible();
  });

  test('Работа модальных окон (открытие, проверка данных, закрытие по крестику и оверлею)', async ({ page }) => {
    const bunCard = page.locator('li').filter({ hasText: 'Краторная булка N-200i' }).first();
    await expect(bunCard).toBeVisible();
    
    // Получаем точное название ингредиента из карточки для проверки в модалке
    const ingredientName = await bunCard.locator('p.text_type_main-default').textContent();
    expect(ingredientName).toBeTruthy();

    await bunCard.locator('img').click();
    
    // ограничиваем поиск модальным окном деталей ингредиента внутри #modals
    const ingredientModal = page.locator('#modals').locator('div').first();
    await expect(ingredientModal).toBeVisible();
    
    // Проверка заголовка и названия именно выбранного ингредиента СТРОГО внутри модалки
    await expect(ingredientModal.locator('text=Детали ингредиента')).toBeVisible();
    await expect(ingredientModal.locator('h2, h3, p').filter({ hasText: ingredientName! }).first()).toBeVisible();

    // Проверка подробных данных пищевой ценности конкретного ингредиента из мока
    await expect(ingredientModal.locator('text=Калории, ккал')).toBeVisible();
    await expect(ingredientModal.locator('text=420')).toBeVisible();
    await expect(ingredientModal.locator('text=Белки, г')).toBeVisible();
    await expect(ingredientModal.locator('text=80')).toBeVisible();
    await expect(ingredientModal.locator('text=Жиры, г')).toBeVisible();
    await expect(ingredientModal.locator('text=24')).toBeVisible();
    await expect(ingredientModal.locator('text=Углеводы, г')).toBeVisible();
    await expect(ingredientModal.locator('text=53')).toBeVisible();

    // Закрытие по крестику (кнопка внутри модалки)
    const closeButton = ingredientModal.locator('button').first();
    await closeButton.click();
    await expect(ingredientModal).not.toBeVisible();

    // Повторное открытие и закрытие по клику на оверлей (вне модалки)
    await bunCard.locator('img').click();
    await expect(ingredientModal).toBeVisible();

    await page.mouse.click(10, 10);
    await expect(ingredientModal).not.toBeVisible();
  });

  test('Создание заказа', async ({ page }) => {
    const bunCard = page.locator('li').filter({ hasText: 'Краторная булка N-200i' }).first();
    await expect(bunCard).toBeVisible();
    await bunCard.locator('button').click();

    const tab = page.locator('div[class*="tab"]').filter({ hasText: /начинки|соусы/i }).first();
    if (await tab.isVisible()) {
      await tab.click();
    }

    const mainCard = page.locator('li').filter({ hasText: /Филе Люминесцентного/i }).first();
    await expect(mainCard).toBeVisible();
    await mainCard.locator('button').click();

    const orderButton = page.locator('button:has-text("Оформить заказ")');
    await expect(orderButton).toBeEnabled();
    await orderButton.click();

    // СТРОГО ограничиваем область поиска модальным окном заказа внутри #modals
    const orderModal = page.locator('#modals').locator('div').first();
    await expect(orderModal).toBeVisible({ timeout: 15000 });

    // Ожидаемый номер заказа берется из мока (значение из HAR-файла для /api/orders)
    const expectedOrderNumber = '12345'; 

    // Проверяем номер заказа СТРОГО внутри модального окна заказа
    const orderNumberElement = orderModal.locator('p.text_type_digits-large, h2, h3, p').filter({ hasText: expectedOrderNumber }).first();
    await expect(orderNumberElement).toBeVisible();

    // Проверка, что конструктор очистился после успешного заказа
    await expect(page.locator('.constructor-element')).toHaveCount(0);

    const closeOrderModalBtn = orderModal.locator('button').first();
    await closeOrderModalBtn.click();
    await expect(orderModal).not.toBeVisible();
  });
});