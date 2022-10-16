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
   console.log("After hook");
})
