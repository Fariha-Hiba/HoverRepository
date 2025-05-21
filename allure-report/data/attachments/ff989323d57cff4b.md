# Test info

- Name: Login Test - Practice Expand Testing
- Location: C:\PlaywrightTrainingAscendion\tests\Practice2.spec.js:3:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://practice.expandtesting.com/login", waiting until "load"

    at C:\PlaywrightTrainingAscendion\tests\Practice2.spec.js:4:16
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test'
   2 |
   3 | test('Login Test - Practice Expand Testing', async ({page}) => {
>  4 |     await page.goto('https://practice.expandtesting.com/login', { timeout: 60000 })
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
   5 |     await page.locator('#username').fill('practice')
   6 |     await page.fill('#password', 'SuperSecretPassword!')
   7 |     await page.click('.btn-primary')
   8 | })
   9 |
  10 | test('Checking Browser Title and URL - Practice Expand Testing', async({page})=>{
  11 |
  12 |     await page.goto('https://practice.expandtesting.com/login', { timeout: 60000 })
  13 |
  14 |     //Assertions
  15 |     await expect(page).toHaveTitle('Test Login Page for Automation Testing Practice')
  16 |     await expect(page).toHaveURL('https://practice.expandtesting.com/login')
  17 |     await page.close();
  18 | })
  19 |
  20 | test('Login Test - Practice Test Automation', async ({page}) => {
  21 |     await page.goto('https://practicetestautomation.com/practice-test-login/', { timeout: 60000 })
  22 |     await page.locator('#username').fill('student')
  23 |     await page.fill('#password', 'Password123')
  24 |     await page.click('#submit')
  25 | })
  26 |
  27 | test('Checking Browser Title and URL - Practice Test Automation', async({page})=>{
  28 |
  29 |     await page.goto('https://practicetestautomation.com/practice-test-login/', { timeout: 60000 })
  30 |
  31 |     //Assertions
  32 |     await expect(page).toHaveTitle('Test Login | Practice Test Automation')
  33 |     await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')
  34 |     await page.close();
  35 | })
  36 |
  37 |
```