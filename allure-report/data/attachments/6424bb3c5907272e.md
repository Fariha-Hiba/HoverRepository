# Test info

- Name: Test3
- Location: C:\PlaywrightTrainingAscendion\tests\Reports.spec.js:13:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/#", waiting until "load"

    at C:\PlaywrightTrainingAscendion\tests\Reports.spec.js:14:16
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test'
   2 | test('Test1',  async ({ page }) => {
   3 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   4 |     await expect(page).toHaveTitle('OrangeHRM')
   5 |     await page.close()
   6 | })
   7 | test('Test2', async ({ page }) => {
   8 |     await page.goto('https://www.demoblaze.com/index.html')
   9 |     await page.waitForTimeout(2000)
  10 |     await expect(page).toHaveTitle('STORE')
  11 |     await page.close()
  12 | })
  13 | test('Test3',  async ({ page }) => {
> 14 |     await page.goto('https://testautomationpractice.blogspot.com/#')
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  15 |     await expect(page).toHaveTitle('Automation Testing Practice')
  16 |     await page.close()
  17 | })
```