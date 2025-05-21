# Test info

- Name: Dropdown FB Test
- Location: C:\PlaywrightTrainingAscendion\tests\FBDropdowns.spec.js:3:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.facebook.com/r.php?entry_point=login", waiting until "load"

    at C:\PlaywrightTrainingAscendion\tests\FBDropdowns.spec.js:4:16
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test'
   2 |
   3 | test('Dropdown FB Test', async ({page}) => {
>  4 |     await page.goto('https://www.facebook.com/r.php?entry_point=login')
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
   5 |
   6 |     
   7 |     const days = await page.$$('#day option')
   8 |     console.log(days.length)
   9 |
  10 |     for (const day of days) {
  11 |         const dayText = await day.textContent()
  12 |         console.log(dayText)
  13 |     }
  14 |
  15 |     const months = await page.$$('#month option')
  16 |     console.log(months.length)
  17 |
  18 |     for (const month of months) {
  19 |         const monthText = await month.textContent()
  20 |         console.log(monthText)
  21 |     }
  22 |
  23 |     const years = await page.$$('#year option')
  24 |     console.log(years.length)
  25 |
  26 |     for (const year of years) {
  27 |         const yearsText = await year.textContent()
  28 |         console.log(yearsText)
  29 |     }
  30 | })
```