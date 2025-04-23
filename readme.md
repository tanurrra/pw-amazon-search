## Automation of search scenario for Amazon using Playwright

### Scenario

1. Open https://www.amazon.com
2. Accept cookies if the pop-up appears. (Didn't see cookies so this is not implemented)
3. Search for „Bike”
4. Check if page title contains "Bike"
5. Print out name and price of first search result
6. If price is higher than 250,  test result should be fail, otherwise pass

### To run test
Use command
 
``` npx playwright test ```