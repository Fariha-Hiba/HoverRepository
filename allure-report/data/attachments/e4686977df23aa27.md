# Test info

- Name: Easy Calculation Test
- Location: C:\PlaywrightTrainingAscendion\tests\EasyCalculation.spec.js:6:5

# Error details

```
Error: page.goto: Test timeout of 60000ms exceeded.
Call log:
  - navigating to "https://www.google.com/", waiting until "load"

    at C:\PlaywrightTrainingAscendion\tests\EasyCalculation.spec.js:7:16
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | // ↑ Add this line to allow up to 60 seconds for the test instead of the default 30 seconds
   4 | test.setTimeout(60000);
   5 |
   6 | test('Easy Calculation Test', async ({ page }) => {
>  7 |     await page.goto('https://www.google.com/');
     |                ^ Error: page.goto: Test timeout of 60000ms exceeded.
   8 |
   9 |     await page.fill("#APjFqb", "EasyCalculation");
  10 |
  11 |     const searchResults = await page.$$("//div[@class='wM6W7d']/span");
  12 |     console.log(await searchResults.length);
  13 |
  14 |     const firstRes = await page.waitForSelector("(//div[@class='wM6W7d']/span)[1]");
  15 |     await firstRes.click();
  16 |
  17 |     await page.waitForTimeout(20000);
  18 |
  19 |     // for (const res in searchResults) {
  20 |     //     if(res.matchAll('easycalculation')) {
  21 |     //         res.click()
  22 |     //         break
  23 |     //     }
  24 |     // }
  25 |
  26 |     const firstLink = await page.waitForSelector('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div/div[1]/div/span/a/h3');
  27 |     await firstLink.click();
  28 |
  29 |     const searchBox = await page.locator('#googleSearchId');
  30 |     await searchBox.fill('playwright');
  31 |     await page.locator('.search_button').click();
  32 |
  33 |     await page.waitForLoadState('networkidle');
  34 |     await page.waitForTimeout(10000);
  35 |
  36 |     const firstPwLink = await page.waitForSelector("//a[contains(text(),'How to Use')]");
  37 |     await firstPwLink.click();
  38 |
  39 |     await expect(page.locator('/html/body/header/nav/div[1]/ul/li/a')).toBeVisible();
  40 |
  41 |     await page.close();
  42 | });
  43 |
```