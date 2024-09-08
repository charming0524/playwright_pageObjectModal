import { test, expect } from "@playwright/test";

test("Sauce", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  //waiting for selector of username 
  await page.waitForSelector('#user-name', {timeout: 5000});
   
  //filling in the username 
  await page.fill('#user-name', 'Charming pc');

   //waiting for selector of password
   await page.waitForSelector('#password', {timeout: 5000});

    //filling in the password
    await page.fill('#password', 'Charming123');

     //waiting for selector of the login-button
  //await page.waitForSelector('#login-button');

   //click the submit button 
  //await page.click('#login-button');

  await page.waitForSelector('//input[@id="login-button"]', {timeout: 5000});
await page.locator('//input[@id="login-button"]').click();

await expect(page).toHaveScreenshot();

});


