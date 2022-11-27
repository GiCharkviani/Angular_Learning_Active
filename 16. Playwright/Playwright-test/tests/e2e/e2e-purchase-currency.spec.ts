import {test} from "@playwright/test";
import {LoginNewPage} from "../../page-objects/loginNewPage";
import {HomePage} from "../../page-objects/homePage";
import {Navbar} from "../../page-objects/components/Navbar";
import {PayBillsNavbar} from "../../page-objects/components/PayBillsNavbar";
import {PurchaseCurrencyPage} from "../../page-objects/purchaseCurrencyPage";

test.describe("Purchase foreign currency cash test", () => {
    let homePage: HomePage;
    let loginPage: LoginNewPage;
    let navbar: Navbar;
    let payBillsNavbar: PayBillsNavbar;
    let purchaseCurrencyPage: PurchaseCurrencyPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        loginPage = new LoginNewPage(page);

        await homePage.visit();
        await homePage.clickOnSignIn();

        await loginPage.login("username", "password");
        await loginPage.goToTransferFunds();

        navbar = new Navbar(page);
        await navbar.clickOnTab("Pay Bills")
        payBillsNavbar = new PayBillsNavbar(page);
        await payBillsNavbar.clickNav(3);

        purchaseCurrencyPage = new PurchaseCurrencyPage(page);
    })

    test("Should purchase", async ({page}) => {
        await purchaseCurrencyPage.fillForm(500);
    })
})
