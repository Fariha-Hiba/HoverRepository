import { test, expect } from '@playwright/test';
test('Upload Files Test 1', async ({ page }) => {
 
  await page.goto('https://the-internet.herokuapp.com/upload')
  await page.locator('#file-upload').setInputFiles('uploadFiles/roseImage.jpg')
  await page.getByRole('button', { name: 'Choose File' }).click()
  
  //await expect(page.locator('#file-upload')).toContainText('roseImage.jpg')
 
  await page.waitForTimeout(8000)
  await page.close()
})

test('Upload Files Test 2', async ({ page }) => {
 
  await page.goto('https://west-wind.com/wconnect/wcscripts/fileupload.wwd')
  await page.locator('#upload').setInputFiles('uploadFiles/roseImage.jpg')
  await expect (page.locator('#filename')).toContainText('roseImage.jpg')
  await page.getByRole('button', { name: 'Upload...' }).click()
  await expect(page.locator('//*[@id="ImageList"]/img')).toBeVisible()
 
  await page.waitForTimeout(8000)
  await page.close()
})

test('Upload Files Test 3', async ({ page }) => {
 
  await page.goto('http://blueimp.github.io/jQuery-File-Upload/')
  await page.locator('//input[@type="file"]' ).setInputFiles('uploadFiles/roseImage.jpg')
  await page.getByRole('button', {name: 'Start upload'}).click()
  await expect(page.locator('//*[@id="fileupload"]/table/tbody/tr/td[1]/span/a/img')).toBeVisible()
  await expect(page.locator('//*[@id="fileupload"]/table/tbody/tr/td[2]/p/a')).toHaveText('roseImage.jpg')
 
  await page.waitForTimeout(8000)
  await page.close()
})