import { test, expect } from '@playwright/test';
//sound
test('Playwright homepage tests', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

