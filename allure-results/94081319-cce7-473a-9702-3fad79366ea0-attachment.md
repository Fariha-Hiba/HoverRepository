# Test info

- Name: Assertion Test
- Location: C:\PlaywrightTrainingAscendion\tests\Assertions.spec.js:3:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demo.nopcommerce.com/register", waiting until "load"

    at C:\PlaywrightTrainingAscendion\tests\Assertions.spec.js:4:16
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test'
   2 |
   3 | test('Assertion Test', async ({page}) => {
>  4 |     await page.goto('https://demo.nopcommerce.com/register')
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
   5 |     await expect(page).toHaveURL('https://demo.nopcommerce.com/register') //URL
   6 |     await expect(page).toHaveTitle('nopCommerce demo store. Register') //Title
   7 |     await expect(page.getByAltText('nopCommerce demo store')).toBeVisible() //Visible
   8 |     await expect(page.getByRole('button', { name: 'SEARCH' })).toBeEnabled() //Enabled
   9 |     await expect(page.locator('#Newsletter')).toBeChecked() //Checked
  10 |     await expect(page.locator('#register-button')).toHaveAttribute('name', 'register-button') //Attribute
  11 |     await expect(page.getByText('Your Password')).toHaveText('Your Password') //Text
  12 |     await expect(page.getByText('Your Password')).toContainText('Password') //ContainText
  13 |     
  14 |     const val = page.locator('#Company') //Value
  15 |     val.fill('Raghavendra')
  16 |     await expect(val).toHaveValue('Raghavendra')
  17 |     
  18 |     const count1 = page.locator('a')
  19 |     await expect(count1).toHaveCount(62) //Count
  20 |     
  21 |     const count = await page.$$('a')
  22 |     expect(count.length).toBe(62)
  23 |     
  24 |     await page.waitForTimeout(2000)
  25 |     await page.close()
  26 | })
```