# Test info

- Name: Dropdown Test
- Location: C:\PlaywrightTrainingAscendion\tests\DropdownsTest.spec.js:3:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

    at C:\PlaywrightTrainingAscendion\tests\DropdownsTest.spec.js:4:16
```

# Page snapshot

```yaml
- banner:
  - heading "Automation Testing Practice" [level=1]
  - paragraph: For Selenium, Cypress & Playwright
- list:
  - listitem:
    - link "Home":
      - /url: http://testautomationpractice.blogspot.com/
  - listitem:
    - link "Udemy Courses":
      - /url: https://www.pavanonlinetrainings.com/p/udemy-courses.html
  - listitem:
    - link "Online Trainings":
      - /url: https://www.pavanonlinetrainings.com/
  - listitem:
    - link "Blog":
      - /url: https://www.pavantestingtools.com/
  - listitem:
    - link "PlaywrightPractice":
      - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
- heading "GUI Elements" [level=3]:
  - link "GUI Elements":
    - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test'
   2 |
   3 | test('Dropdown Test', async({page}) => {
>  4 |     await page.goto('https://testautomationpractice.blogspot.com/');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
   5 |  
   6 |   // Select options from dropdown using different methods
   7 |   await page.selectOption('#country', 'India');
   8 |   await page.selectOption('#country', { label: 'India' });
   9 |   await page.selectOption('#country', { value: 'uk' });
  10 |   await page.selectOption('#country', { index: 6 });
  11 |  
  12 |   // Verify number of dropdown options
  13 |   const options = await page.$$('#country option');
  14 |   expect(options.length).toBe(10);
  15 |  
  16 |   const options1 = page.locator('//select[@id="country"]/option');
  17 |   await expect(options1).toHaveCount(10);
  18 |  
  19 |   // Check if 'India' is present in the dropdown options
  20 |   let flag = false;
  21 |   for (const option of options) {
  22 |     const textOptions = await option.textContent();
  23 |     console.log(textOptions);
  24 |     if (textOptions.includes('India')) {
  25 |       flag = true;
  26 |       break;
  27 |     }
  28 |   }
  29 |
  30 |
  31 | expect(flag).toBeTruthy()
  32 | await page.waitForTimeout(3000)
  33 | await page.close()
  34 | })
```