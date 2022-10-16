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
