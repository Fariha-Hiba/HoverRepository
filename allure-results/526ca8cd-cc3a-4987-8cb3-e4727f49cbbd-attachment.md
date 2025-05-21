# Test info

- Name: Easy Calculation Hover
- Location: C:\PlaywrightTrainingAscendion\tests\EasyCalculationHover.spec.js:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)

Locator: locator(':root')
Expected string: "Free Online Math Calculator e Converter"
Received string: "Free Online Math Calculator and Converter"
Call log:
  - expect.toHaveTitle with timeout 5000ms
  - waiting for locator(':root')
    9 × locator resolved to <html lang="en">…</html>
      - unexpected value "Free Online Math Calculator and Converter"

    at C:\PlaywrightTrainingAscendion\tests\EasyCalculationHover.spec.js:7:24
```

# Test source

```ts
  1 | import {test, expect} from '@playwright/test'
  2 |
  3 | test('Easy Calculation Hover', async({page}) => {
  4 |     await page.goto('https://www.easycalculation.com/')
  5 |     await page.locator('.lang').hover()
  6 |     await page.getByRole('link', {name: 'Português'}).click()
> 7 |     await expect(page).toHaveTitle('Free Online Math Calculator e Converter')
    |                        ^ Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)
  8 |
  9 | })
```