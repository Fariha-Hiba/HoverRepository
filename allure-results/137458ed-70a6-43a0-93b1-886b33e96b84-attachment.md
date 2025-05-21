# Test info

- Name: Checkboxes – In Playwright
- Location: C:\PlaywrightTrainingAscendion\tests\Checkboxes.spec.js:4:1

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

    at C:\PlaywrightTrainingAscendion\tests\Checkboxes.spec.js:5:12
```

# Test source

```ts
   1 | // 10_Checkboxes.spec.js
   2 | const { test, expect } = require('@playwright/test');
   3 |  
   4 | test('Checkboxes – In Playwright', async ({ page }) => {
>  5 | await page.goto('https://testautomationpractice.blogspot.com/');
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
   6 |   
   7 |   // Check and verify Sunday
   8 |   await page.locator('#sunday').check();
   9 |   await expect(page.locator('#sunday')).toBeChecked();
  10 |   await page.waitForTimeout(5000);
  11 |  
  12 |   // Uncheck and verify Sunday
  13 |   await page.locator('#sunday').uncheck();
  14 |   expect(await page.locator('#sunday').isChecked()).toBeFalsy();
  15 |   await page.waitForTimeout(5000);
  16 |  
  17 |   // Define a list of checkboxes
  18 |   const checkboxes = [
  19 |     "//input[@id='monday']",
  20 |     "//input[@id='sunday']",
  21 |     "//input[@id='friday']"
  22 |   ];
  23 |  
  24 |   // Check all of them
  25 |   for (const selector of checkboxes) {
  26 |     await page.locator(selector).check();
  27 |   }
  28 |   await page.waitForTimeout(5000);
  29 |  
  30 |   // Uncheck all of them
  31 |   for (const selector of checkboxes) {
  32 |     await page.locator(selector).uncheck();
  33 |   }
  34 |   await page.waitForTimeout(5000);
  35 |  
  36 |   await page.close();
  37 | });
```