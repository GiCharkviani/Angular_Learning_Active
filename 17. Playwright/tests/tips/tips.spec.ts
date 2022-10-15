import {test} from "@playwright/test";
import {getRandomNumber, getRandomString} from "../../Utils/data-helpers";

test.describe.parallel.only("Tips & Tricks Section", () => {

    test("TestInfo Object", async ({page}, testInfo) => {
        await page.goto("https://www.example.com");
        console.log(await getRandomNumber());
        console.log(await getRandomString());
    })

    test("Test Skip Browser", async ({page, browserName}) => {
        test.skip(browserName === "chromium", "Feature not ready in Chrome browser");
        await page.goto("https://www.example.com");
    })

    test("Test Fixme Annotation", async ({page, browserName}) => {
        test.fixme(browserName === "chromium", "Test is not stable, needs revision");
        await page.goto("https://www.example.com");
    })

    const people = ["Mike", "Judy", "Peter", "Elon", "Alice"];
    for(const name of people) {
        test.skip(`Running test for ${name}`, async ({page}) => {
            await page.goto("http://zero.webappsecurity.com/index.html");
            await page.type("#searchTerm", name);
            await page.waitForTimeout(3000)
        })
    }

    test("Mouse Movement Simulation", async ({page}) => {
       await page.goto("https://www.example.com");
       await page.mouse.move(0,0);
       await page.mouse.down();
       await page.mouse.move(0,100);
       await page.mouse.wheel(5, 4);
    })

    test("Multiple Browser Tabs inside 1 Browser", async ({browser}) => {
        const context = await browser.newContext();
        const page1 = await context.newPage();
        const page2 = await context.newPage();
        const page3 = await context.newPage();

        await page1.goto("https://www.example.com");
        await page2.goto("https://www.example.com");
        await page3.goto("https://www.example.com");

        await page1.waitForTimeout(5000);
    })



})
