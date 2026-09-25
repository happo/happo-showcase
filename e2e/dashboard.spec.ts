import { expect } from '@playwright/test';
import { test } from 'happo/playwright';

test('dashboard', async ({ page, happoScreenshot }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Good morning, Maya' }),
  ).toBeVisible();

  await happoScreenshot(page.locator('.dashboard'), {
    component: 'Dashboard',
    variant: 'default',
  });
  await happoScreenshot(page.getByRole('table'), {
    component: 'Dashboard',
    variant: 'projects',
  });
});
