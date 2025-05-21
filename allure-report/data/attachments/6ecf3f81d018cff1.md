# Test info

- Name: Bootstrap Dropdown Test
- Location: C:\PlaywrightTrainingAscendion\tests\BootstrapDropdown.spec.js:2:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.jquery-az.com/boots/demo.php?ex=63.0_2", waiting until "load"

    at C:\PlaywrightTrainingAscendion\tests\BootstrapDropdown.spec.js:3:12
```

# Page snapshot

```yaml
- navigation:
  - link "Logo":
    - /url: https://www.jquery-az.com/
    - img "Logo"
  - list:
    - listitem:
      - link "Home":
        - /url: https://www.jquery-az.com/
    - listitem:
      - link "Bootstrap 3":
        - /url: https://www.jquery-az.com/bootstrap-tips-tutorials/
    - listitem:
      - link "Bootstrap 4":
        - /url: https://www.jquery-az.com/bootstrap-4/
    - listitem:
      - link "Bootstrap 5":
        - /url: https://www.jquery-az.com/bootstrap-5/
    - listitem:
      - link "jQuery":
        - /url: https://www.jquery-az.com/jquery-tips/
    - listitem:
      - link "Tailwind":
        - /url: https://www.jquery-az.com/tailwind-css/
- text: Bootstrap Demo
- table:
  - rowgroup:
    - row "Bootstrap Code Output":
      - cell "Bootstrap Code":
        - strong: Bootstrap Code
      - cell:
        - strong
      - cell "Output":
        - strong: Output
    - row:
      - cell:
        - textbox: "<!DOCTYPE html> <html> <head> <link rel=\"stylesheet\" href=\"https://netdna.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\"> <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js\"></script> <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js\"></script> <link rel=\"stylesheet\" href=\"css/bootstrap-multiselect/bootstrap-multiselect.css\" type=\"text/css\"> <script type=\"text/javascript\" src=\"js/bootstrap-multiselect/bootstrap-multiselect.js\"></script> </head> <body> <div class=\"container\"> <div class=\"example\"> <script type=\"text/javascript\"> $(document).ready(function() { $('#option-droup-demo').multiselect(); }); </script> <select id=\"option-droup-demo\" multiple=\"multiple\"> <optgroup label=\"Web Development\"> <option value=\"jQuery\">jQuery</option> <option value=\"Bootstrap\">Bootstrap</option> <option value=\"HTML\" selected=\"selected\">HTML</option> <option value=\"CSS\" selected=\"selected\">CSS</option> <option value=\"Angular\">Angular</option> </optgroup> <optgroup label=\"Programming Languages\"> <option value=\"Java\">Java</option> <option value=\"csharp\">C#</option> <option value=\"Python\">Python</option> </optgroup> <optgroup label=\"Databases\"> <option value=\"MySQL\">MySQL</option> <option value=\"Oracle\">Oracle</option> <option value=\"MSSQL\">MS SQL Server</option> </optgroup> </select> </div> </div> </div> </body> </html>"
      - cell
      - cell "HTML CSS HTML, CSS":
        - listbox:
          - group:
            - option "jQuery"
            - option "Bootstrap"
            - option "HTML" [selected]
            - option "CSS" [selected]
            - option "Angular"
          - group:
            - option "Java"
            - option "C#"
            - option "Python"
          - group:
            - option "MySQL"
            - option "Oracle"
            - option "MS SQL Server"
        - button "HTML, CSS"
- contentinfo:
  - text: © jQuery-AZ 2025. All Rights Reserved
  - link "Privacy Policy":
    - /url: https://www.jquery-az.com/privacy-policy/
  - link "About":
    - /url: https://www.jquery-az.com/about-us/
  - link "Contact Us":
    - /url: https://www.jquery-az.com/contact/
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test'
   2 | test('Bootstrap Dropdown Test', async ({ page }) => {
>  3 | await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
   4 | await page.click('.multiselect-selected-text');
   5 |  
   6 | const count = await page.$$('.multiselect-container.dropdown-menu li input');
   7 |   expect(count.length).toBe(11);
   8 |
   9 |   await page.waitForSelector('.multiselect-container.dropdown-menu li label');
  10 |   const options = await page.$$('.multiselect-container.dropdown-menu li label');
  11 |
  12 |  
  13 |   for (const option of options) {
  14 |     const text = await option.textContent();
  15 |     console.log(text);
  16 |     if (text.includes('Java') || text.includes('C#') || text.includes('MySQL')) {
  17 |       await option.check();
  18 |     }
  19 |   }
  20 |  
  21 |   await page.waitForTimeout(5000);
  22 |  
  23 |   for (const option of options) {
  24 |     const text = await option.textContent();
  25 |     console.log(text);
  26 |     if (text.includes('HTML') || text.includes('CSS') || text.includes('C#')) {
  27 |       await option.uncheck();
  28 |     }
  29 |   }
  30 |  
  31 |   await page.waitForTimeout(5000);
  32 |   await page.close();
  33 | });
```