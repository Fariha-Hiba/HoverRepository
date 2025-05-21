import { test, expect } from '@playwright/test';

test('Easy Calculation Hover - Block Ads', async ({ page }) => {
  await page.route('**/*', route => {
    const url = route.request().url();
    if (
      url.includes('googleads.g.doubleclick.net') ||
      url.includes('pagead2.googlesyndication.com') ||
      url.includes('ads') ||
      url.includes('vignette')
    ) {
      return route.abort();
    }
    return route.continue();
  });

  await page.goto('https://www.easycalculation.com/');
  await page.locator('.lang').hover();
  await page.getByRole('link', { name: 'Português' }).click();

  await expect(page).toHaveTitle('Free Online Math Calculator e Converter');
});
