# Notebook for Playwright

## Install commands:
- ``npm i @playwright/test`` - to download playwright testing package;
- ``npx playwright install`` - after that we run this command, which will download all browsers for testing;

## Run test command:
- ``npx playwright test`` - will run tests;
### Flags:
- `` --headed `` - will launch in browser as well;
- `` --browser=firefox `` - will test in firefox;
- `` --headed --browser=firefox `` - will launch in browser (firefox) and test in firefox;
- `` --browser=all `` - will test for all browsers;
- `` [folder]/[file] `` - will test only specific test file;
- `` --reporter=[type] `` - here you specify type of report;
  - `` line `` - reports only in command line ina simply way;
  - `` list `` - reports only in command line by default as it is (list of tests);
  - `` dot `` - reports only in command line and gives you green or red dot;
  - `` junit `` - reports only in command line printing xml format report;
  - `` html `` - reports in and generates separate html file;
- `` show-report `` - last report will show;


## Intro
We should import test and expect from **"@playwright/test"**, in order to be able to use assertions and tests;
All functions are asynchronous, therefore we should use async/await syntax for that;

- `` test("Descriotion", async ({smth}) => {}) `` - is the test function, the first parameter is just description of test and the second must be async function that for example can have parameter {page}, which we use later;

## Annotations
**We assume test function or chained version before each function call** <br />
**We could their combinations as well (chained)**

- `` .skip. `` - will skip this test;
- `` .only. `` - only this test will run;
- `` .describe. `` - we can group many tests under one description;
- `` .parallel. `` - it will run tests in parallel, not after each other, but it should be in suit (describe) and it will affect tests in this suit;

#### Examples:
```
test.only("test", async ({page}) => {})
test.skip("test", async ({page}) => {})

test.describe("My first test suite" , () => {
    test("test", async ({page}) => {})
    test("test", async ({page}) => {})
})
```

## Tags
We specify them with this syntax @tagName in test assertion, after it's name =>  
`` test("Assertions @myTag", async ({page}) => {}) `` and then we run the following command =>
`` npx playwright test --grep @myTag `` and inverted version would be (all except this test) => 
`` npx playwright test --grep-invert @myTag ``


## Test Hooks
**They better be grouped under suit (describe annotation) and then only:**
- `` test.beforeAll(async ({page}) => {}) `` - it runs specific code before all tests start and it runs once;
- `` test.beforeEach(async ({page}) => {}) `` - it runs specific code before each test;
- `` test.afterAll(async ({page}) => {}) `` - it runs specific code after all tests start and it runs once;
- `` test.afterEach(async ({page}) => {}) `` - it runs specific code after each test;

#### Example:
```
test.beforeEach(async ({page}) => {
  await page.goto("https://www.example.com");
})
```

## Inspector
**If we write ``await page.pause()`` inspector page will start and as a result, app will start executing tests, if we are in headed mode we will see browser popups**

## Test function parameters
### async ({page}) => {}
**We assume await before each function call** <br />
**We sometimes example data as parameters** <br />
**if it's subsection, we assume parent section proceeds as well before that, not only await keyword, I mean**


- `` page.goto("url") `` - will load website from inserted address;
- `` page.locator("h1") `` - will find a html element and we can store it in a variable;
- `` page.click(#id or text=someText) `` - we can click something on page using this function;
- `` page.screenshot({path: "screenshot.png", fullPage: true}) `` - screenshots the page and saved screenshots;
- `` page.$("h1") `` -  it targets the concrete element in order to perform some actions on it, for example screenshot;
  - `` .screenshot({path: "single_screenshot"}) `` - and after that, we can just screenshot this element only;
- `` page.waitForSelector(css selector) `` -  it will wait for element to appear in configured timout and will provide assertion as well;
- `` page.keyboard `` - keyboard events, that are listed below;
  - `` .press("enter") `` - imitates keyboard event, in this case enter press;
- `` page.selectOption("css selector", "value") `` - to select value in select element;




#### Selectors examples:
```
test("Selectors", async ({page}) => {
    // text
    await page.click("text=some text");

    // css selectors
    await page.click("button");
    await page.click("#id");
    await page.click(".class");

    // Only visible css selector
    await page.click(".submit-button:visible");

    // Combinations
    await page.click("#username .first");

    // XPath
    await page.click("//button");
    
})
```
- `` page.type("selector", "value") `` - used for entering values in input fields;


## Assertions
### expect()
**we assume expect() function before each dot** <br />
**We assume await before each expect() function call**

- `` .toContainText("some text") `` - checks if HTML element contains specific text;
- `` .toHaveURL("url") `` - checks if website is on specified url;
- `` .toHaveTitle("title") `` - checks if website has specified title;
- `` .toBeVisible() `` - checks if element is visible;
- `` .toHaveText() `` - checks if element has specified text;
- `` .toHaveCount(number) `` - checks how many-times element appears;
- `` .not.`` - it can proceed any other, and it reverts it;

## Custom helpers
We can have functions in a different file and then just call them to test things
#### Example:
***spec file:***
```
import {loadHomepage, assertTitle } from '../helpers';


test.only("Custom Helpers", async ({page}) => {
    await loadHomepage(page);
    await assertTitle(page);
})
```
***helper file:***
```
export async function loadHomepage(page) {
    await page.goto("https://www.example.com");
}

export async function assertTitle(page) {
    await page.waitForSelector("h1");
}
```


## CONFIGURATION
1. Creating file on root level, named - playwright.config.ts;
2. importing **PlaywrightTestConfig** from **@playwright/test**;
3. declaring variable with above-mentioned type and assigning to an object literal;
4. write configuration;
5. export it like so: **export default config**;
6. in command use flag **--config=playwright.config.ts --project=Webkit** // in case of having projects array, you can pick project so

#### basic example:
```
import {PlaywrightTestConfig} from "@playwright/test";
const config: PlaywrightTestConfig = {}
```

### configuration object properties:
Assuming example values next to the properties
- **timeout: 60000** - number of milliseconds as a global timeout for all the tests to finish;
- **retries: 0** - how many times to rerun failing test;
- **use: {}** - here you specify browser specific configs;
  - **headless: true** - run in head-full or headless mode;
  - **viewport: {width: 1280, height: 720}** - for which size of monitor to test;
  - **actionTimeout: 15000** - maximum how long time to take any action in browser;
  - **ignoreHTTPSErrors: true** - ignores HTTPS errors;
  - **video: "off"** - video recording, it has its own modes;
  - **screenshot: "off"** - screenshot, it has its own modes;
- **projects: [ {} ]** - here you specify all browsers as an objects;
  - **{ name: "Chromium, use: {browserName: "chromium"} }** - here you specify which browsers you will be testing for;


## SCRIPTS
**We can do it from package.json in a following ways:**
```
  "scripts": {
    "test:chrome": "playwright test --config=playwright.config.ts --project=Chromium"
  },
```
**Then running command:** ``npm run tests:chrome`` <br />
**overwriting command (adding new value)**: ``npm run tests:chrome -- --headed`` => --headed flag will be added


 
