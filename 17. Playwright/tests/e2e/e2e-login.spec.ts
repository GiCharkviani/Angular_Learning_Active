import {test, expect} from "@playwright/test";

test.describe.parallel("Login / Logout flow", () => {
    // Before hook
    test.beforeEach(async ({page}) => {
        await page.goto("https://gicharkviani.github.io/messenger/auth/login");
    })
    // Negative Scenario
    test("Negative scenario for Login", async ({page}) => {
        await page.type("input[formcontrolname=\"email\"]","dsadadas@gmail.com");
        await page.type("input[formcontrolname=\"password\"]","PassWooord123");
        await page.click("button.login-btn");

        const errorMessage = await page.locator("p");
        await expect(errorMessage).toContainText("Wrong Email or/and Password");
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
