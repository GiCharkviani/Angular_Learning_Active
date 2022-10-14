import {test, expect, Locator} from "@playwright/test";
import {loadHomepage, assertTitle } from '../helpers';


test("Simple basic test", async ({page}) => {
    // Here goes the test code
    await page.goto("https://www.example.com");
    const pageTitle: Locator = await page.locator('h1');
    await expect(pageTitle).toContainText("Example Domain");
})

test("Clicking on Element", async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.click("#signin_button");
    // next step
    await page.click("text=Sign in");

    const errorMessage: Locator = page.locator(".alert-error");
    await expect(errorMessage).toContainText("Login and/or password are wrong.");
})

test.skip("Selectors", async ({page}) => {
    // text
    await page.click("text=some text");

    // css selectors
    await page.click("button");
    await page.click("#id");
    await page.click(".class");

    // Only visible css selector
    await page.click(".submit-button:visible");

    // Combinations
    await page.click("#username .first");

    // XPath
    await page.click("//button");
})


test.describe("My first test suite" , () => {

    test("Working with Inputs", async ({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html");
        await page.click("#signin_button");

        await page.type("#user_login", "some username");
        await page.type("#user_password", "some password");

        await page.click("text=Sign in");

        const errorMessage: Locator = page.locator(".alert-error");
        await expect(errorMessage).toContainText("Login and/or password are wrong.");
    })

    test("Assertions @myTag", async ({page}) => {
        await page.goto("https://www.example.com");
        await expect(page).toHaveURL("https://www.example.com");
        await expect(page).toHaveTitle("Example Domain");

        const element = page.locator("h1");
        await expect(element).toBeVisible();
        await expect(element).toHaveText("Example Domain");
        await expect(element).toHaveCount(1);

        const nonExistingElement = await page.locator("h5");
        await expect(nonExistingElement).not.toBeVisible();
    })

})

test.describe.parallel.only("Hooks", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://www.example.com");
    })

    test("Screenshots", async ({page}) => {
        // 1. step is load website
        // await page.goto("https://www.example.com");
        // 2. take screenshot of full page
        await page.screenshot({path: "screenshot.png", fullPage: true});
    })

    test("Single element Screenshot", async ({page}) => {
        // await page.goto("https://www.example.com");
        const element = await page.$('h1'); // targets the element
        await element.screenshot({path: "single_element_screenshot.png"})
    })
})

test.skip("Custom Helpers", async ({page}) => {
    await loadHomepage(page);
    // await page.pause(); // only for debugging and development purposes
    await assertTitle(page);
})
