# CodeceptJS Library With Playwright

## Steps for Set up
1. **First we must install only playwright and codecept with ``npm install playwright codeceptjs`` command.**;
2. **We should initialize configuration for codeceptJS by running command ``npx codeceptjs init`` and then following
the instructions. It will generate all necessary files, includes _test.js_ files, where we write tests**
3. **Then we can write some test scenarios in generated test files. They look so:**
#### Example from example_test.js:
```
Feature('My test Suite');

Scenario('test something', ({ I }) => {
    I.amOnPage("https://www.example.com");
    I.see("Example"); // checking if specified text is visible
    I.dontSee("Google");
    I.seeElement("h1");
    I.dontSeeElement("#idontexist");
});
```
4. **To run test, you must write following command : ``npx codeceptjs run``.**

## **The big example how it works usually:**
```
Feature("Zero Bank Application - E2E Tests");

Before(({I}) => {
    I.amOnPage("http://zero.webappsecurity.com/index.html");
})

Scenario("Login Test - Negative", ({I}) => {
    I.click("#signin_button");
    I.seeElement("#login_form");
    I.fillField("#user_login", "incorrect");
    I.fillField("#user_password", "incorrect");
    I.click(".btn-primary");
    I.seeElement(".alert-error");
})

Scenario("Visit Test", ({I}) => {
    I.see("Online Banking");
})

After(({I}) => {
   console.log("After hook")
})
```

5. **Page Object Model** <br/>

**To generate, run command: ``npx codeceptjs gpo`` and it's ready. And follow the instructions**
#### Example of POM from LoginPage.js (Part was automatically generated):
```
const { I } = inject();

module.exports = {
    // Set your Locators
    loginForm: "#login_form",
    username: "#user_login",
    password: "#user_password",
    submitButton: ".btn-primary",

    // Create page methods
    submitLogin(username, password) {
        I.fillField(this.username, username);
        I.fillField(this.password, password);
        I.click(this.submitButton);
    },

    assertLoginFormIsVisible() {
        I.seeElement(this.loginForm);
    }
}
```
**this file should be included in codecept.config.js in includes property:**
```
include: {
    I: "./steps_file.js",
    LoginPage: "./pages/LoginPage.js"
 },
```
**And after page object model, test file looks like this:**
#### Example of e2e_test.js (POM):
```
Feature("Zero Bank Application - E2E Tests");

Before(({I}) => {
    I.amOnPage("http://zero.webappsecurity.com/index.html");
})

Scenario("Login Test - Negative", ({I, LoginPage}) => {
    I.click("#signin_button");
    I.seeElement("#login_form");
    LoginPage.submitLogin("invalid username", "invalid password");
    LoginPage.assertLoginFormIsVisible();
    I.seeElement(".alert-error");
})

Scenario("Visit Test", ({I}) => {
    I.see("Online Banking");
})

After(({I}) => {
   console.log("After hook")
})
```

