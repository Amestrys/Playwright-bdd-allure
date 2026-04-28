import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';

const { Given, When, Then } = createBdd();

Given('I navigate to the login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
});

When('I submit username {string} and password {string}', async ({ page }, username, password) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(username, password);
});

Then('I should be logged in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyLoginSuccess();
});