import {expect, test} from "@playwright/test";

test.describe.only("Visual Regression Testing Example",
    () => {

        test.beforeEach(async ({page}) => {
            await page.goto("https://www.example.com/");
        })

        test("Full Page Snapshot", async ({page}) => {
            expect(await page.screenshot()).toMatchSnapshot("homepage.png");
        })

        test("Single Element Snapshot", async ({page}) => {
            const pageElement = await page.$("h1");
            await expect(await pageElement.screenshot()).toMatchSnapshot("page-title.png")
        })

    })
