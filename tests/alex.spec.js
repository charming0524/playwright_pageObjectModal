import { test, expect } from "@playwright/test";

test("Sauce-Demo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  //to have a title Swag labs
  await expect(page).toHaveTitle("Swag Labs");

  // to test if the login-button is visible
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();

  // to click the login-button
  await page.locator('[data-test="login-button"]').click();

});


//test any website checkbox 