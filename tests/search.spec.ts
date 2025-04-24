import { test, expect } from '@playwright/test';
const searchTerm = 'Bike';
const maxPrice = 250;

test(`can seach for ${searchTerm} and price should be less than ${maxPrice}`, async ({ page }) => {
  await page.goto('https://www.amazon.com');
  const searchfield = page.locator('#twotabsearchtextbox');
  const searchButton = page.locator('#nav-search-submit-button');

  // Search for searchTerm
  await searchfield.fill(searchTerm);
  await searchButton.click();

  // Check if page title contains "searchTerm"
  expect(await page.title()).toContain(searchTerm);

  // Print out name and price of first search result
  const firstProductPrice = await page.locator('//div[@role="listitem"]//span[@class="a-price"]/span[@class="a-offscreen"]').first().textContent();
  const firstProductName = await page.locator('//div[@role="listitem"]//div[@data-cy="title-recipe"]/a//span').first().textContent();
  console.log('First Product Name: ' +  firstProductName);
  console.log('First Product Price: ' +  firstProductPrice);

  const productPriceNum = parseFloat(firstProductPrice!.replace(/[^0-9.-]+/g,""));

  // If price is higher than 250, test result should be fail, otherwise pass
  // note: I didn't specify if price=250 is a pass, but let's assume it is
  expect(productPriceNum).toBeLessThanOrEqual(maxPrice); 
});
