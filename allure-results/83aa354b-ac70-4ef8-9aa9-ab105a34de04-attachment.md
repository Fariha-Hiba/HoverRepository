# Test info

- Name: Easy Calculation Test
- Location: C:\PlaywrightTrainingAscendion\tests\EasyCalculation.spec.js:6:5

# Error details

```
Error: page.waitForSelector: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div/div[1]/div/span/a/h3') to be visible

    at C:\PlaywrightTrainingAscendion\tests\EasyCalculation.spec.js:26:34
```

# Page snapshot

```yaml
- separator
- iframe
- separator
- text: About this page Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
- link "Why did this happen?":
  - /url: "#"
- text: "IP address: 136.226.244.196 Time: 2025-05-20T21:54:37Z URL: https://www.google.com/search?safe=active&q=easycalculation&sca_esv=5d26048b6932b442&source=hp&ei=GvosaJH0H9StseMPjKvE8Ag&iflsig=ACkRmUkAAAAAaC0IKqd4C3lzNG4RwBLgMHf4MvBWaUS6&oq=EasyCalculation&gs_lp=Egdnd3Mtd2l6Ig9FYXN5Q2FsY3VsYXRpb24qAggAMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyCxAAGIAEGIYDGIoFMgUQABjvBUjJAlAAWABwAHgAkAEAmAGOAaABjgGqAQMwLjG4AQHIAQD4AQGYAgGgAqQBmAMAkgcDMC4xoAebBbIHAzAuMbgHpAHCBwMzLTHIBxI&sclient=gws-wiz&sei=HPosaK38J5ncseMP16jk0A0&safe=active"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | // ↑ Add this line to allow up to 60 seconds for the test instead of the default 30 seconds
   4 | test.setTimeout(60000);
   5 |
   6 | test('Easy Calculation Test', async ({ page }) => {
   7 |     await page.goto('https://www.google.com/');
   8 |
   9 |     await page.fill("#APjFqb", "EasyCalculation");
  10 |
  11 |     const searchResults = await page.$$("//div[@class='wM6W7d']/span");
  12 |     console.log(await searchResults.length);
  13 |
  14 |     const firstRes = await page.waitForSelector("(//div[@class='wM6W7d']/span)[1]");
  15 |     await firstRes.click();
  16 |
  17 |     await page.waitForTimeout(20000);
  18 |
  19 |     // for (const res in searchResults) {
  20 |     //     if(res.matchAll('easycalculation')) {
  21 |     //         res.click()
  22 |     //         break
  23 |     //     }
  24 |     // }
  25 |
> 26 |     const firstLink = await page.waitForSelector('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div/div[1]/div/span/a/h3');
     |                                  ^ Error: page.waitForSelector: Test timeout of 60000ms exceeded.
  27 |     await firstLink.click();
  28 |
  29 |     const searchBox = await page.locator('#googleSearchId');
  30 |     await searchBox.fill('playwright');
  31 |     await page.locator('.search_button').click();
  32 |
  33 |     await page.waitForLoadState('networkidle');
  34 |     await page.waitForTimeout(10000);
  35 |
  36 |     const firstPwLink = await page.waitForSelector("//a[contains(text(),'How to Use')]");
  37 |     await firstPwLink.click();
  38 |
  39 |     await expect(page.locator('/html/body/header/nav/div[1]/ul/li/a')).toBeVisible();
  40 |
  41 |     await page.close();
  42 | });
  43 |
```