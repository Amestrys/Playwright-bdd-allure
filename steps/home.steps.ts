import { expect } from '@playwright/test';
import { Given, When, Then, step, parameter, Severity, severity } from '../fixtures/fixtures';
import { BASE_URL, ENV, USER_NAME, PASSWORD } from '../config/env';


Then('I should be logged in successfully', async ({ homePage }) => {
    await severity(Severity.CRITICAL);
    await step('Vérifier la connexion réussie', async () => {
        await homePage.verifyLoginSuccess();
    });
});