# Test info

- Name: AutoSuggest DropDown - Google Search
- Location: C:\PlaywrightTrainingAscendion\tests\AutoSuggestDropdown.spec.js:3:5

# Error details

```
Error: page.goto: Navigation to "https://playwright.dev/" is interrupted by another navigation to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fsafe%3Dactive%26q%3Dplaywright%2Btutorial%26sca_esv%3D7fd10217c7be2381%26source%3Dhp%26ei%3DQPUsaPvaHZCXnesPwoWR2Ak%26iflsig%3DACkRmUkAAAAAaC0DUH-zrrv1FIPJxI7gW8jmaoxh9h1P%26oq%3Dplaywright%26gs_lp%3DEgdnd3Mtd2l6GgIYASIKcGxheXdyaWdodCoCCAEyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyCxAAGIAEGLEDGIMBMg4QABiABBixAxiDARiLAzILEAAYgAQYsQMYiwMyCxAAGIAEGLEDGIMBMggQABiABBiLAzILEAAYgAQYsQMYiwMyDhAAGIAEGLEDGIMBGIsDSLoHUABYAHAAeACQAQCYAWKgAWKqAQExuAEByAEA-AEBmAIBoAJ6mAMAkgcDMC4xoAe5BbIHAzAuMbgHeg%26sclient%3Dgws-wiz%26sei%3DQ_UsaMLSE9-hseMP9fLH8A0%26safe%3Dactive&q=EgSI4vTEGMPqs8EGIjAwKcJHBHN1Wf96fwBWpEvpZ8f-ut2-BxZqoSDw7dcnoSMRr9KQtVEGrAlxhpaPOgYyAVJaAUM"
Call log:
  - navigating to "https://playwright.dev/", waiting until "load"

    at C:\PlaywrightTrainingAscendion\tests\AutoSuggestDropdown.spec.js:18:12
```

# Page snapshot

```yaml
- separator
- separator
- text: About this page Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
- link "Why did this happen?":
  - /url: "#"
- text: "IP address: 136.226.244.196 Time: 2025-05-20T21:33:56Z URL: https://www.google.com/search?safe=active&q=playwright+tutorial&sca_esv=7fd10217c7be2381&source=hp&ei=QPUsaPvaHZCXnesPwoWR2Ak&iflsig=ACkRmUkAAAAAaC0DUH-zrrv1FIPJxI7gW8jmaoxh9h1P&oq=playwright&gs_lp=Egdnd3Mtd2l6GgIYASIKcGxheXdyaWdodCoCCAEyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyCxAAGIAEGLEDGIMBMg4QABiABBixAxiDARiLAzILEAAYgAQYsQMYiwMyCxAAGIAEGLEDGIMBMggQABiABBiLAzILEAAYgAQYsQMYiwMyDhAAGIAEGLEDGIMBGIsDSLoHUABYAHAAeACQAQCYAWKgAWKqAQExuAEByAEA-AEBmAIBoAJ6mAMAkgcDMC4xoAe5BbIHAzAuMbgHeg&sclient=gws-wiz&sei=Q_UsaMLSE9-hseMP9fLH8A0&safe=active"
```

# Test source

```ts
   1 | import { expect, test } from '@playwright/test'
   2 |  
   3 | test('AutoSuggest DropDown - Google Search', async ({ page }) => {
   4 | await page.goto('https://www.google.com/')
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
> 18 | await page.goto('https://playwright.dev')
     |            ^ Error: page.goto: Navigation to "https://playwright.dev/" is interrupted by another navigation to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fsafe%3Dactive%26q%3Dplaywright%2Btutorial%26sca_esv%3D7fd10217c7be2381%26source%3Dhp%26ei%3DQPUsaPvaHZCXnesPwoWR2Ak%26iflsig%3DACkRmUkAAAAAaC0DUH-zrrv1FIPJxI7gW8jmaoxh9h1P%26oq%3Dplaywright%26gs_lp%3DEgdnd3Mtd2l6GgIYASIKcGxheXdyaWdodCoCCAEyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyCxAAGIAEGLEDGIMBMg4QABiABBixAxiDARiLAzILEAAYgAQYsQMYiwMyCxAAGIAEGLEDGIMBMggQABiABBiLAzILEAAYgAQYsQMYiwMyDhAAGIAEGLEDGIMBGIsDSLoHUABYAHAAeACQAQCYAWKgAWKqAQExuAEByAEA-AEBmAIBoAJ6mAMAkgcDMC4xoAe5BbIHAzAuMbgHeg%26sclient%3Dgws-wiz%26sei%3DQ_UsaMLSE9-hseMP9fLH8A0%26safe%3Dactive&q=EgSI4vTEGMPqs8EGIjAwKcJHBHN1Wf96fwBWpEvpZ8f-ut2-BxZqoSDw7dcnoSMRr9KQtVEGrAlxhpaPOgYyAVJaAUM"
  19 |   await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')
  20 |   await page.waitForTimeout(5000)
  21 |   await page.close()
  22 | })
```