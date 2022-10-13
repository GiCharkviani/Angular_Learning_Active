# Notebook for Playwright

## Install commands:
- ``npm i @playwright/test`` - to download playwright testing package;
- ``npx playwright install`` - after that we run this command, which will download all browsers for testing;

## Run test commands:
- ``npx playwright test`` - will run tests;

## Intro
We should import test and expect from **"@playwright/test"**, in order to be able to use assertions and tests;
All functions are asynchronous, therefore we should use async/await syntax for that;

- `` test("Descriotion", async ({smth}) => {}) `` - is the test function, the first parameter is just description of test and the second must be async function that for example can have parameter {page}, which we use later;

## Test function parameters
### async ({page}) => {}
**We assume await before each function call**
- `` page.goto("url") `` - will load website from inserted address;
- `` page.locator("h1") `` - will find a html element and we can store it in a variable
- ``  ``


## Assertions
### expect()
**we assume expect() function before each dot**

**We assume await before each expect() function call**

- `` .toContainText("some text") `` - checks if HTML element contains specific text;
- 
