# CUCUMBER LIBRARY WITH PLAYWRIGHT
# Setup
1. **The first we should install just playwright (not playwright/test, as test runner will be from cucumber), 
chai, cucumber and cucumber html reporter with the following command: 
``npm i playwright chai @cucumber/cucumber cucumber-html-reporter``.**

2. **We should create following folders: features, page-objects, setup and setup-definitions;
and also following files: cucumber.js and reporter.js for later uses.**

3. **Then we need in setup folder assertions.js, as playwright by default doesn't include any assertions,
what's why we installed "chai" and we will configure it in this file.**
#### Example of setup (assertions.js): 
```
const chai = require("chai");

global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should;
```

4. **Then we create hooks.js in setup folder for controlling flow.**
#### Example of hooks (hooks.js):
```
const playwright = require("playwright");
const { Before, After, BeforeAll, AfterAll } = require("@cucumber/cucumber");

BeforeAll(async () => {
    console.log("Launch Browser");
    global.browser = await playwright["chromium"].launch({headless: false}); // only for dev
})

AfterAll(async () => {
    console.log("Close Browser")
    await global.browser.close();
})

Before(async () => {
    console.log("Create new context and page");
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
})

After(async () => {
    console.log("Close context and page")
    await global.page.close();
    await global.context.close();
})
```
**After this then we glue everything in cucumber.js like this:**
```
const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definitions/**/*.step.js
`

module.exports = {
    default: `${common} features/**/*.feature`
}
```
**step.js' and features are not yet setup, but will in future**

5. **Then we create file login.feature in features folder. It has its own type
of syntax which should be learned, but now just will demonstrate only example.
Just matter of fact, Feature, Scenario, Given, When, Then are keywords**
#### Example of login.feature syntax (login.feature):
```
Feature: Login action

  As a use
  I want to login into application

  Scenario: Login with valid credentials
    Given I visit a login page
    When I fill the login form with valid credentials
    Then I should see the home page
```
**Code is then automated under each sentences in step-definitions folder using playwright.** 

6. **Then we create login-step.js file in step-definitions folder and there we should import allies (keywords) from cucumber
in order to define actions under them**
#### Example of steps (login-step.js):
```
const { Given, When, Then, defineStep } = require("@cucumber/cucumber");

Given("I visit a login page", async function() {
    await page.goto("https://www.saucedemo.com/");
})

When("I fill the login form with valid credentials", async function() {
    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");
    await page.click("#login-button");
})

Then("I should see the home page", async function() {
    await page.waitForSelector(".inventory_list");
})
```
**Instead of keywords like When or Given, you could use defineStep.**

7. **To run test, we need to run following 
command: ``/node_modules/.bin/cucumber-js --require cucumber.js --require step-definitions/**/*.js -f json:cucumber_report.json --publish-quiet``.
Then it will generate cucumber_report.json file.**

8. **We can also apply here page-objects pattern, e.g. creating login-page.js in page-objects folder and create there class 
and after login-steps.js will look like this:**
#### Example of login-steps.js after page-object pattern applied:
```
const { Given, When, Then, defineStep } = require("@cucumber/cucumber");
const { LoginPage } = require("../page-objects/login-page");

const loginPage = new LoginPage();

Given("I visit a login page", async function() {
    await loginPage.navigateToLoginScreen();
})

When("I fill the login form with valid credentials", async function() {
    await loginPage.submitLoginForm();
})

Then("I should see the home page", async function() {
    await loginPage.assertUserIsLoggedIn()
})
```

9. **We can also create custom html report, for this in report.js file
we should write following code:**
#### Example of reporter.js:
```
const reporter = require("cucumber-html-reporter");

const options = {
    theme: "bootstrap",
    jsonFile: "cucumber_report.json",
    output: "reports/cucumber_report.html",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: { // it's optional
        "App Version": "2.0.0",
        "Test Environment": "STAGING",
        Browser: "Chrome 54.0",
        Platform: "Windows 10",
    }
};

reporter.generate(options);
```
**And after this we should execute this file from node like this: ``node reporter.js``.**

10. **We can also create scenario outlines, in other words - parametrized scenarios.
For this we should add following syntax in login.feature file:**
#### Example for login.feature:
```
  Scenario Outline: Try to login with invalid credentials
    Given I visit a login page
    When I fill the login form with "<username>" and "<password>"
    Then I wait for 3 seconds

    Examples:
      | username | password |
      | fail-1  | fail-1  |
      | fail-2  | fail-2  |
      | fail-3  | fail-3  |
```
**And then following function in the login-step.js:**
#### Example from login-step.js:
```
defineStep(/^I fill the login form with "([^"]*)" and "([^"]*)"$/, async function(username, password) {
    await loginPage.submitLoginWithParameters(username, password);
})
```
**As a result, it will iterate through given examples and pass each value as a parameter to our function.**


