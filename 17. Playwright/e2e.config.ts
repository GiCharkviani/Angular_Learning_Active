import {PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 7000,
    retries: 0,
    testDir: 'tests/e2e',
    use: {
        headless: true,
        viewport: {width: 1280, height: 720},
        actionTimeout: 10000, // recommended
        ignoreHTTPSErrors: true,
        video: "retain-on-failure",
        screenshot: "only-on-failure"
    },
    projects: [
        {
            name: "Chromium",
            use: { browserName: "chromium" }
        },
        {
            name: "Firefox",
            use: { browserName: "firefox" }
        },
        {
            name: "Webkit",
            use: { browserName: "webkit" }
        }
    ]
}

export default config;
