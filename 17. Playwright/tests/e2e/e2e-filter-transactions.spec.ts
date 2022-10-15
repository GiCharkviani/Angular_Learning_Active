import {test} from "@playwright/test";
import {HomePage} from "../../page-objects/homePage";
import {LoginNewPage} from "../../page-objects/loginNewPage";
import {FilterTransactionsPage} from "../../page-objects/filterTransactionsPage";
import {Navbar} from "../../page-objects/components/Navbar";

test.describe("Filter Transactions", () => {
    let homePage: HomePage;
    let loginPage: LoginNewPage;
    let filterTransactionsPage: FilterTransactionsPage;
    let navbar: Navbar;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        loginPage = new LoginNewPage(page);

        await homePage.visit();
        await homePage.clickOnSignIn();

        await loginPage.login("username", "password");

        navbar = new Navbar(page);
        filterTransactionsPage = new FilterTransactionsPage(page);
    })

    test("Verify the results for each account" , async ({page}) => {
        await navbar.clickOnTab("Account Activity");

        await filterTransactionsPage.selectChecking();
        await filterTransactionsPage.selectLoan();
        await filterTransactionsPage.selectBrokerage();
    })

})
