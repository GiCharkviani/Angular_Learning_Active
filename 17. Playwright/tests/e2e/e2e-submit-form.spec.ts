import {test, expect} from "@playwright/test";

test.describe("Make Post", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html");
        await page.click("#feedback");
    })

    // Reset feedback form
    test("Reset feedback form", async ({page}) => {
        await page.type("#name", "Some name");
        await page.type("#email", "Some email");
        await page.type("#subject", "Some subject");
        await page.type("#comment", "Some nice comment about the application");

        await page.click("input[name='clear']");

        const nameInput = await page.locator("#name");
        const commentInput = await page.locator("#comment");

        await expect(nameInput).toBeEmpty();
        await expect(commentInput).toBeEmpty();
    })

    // Submit feedback form
    test("Submit feedback form", async ({page}) => {
        await page.type("#name", "Some name");
        await page.type("#email", "Some email");
        await page.type("#subject", "Some subject");
        await page.type("#comment", "Some nice comment about the application");

        await page.click("input[name='submit']");

        await page.waitForSelector("#feedback-title");
    })
})
