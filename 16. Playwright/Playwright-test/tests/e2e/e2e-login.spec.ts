import {test, expect} from "@playwright/test";
import {LoginPage} from "../../page-objects/loginPage";

test.describe.parallel("Login / Logout flow", () => {
    let loginPage: LoginPage;
    // Before hook
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.visit();
    })
    // Negative Scenario
    test("Negative scenario for Login", async ({page}) => {
        await loginPage.login("dsadadas@gmail.com", "PassWooord123");
        await loginPage.assertErrorMessage();
    })
    // Positive Scenario + Logout
    test("Positive Scenario for login + logout", async ({page}) => {
        await page.type("input[formcontrolname=\"email\"]","gi.charkviani@gmail.com");
        await page.type("input[formcontrolname=\"password\"]","giorgi");
        await page.click("button.login-btn");

        const logoutIcon = await page.locator("i.fa-sign-out-alt");
        await expect(logoutIcon).toBeVisible();

        await logoutIcon.click();
        await expect(page).toHaveURL("https://gicharkviani.github.io/messenger/auth/login");
    })
})
