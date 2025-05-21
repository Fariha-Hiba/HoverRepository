# Test info

- Name: Links Test
- Location: C:\PlaywrightTrainingAscendion\tests\LinksAndProductsTest.spec.js:25:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://www.demoblaze.com/index.html", waiting until "load"

    at C:\PlaywrightTrainingAscendion\tests\LinksAndProductsTest.spec.js:26:16
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |  
   3 | test('Links and Products Test', async ({ page }) => {
   4 |  
   5 |   await page.goto('https://www.demoblaze.com/index.html')
   6 |   //Products
   7 |     await page.waitForSelector("//div[@id='tbodyid']//div/h4/a") // Optional
   8 |     const products = await page.$$("xpath=//div[@id='tbodyid']//div/h4/a")
   9 |  
  10 |   for (const product of products) {
  11 |     const textProduct = await product.textContent()
  12 |     console.log(textProduct)
  13 |     if (textProduct.includes('Sony vaio i5')) {
  14 |       await product.click()
  15 |       break
  16 |     }
  17 |   }
  18 |  
  19 |   await expect(page.getByRole('heading', { name: 'Sony vaio i5' })).toBeVisible()
  20 |   await page.waitForTimeout(2000)
  21 |   await page.close()
  22 | });
  23 |
  24 |
  25 | test('Links Test', async ({page}) => {
> 26 |     await page.goto('https://www.demoblaze.com/index.html')
     |                ^ Error: page.goto: Test ended.
  27 |
  28 |    const products = await page.$$('a'); // Get all anchor elements
  29 |
  30 | for (const product of products) {
  31 |     const text = await product.textContent();
  32 |     console.log(text); // Logs clean readable link text
  33 | }
  34 |     await page.close()
  35 |     
  36 | })
  37 |
  38 |  
```