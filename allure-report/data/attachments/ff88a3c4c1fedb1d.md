# Test info

- Name: AutoSuggest DropDown - Google Search
- Location: C:\PlaywrightTrainingAscendion\tests\AutoSuggestDropdown.spec.js:3:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.google.com/", waiting until "load"

    at C:\PlaywrightTrainingAscendion\tests\AutoSuggestDropdown.spec.js:4:12
```

# Test source

```ts
   1 | import { expect, test } from '@playwright/test'
   2 |  
   3 | test('AutoSuggest DropDown - Google Search', async ({ page }) => {
>  4 | await page.goto('https://www.google.com/')
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
   5 |   await page.fill("#APjFqb", "playwright")
   6 |   //await page.locator('#APjFqb').pressSequentially('selenium',{delay:500})
   7 |   await page.waitForSelector("//div[@class='wM6W7d']/span")
   8 |   const options = await page.$$("//div[@class='wM6W7d']/span")
   9 |   for (const option of options) {
  10 |     const text = await option.textContent()
  11 |     console.log('text: ', text)
  12 |     if (text.includes('playwright tutorial')) {
  13 | await option.click()
  14 |       break
  15 |     }
  16 |   }
  17 |  
  18 | await page.goto('https://playwright.dev')
  19 |   await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')
  20 |   await page.waitForTimeout(5000)
  21 |   await page.close()
  22 | })
```