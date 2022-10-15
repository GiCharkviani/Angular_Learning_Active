import {expect, Locator, Page} from "@playwright/test";

export class TransferFundsPage {
    readonly fromOption: Locator;
    readonly toOption: Locator;
    readonly amountInput: Locator;
    readonly descriptionInput: Locator;
    readonly submitButton: Locator;

    constructor(private readonly page: Page) {
        this.fromOption = page.locator("#tf_fromAccountId");
        this.toOption = page.locator("#tf_toAccountId");
        this.amountInput = page.locator("#tf_amount");
        this.descriptionInput = page.locator("#tf_description");
        this.submitButton = page.locator("#btn_submit");
    }

    async fillForm() {
        await this.fromOption.selectOption("2");
        await this.toOption.selectOption("3");
        await this.amountInput.type("500");
        await this.descriptionInput.type("Test message");
        await this.submitButton.click();
    }

    async assertVerifyText() {
        const boardHeader = await this.page.locator("h2.board-header");
        await expect(boardHeader).toContainText("Verify");
    }

    async assertSuccessMessage() {
        await this.page.click("#btn_submit");
        const message = await this.page.locator(".alert-success");
        await expect(message).toContainText("You successfully submitted your transaction");
    }
}
