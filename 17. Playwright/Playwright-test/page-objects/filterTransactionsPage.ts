import {expect, Locator, Page} from "@playwright/test";

export class FilterTransactionsPage {
    readonly page: Page;
    readonly accountActivity: Locator;
    readonly allTransactions: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountActivity = page.locator("#aa_accountId");
        this.allTransactions = page.locator("#all_transactions_for_account tbody tr");
    }

    async selectChecking() {
        await this.accountActivity.selectOption("2");
        await expect(this.allTransactions).toHaveCount(3);
    }

    async selectLoan() {
        await this.accountActivity.selectOption("4");
        await expect(this.allTransactions).toHaveCount(2);
    }

    async selectBrokerage() {
        await this.accountActivity.selectOption("6");
        await expect(this.page.locator(".well")).toBeVisible();
    }
}
