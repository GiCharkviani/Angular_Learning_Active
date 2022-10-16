import {expect, Locator, Page} from "@playwright/test";

export class PurchaseCurrencyPage {
    readonly page: Page;
    readonly headerTitle: Locator;
    readonly selectCurrency: Locator;
    readonly rateDisplay: Locator;
    readonly amountInput: Locator;
    readonly inDollarsRadioButton: Locator;
    readonly calculateCostButton: Locator;
    readonly purchaseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerTitle = page.locator("h2.board-header");
        this.selectCurrency = page.locator("#pc_currency");
        this.rateDisplay = page.locator("#sp_sell_rate");
        this.amountInput = page.locator("#pc_amount");
        this.inDollarsRadioButton = page.locator("#pc_inDollars_false");
        this.calculateCostButton = page.locator("#pc_calculate_costs");
        this.purchaseButton = page.locator("#purchase_cash");
    }

    async fillForm(amount: number) {
        await expect(this.headerTitle).toContainText("Purchase foreign currency cash");
        await  this.selectCurrency.selectOption("GBP");
        await  expect(this.rateDisplay).toContainText("1 pound (GBP)");
        await  this.amountInput.type(String(amount));
        await  this.inDollarsRadioButton.check();
        await  this.calculateCostButton.click();
        const conversionAmount = this.page.locator("#pc_conversion_amount");
        await  expect(conversionAmount).toBeVisible();
        await  expect(conversionAmount).toContainText(`${amount}.00 pound (GBP)`);
        await  this.purchaseButton.click();
        const successMessage = await this.page.locator("#alert_content");
        await expect(successMessage).toHaveText("Foreign currency cash was successfully purchased.");
    }


}
