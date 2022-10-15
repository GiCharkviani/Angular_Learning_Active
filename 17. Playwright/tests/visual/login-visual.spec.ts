import {test} from "@playwright/test";
import {HomePage} from "../../page-objects/homePage";
import {LoginNewPage} from "../../page-objects/loginNewPage";

test.describe("Login Page Visual Tests", () => {
    let homePage: HomePage;
    let loginPage: LoginNewPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        loginPage = new LoginNewPage(page);

        await homePage.visit();
        await homePage.clickOnSignIn();
    })

    test("Login Form", async ({page}) => {
        await loginPage.snapshotLoginForm();
    })

    test("Login Error Message", async ({page}) => {
        await loginPage.login("Fail", "Some invalid password");
        await loginPage.snapshotErrorMessage();
    })

})
