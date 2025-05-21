# Test info

- Name: Radio Button Test
- Location: C:\PlaywrightTrainingAscendion\tests\RadioButtonDemo.spec.js:3:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demo.nopcommerce.com/register", waiting until "load"

    at C:\PlaywrightTrainingAscendion\tests\RadioButtonDemo.spec.js:4:16
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test'
   2 |
   3 | test('Radio Button Test', async({page}) => {
>  4 |     await page.goto('https://demo.nopcommerce.com/register')
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
   5 |
   6 |     await page.locator('#gender-male').check()
   7 |     await page.waitForTimeout(5000)
   8 |
   9 |     // Validation
  10 |     await expect (page.locator('#gender-male')).toBeChecked()
  11 | })
```