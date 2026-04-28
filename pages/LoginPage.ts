import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async navigate() {
        // L'URL est maintenant définie dans le fichier .env
        await this.page.goto(process.env['BASE_URL'] || '');
    }

    async login(username: string, password: string) {
        // the-internet.herokuapp.com n'utilise pas d'attributs aria parfaits, 
        // voici des sélecteurs de secours pour l'exemple
        await this.page.locator('#username').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('button[type="submit"]').click();
    }

    async verifyLoginSuccess() {
        const successMessage = this.page.locator('#flash.success');
        await expect(successMessage).toBeVisible();
        await expect(successMessage).toContainText('You logged into a secure area!');
    }
}