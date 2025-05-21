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

# Page snapshot

```yaml
- navigation:
  - link "About":
    - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
  - link "Store":
    - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
  - button "Google apps":
    - img
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
- img
- search:
  - img
  - combobox "Search"
  - button "Search by voice":
    - img
  - button "Search by image":
    - img
  - button "Google Search"
  - button "I'm Feeling Lucky"
- text: "Google offered in:"
- link "हिन्दी":
  - /url: https://www.google.com/setprefs?sig=0_fxDjSGPaL-DJWEiFWE39OMNirtE%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjP25qZgLONAxXLRmwGHfm3N9UQ2ZgBCBc
- link "বাংলা":
  - /url: https://www.google.com/setprefs?sig=0_fxDjSGPaL-DJWEiFWE39OMNirtE%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwjP25qZgLONAxXLRmwGHfm3N9UQ2ZgBCBg
- link "తెలుగు":
  - /url: https://www.google.com/setprefs?sig=0_fxDjSGPaL-DJWEiFWE39OMNirtE%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwjP25qZgLONAxXLRmwGHfm3N9UQ2ZgBCBk
- link "मराठी":
  - /url: https://www.google.com/setprefs?sig=0_fxDjSGPaL-DJWEiFWE39OMNirtE%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwjP25qZgLONAxXLRmwGHfm3N9UQ2ZgBCBo
- link "தமிழ்":
  - /url: https://www.google.com/setprefs?sig=0_fxDjSGPaL-DJWEiFWE39OMNirtE%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwjP25qZgLONAxXLRmwGHfm3N9UQ2ZgBCBs
- link "ગુજરાતી":
  - /url: https://www.google.com/setprefs?sig=0_fxDjSGPaL-DJWEiFWE39OMNirtE%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwjP25qZgLONAxXLRmwGHfm3N9UQ2ZgBCBw
- link "ಕನ್ನಡ":
  - /url: https://www.google.com/setprefs?sig=0_fxDjSGPaL-DJWEiFWE39OMNirtE%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwjP25qZgLONAxXLRmwGHfm3N9UQ2ZgBCB0
- link "മലയാളം":
  - /url: https://www.google.com/setprefs?sig=0_fxDjSGPaL-DJWEiFWE39OMNirtE%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwjP25qZgLONAxXLRmwGHfm3N9UQ2ZgBCB4
- link "ਪੰਜਾਬੀ":
  - /url: https://www.google.com/setprefs?sig=0_fxDjSGPaL-DJWEiFWE39OMNirtE%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwjP25qZgLONAxXLRmwGHfm3N9UQ2ZgBCB8
- contentinfo:
  - text: India
  - link "Advertising":
    - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business":
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works":
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en-IN&fg=1
  - button "Settings"
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