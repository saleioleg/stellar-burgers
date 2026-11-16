import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import type { Page } from '@playwright/test';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HAR_PATH = path.join(__dirname, 'hars/stellar.har');

type THarEntry = {
  request: { method: string; url: string };
  response: { content: { text: string } };
};

type TIngredientMock = {
  _id: string;
  name: string;
  type: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
};

const harEntries: THarEntry[] = JSON.parse(readFileSync(HAR_PATH, 'utf-8')).log.entries;

const readHarResponse = <T,>(method: string, urlPart: string): T => {
  const entry = harEntries.find(
    ({ request }) => request.method === method && request.url.includes(urlPart),
  );

  if (!entry) {
    throw new Error(`В HAR нет ответа на ${method} ${urlPart}`);
  }

  return JSON.parse(entry.response.content.text) as T;
};

const ingredients = readHarResponse<{ data: TIngredientMock[] }>('GET', '/api/ingredients').data;
const bun = ingredients.find(({ name }) => name === 'Краторная булка N-200i')!;
const main = ingredients.find(({ name }) => name.startsWith('Филе Люминесцентного'))!;
const orderNumber = readHarResponse<{ order: { number: number } }>('POST', '/api/orders').order.number;

const getIngredientCard = (page: Page, ingredient: TIngredientMock) =>
  page.getByRole('listitem').filter({ hasText: ingredient.name }).first();

const getModal = (page: Page) =>
  page.locator('#modals > div').filter({ has: page.getByRole('button', { name: 'Закрыть' }) });

const getModalOverlay = (page: Page) =>
  page.locator('#modals > div').filter({ hasNot: page.getByRole('button', { name: 'Закрыть' }) });

const openTab = async (page: Page, title: string): Promise<void> => {
  await page.locator('nav').filter({ hasText: 'Булки' }).getByText(title, { exact: true }).click();
};

const addIngredient = async (page: Page, ingredient: TIngredientMock): Promise<void> => {
  await getIngredientCard(page, ingredient).getByRole('button', { name: 'Добавить' }).click();
};

test.describe('Интеграционные тесты страницы конструктора бургера с использованием HAR', () => {
  test.beforeEach(async ({ page }) => {
    // запросы к API отдаются из записанного HAR, в реальный бэкенд ничего не уходит
    await page.routeFromHAR(HAR_PATH, {
      url: '**/api/**',
      update: false,
      notFound: 'abort',
    });

    // Установка моковых данных авторизации (токены и cookies)
    await page.context().addCookies([
      { name: 'accessToken', value: 'mock-token', domain: 'localhost', path: '/' },
    ]);
    await page.addInitScript(() => {
      localStorage.setItem('refreshToken', 'mock-refresh-token');
    });

    await page.goto('/');
    await expect(getIngredientCard(page, bun)).toBeVisible();
  });

  test('Добавление ингредиентов (булки и начинки) из списка в конструктор', async ({ page }) => {
    await addIngredient(page, bun);
    await openTab(page, 'Начинки');
    await addIngredient(page, main);

    await expect(page.locator('.constructor-element_pos_top')).toContainText(`${bun.name} (верх)`);
    await expect(page.locator('.constructor-element_pos_bottom')).toContainText(`${bun.name} (низ)`);
    await expect(page.locator('.constructor-element').filter({ hasText: main.name })).toBeVisible();
  });

  test('Работа модальных окон (открытие, проверка данных, закрытие по крестику и оверлею)', async ({ page }) => {
    const modal = getModal(page);

    await getIngredientCard(page, bun).getByAltText('картинка ингредиента.').click();

    await expect(modal).toBeVisible();
    await expect(modal.getByText('Детали ингредиента')).toBeVisible();
    await expect(modal.getByRole('heading', { name: bun.name })).toBeVisible();
    await expect(modal.getByRole('listitem').filter({ hasText: 'Калории, ккал' })).toContainText(String(bun.calories));
    await expect(modal.getByRole('listitem').filter({ hasText: 'Белки, г' })).toContainText(String(bun.proteins));
    await expect(modal.getByRole('listitem').filter({ hasText: 'Жиры, г' })).toContainText(String(bun.fat));
    await expect(modal.getByRole('listitem').filter({ hasText: 'Углеводы, г' })).toContainText(String(bun.carbohydrates));

    await modal.getByRole('button', { name: 'Закрыть' }).click();
    await expect(modal).toBeHidden();

    await getIngredientCard(page, bun).getByAltText('картинка ингредиента.').click();
    await expect(modal).toBeVisible();

    await getModalOverlay(page).click({ position: { x: 5, y: 5 } });
    await expect(modal).toBeHidden();
  });

  test('Создание заказа', async ({ page }) => {
    await addIngredient(page, bun);
    await openTab(page, 'Начинки');
    await addIngredient(page, main);

    await page.getByRole('button', { name: 'Оформить заказ' }).click();

    const modal = getModal(page);

    await expect(modal).toBeVisible();
    await expect(modal.getByRole('heading', { level: 2 })).toHaveText(String(orderNumber));

    await modal.getByRole('button', { name: 'Закрыть' }).click();
    await expect(modal).toBeHidden();

    await expect(page.locator('.constructor-element')).toHaveCount(0);
  });
});
