import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartIcon = this.page.locator('a[data-test="shopping-cart-link"]');
    }

    async verifyLoginSuccess() {
        await expect(this.cartIcon).toBeVisible();
    }
}