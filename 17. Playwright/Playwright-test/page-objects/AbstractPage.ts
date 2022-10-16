import { Page } from "@playwright/test";

export class AbstractPage {
    constructor(protected page: Page) {
    }

    // just for testing
    async wait(time) {
        await this.page.waitForTimeout(time);
    }
}
