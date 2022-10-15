import {test} from "@playwright/test";
import {HomePage} from "../../page-objects/homePage";
import {LoginNewPage} from "../../page-objects/loginNewPage";
import {Navbar} from "../../page-objects/components/Navbar";
import {TransferFundsPage} from "../../page-objects/transferFundsPage";

test.describe("Transfer Funds and Make Payments" , () => {
    let homePage: HomePage;
    let loginPage: LoginNewPage;
    let navbar: Navbar;
    let transferFundsPage: TransferFundsPage

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        loginPage = new LoginNewPage(page);

        await homePage.visit();
        await homePage.clickOnSignIn();

        await loginPage.login("username", "password")
        await loginPage.goToTransferFunds();

        navbar = new Navbar(page);
        transferFundsPage = new TransferFundsPage(page);
    })

    test("Transfer funds", async ({page}) => {
       await navbar.clickOnTab("Transfer Funds");
       await transferFundsPage.fillForm();
       await transferFundsPage.assertVerifyText();
       await transferFundsPage.assertSuccessMessage();
    })
})
