import {test, expect} from "@playwright/test";

test.describe.only("Purchase foreign currency cash test", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html");
        await page.click("#signin_button");
        await page.type("#user_login", "username");
        await page.type("#user_password", "password");

        await page.click("text=Sign in");

        await page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html");
    })

    test("Should purchase", async ({page}) => {
        await page.click("#pay_bills_tab");
        await page.click("div.ui-tabs ul li:last-of-type");

        const foreignCurrencyPurchase = await page.locator("h2.board-header");
        await expect(foreignCurrencyPurchase).toContainText("Purchase foreign currency cash");

        await page.selectOption("#pc_currency", "GBP");
        const sellRate = await page.locator("#sp_sell_rate");
        await expect(sellRate).toContainText("1 pound (GBP)");

        const AMOUNT = "500";
        await page.type("#pc_amount", AMOUNT);
        await page.check("#pc_inDollars_false");
        await page.click("#pc_calculate_costs");

        const conversionAmount = await page.locator("#pc_conversion_amount");
        await expect(conversionAmount).toBeVisible();
        await expect(conversionAmount).toContainText(`${AMOUNT}.00 pound (GBP)`);

        await page.click("#purchase_cash");
        const successMessage = await page.locator("#alert_content");
        await expect(successMessage).toHaveText("Foreign currency cash was successfully purchased.");

    })
})
