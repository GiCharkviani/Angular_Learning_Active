import {test} from "@playwright/test";
import {HomePage} from "../../page-objects/homePage";
import {LoginNewPage} from "../../page-objects/loginNewPage";
import {PaymentPage} from "../../page-objects/paymentPage";
import {Navbar} from "../../page-objects/components/Navbar";

test.describe("New Payment", () => {
    let homePage: HomePage;
    let loginPage: LoginNewPage;
    let paymentPage: PaymentPage;
    let navbar: Navbar;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        loginPage = new LoginNewPage(page);


        await homePage.visit();
        await homePage.clickOnSignIn();

        await loginPage.login("username", "password");
        await loginPage.goToTransferFunds();

        paymentPage = new PaymentPage(page);
        navbar = new Navbar(page);
    })

    test("Should send new payment", async ({page}) => {
        await navbar.clickOnTab("Pay Bills");

        await paymentPage.createPayment();
        await paymentPage.assertSuccessMessage();
    })
})
