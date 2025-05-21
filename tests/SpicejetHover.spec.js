import {test, expect} from '@playwright/test'

test('Spice jet MouseHover', async({page}) => {
    await page.goto('https://www.spicejet.com')
    await page.locator('//*[@id="main-container"]/div/div[1]/div[2]/div[1]/div/div[2]/div[2]/div/div[1]/div[1]').hover()
    await page.getByText('Our Program').click()
    await expect(page).toHaveURL('https://www.spicejet.com')
    //await page.getByRole('link', {name: 'Add-ons'}).hover()
    //await page.locator('.header-logo').click()

})