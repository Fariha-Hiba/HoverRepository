# Test info

- Name: radio button count 2
- Location: C:\PlaywrightTrainingAscendion\tests\RadioButtonCount.spec.js:13:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.facebook.com/r.php?entry_point=login", waiting until "load"

    at C:\PlaywrightTrainingAscendion\tests\RadioButtonCount.spec.js:14:16
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test'
   2 |
   3 | test('radio button count 1', async({page}) => {
   4 |     await page.goto('https://testautomationpractice.blogspot.com/#')
   5 |    
   6 |     const radios = await page.$$('input[type="radio"]')
   7 |     console.log(`Radio Button Count: ${radios.length}`)
   8 |
   9 |     await page.locator('id=male').check()
  10 |     await expect(page.locator('id=male')).toBeChecked()
  11 | })
  12 |
  13 | test('radio button count 2', async({page}) => {
> 14 |     await page.goto('https://www.facebook.com/r.php?entry_point=login')
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  15 |    
  16 |     const radios = await page.$$('input[type="radio"]')
  17 |     console.log(`Radio Button Count: ${radios.length}`)
  18 |
  19 |     await page.locator('(//input[@type="radio"])[3]').check()
  20 |     await expect(page.locator('(//input[@type="radio"])[3]')).toBeChecked()
  21 | })
```