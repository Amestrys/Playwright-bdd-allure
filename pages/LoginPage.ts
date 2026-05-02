import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly USER_NAMEInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.USER_NAMEInput = this.page.locator('#user-name');
        this.passwordInput = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async login(USER_NAME: string, password: string) {
        await this.USER_NAMEInput.fill(USER_NAME);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}