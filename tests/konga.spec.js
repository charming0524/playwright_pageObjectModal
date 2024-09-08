import test, { page, expect } from "@playwright/test";

test("Konga Testing", async ({ page }) => {
  await page.goto("https://www.konga.com/");

  const search = page.getByRole("searchbox", {
    name: "Search for products, brands",
  });

  // to have the konga title
  await expect(page).toHaveTitle(
    "Buy Phones, Fashion, Electronics in Nigeria_Konga Online Shopping | Konga Online Shopping"
  );

  // to be certain the navbar-brand is visible
  await expect(
    page.getByRole("link", { name: "Smiling face of Konga logo." })
  ).toBeVisible();

  // click to search for products
  await search.click();

  // fill the search with your desired products
  await search.fill("Iphone x");

  //await page.getByRole('searchbox', { name: 'Search for products, brands' }).press('Enter');

  //click on the search button
  await page.getByRole("button", { name: "Search" }).click();

  //click the cart to check out
  //await page.getByRole('link', { name: 'cart My Cart' }).click();

  //await page.getByText('Subtotal₦285,000Checkout').click();

  //locating the exact product you want
  await page
    .locator(
      "li:nth-child(2) > div > .a2cf5_2S5q5 > ._4941f_1HCZm > form > ._2aac2_3bwnD > ._0a08a_3czMG"
    )
    .click();

  //click my cart to checkout
  await page.getByRole("link", { name: "cart My Cart" }).click();

  //click on the checkout button
  await page.getByText(/.*Checkout/).click();

  // to be certain the konga brand is visible in the checkout section
  await page.waitForSelector('//img[@alt="Smiling face of Konga logo."]');
});
