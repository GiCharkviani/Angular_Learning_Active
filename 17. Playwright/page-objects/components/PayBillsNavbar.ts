import {Locator, Page} from "@playwright/test";

export class PayBillsNavbar {
    readonly paySavedPayee: Locator;
    readonly addNewPayee: Locator;
    readonly purchaseForeignCurrency: Locator;

    constructor(private page: Page) {
        this.paySavedPayee = page.locator("div.ui-tabs ul li:nth-child(1)")
        this.addNewPayee = page.locator("div.ui-tabs ul li:nth-child(2)")
        this.purchaseForeignCurrency = page.locator("div.ui-tabs ul li:nth-child(3)")
    }

    async clickNav(navItem: number) {
        switch (navItem) {
            case 1:
                await this.paySavedPayee.click();
                break;
            case 2:
                await this.addNewPayee.click();
                break;
            case 3:
                await this.purchaseForeignCurrency.click();
                break;
            default:
                throw new Error("No such a tab found")
        }
    }
}
