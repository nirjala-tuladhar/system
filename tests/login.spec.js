import { test, expect } from '@playwright/test';

test('valid login', async ({ page }) => {
  await page.goto('https://facebook.com/');

  await page.getByPlaceholder('Email or phone number').fill('validusername');
  await page.getByPlaceholder('Password').fill('validusername@123');

  await page.getByRole('button', { name: 'Log in' }).click();

  await page.waitForLoadState('networkidle');

  await expect(page).toHaveURL(/facebook\.com/);
});

