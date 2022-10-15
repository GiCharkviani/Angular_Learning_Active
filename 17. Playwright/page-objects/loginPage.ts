import {expect, Locator, Page} from "@playwright/test";

export class LoginPage {
    // Define selectors
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    // Init selectors using constructor
    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator("input[formcontrolname=\"email\"]");
        this.passwordInput = page.locator("input[formcontrolname=\"password\"]");
        this.loginButton = page.locator("button.login-btn");
        this.errorMessage = page.locator("p");
    }

    // Define login page methods
    async visit() {
        await this.page.goto("https://gicharkviani.github.io/messenger/auth/login");
    }

    async login(email: string, password: string) {
        await this.emailInput.type(email);
        await this.passwordInput.type(password);
        await this.loginButton.click();
    }

    async assertErrorMessage() {
        await expect(this.errorMessage).toContainText("Wrong Email or/and Password");
    }
}
