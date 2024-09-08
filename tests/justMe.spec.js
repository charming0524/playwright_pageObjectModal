import {test, expect, chromium} from '@playwright/test'

test.skip("Slow motion and video recording demo", async () => { 

    const browser = await chromium.launch({

        slowMo: 500,
        headless: false

    });

    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width: 800, height: 600}
        }
    });

    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/');


    await page.goto("https://www.saucedemo.com/");

  //to have a title Swag labs
  await expect(page).toHaveTitle("Swag Labs");

  // to test if the login-button is visible
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();

  // to click the login-button
  await page.locator('[data-test="login-button"]').click();

    await context.close();



});

test("Sauce-Demo", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  
    //to have a title Swag labs
    await expect(page).toHaveTitle("Swag Labs");
  
    // to test if the login-button is visible
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  
    // to click the login-button
    await page.locator('[data-test="login-button"]').click();

    test.fail();
  
  });

  test("facebook @charm", async ({ page }) => {
    await page.goto("https://web.facebook.com/");
  
    //to have a title Swag labs
    await expect(page).toHaveTitle("Facebook – log in or sign up");
  
    test.slow();
  
  });

  test.fixme("test to be fixed @bigcharm", async ({ page }) => {
    await page.goto("https://web.facebook.com/");
  
    //to have a title Swag labs
    await expect(page).toHaveTitle("Facebook – log in or sign up");
  
    //test.slow();
  
  });