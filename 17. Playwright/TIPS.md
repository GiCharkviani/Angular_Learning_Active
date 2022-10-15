# Tips, Tricks and The Best Practices

## Test Info Object
**It is accessible from the second parameter of async function in test function** <br/>
**It includes all information about global test object - settings, paths and etc.** <br/>
#### Example:
```
test("TestInfo Object", async ({page}, testInfo) => {
  ...
})
```

## Skip and Fixme Browser Annotation
**It is accessible as a second property in async func object parameter** <br/>
**You should call .skip() or fixme() on test func and then (They do the same, just used for different cases, depends on why to skip):**
#### Example:
```
test("Test Skip Browser", async ({page, browserName}) => {
    test.skip(browserName === "chromium", "Feature not ready in Chrome browser");
    test.fixme(browserName === "chromium", "Test is not stable, needs revision");
    await page.goto("https://www.example.com");
})
```

## Retry when failing
**It should be specified in command line with the ``--retries=3`` flag. it can also be globally specified in config file**

## Parametrized tests
**It can run tests as many times as you want, for example in a loop**
#### Example:
```
const people = ["Mike", "Judy", "Peter", "Elon", "Alice"];
for(const name of people) {
    test(`Running test for ${name}`, async ({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html");
        await page.type("#searchTerm", name);
        await page.waitForTimeout(3000)
    })
}
```

## Mouse Movement Simulation
**It is accessible from page.mouse object. There are functions, like move(), down() and etc.**
#### Example:
```
test("Mouse Movement Simulation", async ({page}) => {
   await page.goto("https://www.example.com");
   await page.mouse.move(0,0);
   await page.mouse.down();
   await page.mouse.move(0,100);
   await page.mouse.wheel(5, 4);
})
```

## Multiple Browser Pages & Tabs
**In async func object, as a page, we should pass ***browser*** parameter** <br/>
**Then from browser object. we call .newContext() function and store it in variable, after we just create new tabs from 
that variable, calling .newPage() function**
#### Example:
```
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
```

## Device Emulation
**For this following command should be run from CLI:** 
``npx playwright open --device="device name" websiteToVisit``
**. it will emulate specified device and with it will open with inspector**

## Generate PDF Files
**For this following command should be run from CLI:**
``npx playwright pdf https://www.websiteUrl.com file-name.pdf``

## Generate Customized Screenshots
**For this following command should be run from CLI:**
``npx playwright screenshot --device="iPhone 11" --color-scheme=dark --wait-for-timeout=3000 twitter.com twitter-iphone-image.png``

## Emulate Browser Timeout & Languages
**For this following command should be run from CLI:**
``npx playwright open --timezone="Europe/Rome" --lang="it-IT" --geolocation="40.121, 10.123" google.com``
