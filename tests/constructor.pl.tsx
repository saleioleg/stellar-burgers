import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_URL = 'http://localhost:4000';

test.describe('Интеграционные тесты страницы конструктора бургера с записью/просмотром HAR', () => {
  
  test.beforeEach(async ({ context, page }) => {
    // Подключаем HAR-файл для перехвата запроса ингредиентов
    await context.routeFromHAR(path.join(__dirname, 'ingredients.har'), {
      url: '**/api/ingredients',
      update: false,
    });

    // Мок данных пользователя
    await page.route('**/api/auth/user', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          user: { email: 'test@yandex.ru', name: 'TestUser' }
        })
      });
    });

    // Мок создания заказа
    await page.route('**/api/orders', async (route) => {
      if (route.request().method() === 'POST') {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            success: true,
            name: 'Краторный марсианский бургер',
            order: { number: 12345 }
          })
        });
      } else {
        route.continue();
      }
    });

    // Токены авторизации
    await page.context().addCookies([
      { name: 'accessToken', value: 'Bearer mock-token', domain: 'localhost', path: '/' }
    ]);
    await page.addInitScript(() => {
      localStorage.setItem('refreshToken', 'mock-refresh-token');
    });

    await page.goto(TEST_URL);
  });

  test('Добавление ингредиентов (булки и начинки) из списка в конструктор', async ({ page }) => {
    // 1. Добавляем булку
    const bunCard = page.locator('li').filter({ hasText: 'Краторная булка N-200i' }).first();
    await expect(bunCard).toBeVisible();
    await bunCard.locator('button').click();

    // 2. Кликаем по вкладке «Начинки» (или «Соусы»)
    const tab = page.locator('div[class*="tab"]').filter({ hasText: /начинки|соусы/i }).first();
    if (await tab.isVisible()) {
      await tab.click();
    }

    // 3. Добавляем начинку (из логов видно, что название в приложении может содержать альтернативный вариант, используем универсальный шаблон)
    const mainCard = page.locator('li').filter({ hasText: /Филе Люминесцентного/i }).first();
    await expect(mainCard).toBeVisible();
    await mainCard.locator('button').click();

    // Проверяем отображение конкретных элементов в конструкторе без конфликта strict mode
    await expect(page.locator('.constructor-element_pos_top')).toContainText('Краторная булка N-200i (верх)');
    await expect(page.locator('.constructor-element').filter({ hasText: /Филе Люминесцентного/i })).toBeVisible();
  });

  test('Работа модальных окон (открытие, закрытие по крестику и оверлею)', async ({ page }) => {
    const bunCard = page.locator('li').filter({ hasText: 'Краторная булка N-200i' }).first();
    await expect(bunCard).toBeVisible();
    
    // Открываем модальное окно кликом по картинке
    await bunCard.locator('img').click();
    
    const modal = page.locator('#modals div, [class*="modal"]').first();
    await expect(modal).toBeVisible();
    await expect(page.locator('text=Детали ингредиента')).toBeVisible();

    // Закрытие строго по крестику внутри модального окна
    const closeButton = modal.locator('button').first();
    await closeButton.click();
    await expect(modal).not.toBeVisible();

    // Повторное открытие для проверки закрытия по оверлею
    await bunCard.locator('img').click();
    await expect(modal).toBeVisible();

    // Закрытие по клику на оверлей
    await page.mouse.click(10, 10);
    await expect(modal).not.toBeVisible();
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

    // Оформление заказа
    const orderButton = page.locator('button:has-text("Оформить заказ")');
    await expect(orderButton).toBeEnabled();
    await orderButton.click();

    // Проверяем номер заказа в модальном окне
    const orderModal = page.locator('text=12345');
    await expect(orderModal).toBeVisible();

    // Проверяем, что конструктор очистился (ингредиенты пропали из конструктора)
    await expect(page.locator('.constructor-element')).toHaveCount(0);

    // Закрываем модальное окно заказа через крестик в модалке
    const closeOrderModalBtn = page.locator('#modals button, [class*="modal"] button').first();
    await closeOrderModalBtn.click();
    await expect(orderModal).not.toBeVisible();
  });
});