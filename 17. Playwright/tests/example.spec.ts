import {test, expect, Locator} from "@playwright/test";

test("Simple basic test", async ({page}) => {
    // Here goes the test code
    await page.goto("https://www.example.com");
    const pageTitle: Locator = await page.locator('h1');
    await expect(pageTitle).toContainText("Example Domain");
})
