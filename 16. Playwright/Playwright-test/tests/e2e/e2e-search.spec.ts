import {test, expect} from "@playwright/test"
import {HomePage} from "../../page-objects/homePage";

test.describe("Search Results", () => {
    test("Should find search results", async ({page}) => {
        const homePage: HomePage = new HomePage(page);
        await homePage.visit();
        await homePage.searchFor("bank");

        const numberOfLinks = await page.locator("li > a");
        await expect(numberOfLinks).toHaveCount(2);
    })
})
