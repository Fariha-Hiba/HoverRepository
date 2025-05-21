# Test info

- Name: Multi Select Dropdown Test
- Location: C:\PlaywrightTrainingAscendion\tests\MultiSelectDropdown.spec.js:3:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

    at C:\PlaywrightTrainingAscendion\tests\MultiSelectDropdown.spec.js:4:12
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test'
   2 |  
   3 | test('Multi Select Dropdown Test', async ({ page }) => {
>  4 | await page.goto('https://testautomationpractice.blogspot.com/')
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
   5 |   await page.selectOption('#colors', ['Red', 'Blue', 'Green', 'Yellow'])
   6 |  
   7 |   const options = await page.$$("//select[@id='colors']/option")
   8 |   expect(options.length).toBe(7)
   9 |  
  10 |   let flag = false
  11 |   for (const option of options) {
  12 |     const text = await option.textContent()
  13 |     console.log(text)
  14 |     if (text.includes('Yellow')) {
  15 |       flag = true
  16 |       break
  17 |     }
  18 |   }
  19 |  
  20 |   expect(flag).toBeTruthy()
  21 |   await page.waitForTimeout(2000)
  22 |   await page.close()
  23 | })
  24 |
```