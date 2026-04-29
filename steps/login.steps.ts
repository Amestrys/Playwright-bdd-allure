import { expect } from '@playwright/test';
import { Given, When, Then, step, parameter, Severity, severity } from '../fixtures/fixtures';

Given('I navigate to the login page', async ({ loginPage }) => {
    await step('Ouvrir la page de connexion', async () => {
        await loginPage.navigate();
    });
});

When('I submit username {string} and password {string}', async ({ loginPage, scenarioData }, username: string, password: string) => {
    // Rend les paramètres visibles dans le rapport Allure
    await parameter('username', username);
    await parameter('password', '***'); // masqué dans le rapport

    await step(`Saisir les identifiants (utilisateur : ${username})`, async () => {
        await loginPage.login(username, password);
        scenarioData['username'] = username;
    });
});

Then('I should be logged in successfully', async ({ loginPage }) => {
    await severity(Severity.CRITICAL);
    await step('Vérifier la connexion réussie', async () => {
        await loginPage.verifyLoginSuccess();
    });
});

Then('the stored username should be {string}', async ({ scenarioData }, expectedUsername: string) => {
    await step(`Vérifier que le nom d'utilisateur stocké est "${expectedUsername}"`, async () => {
        expect(scenarioData['username']).toBe(expectedUsername);
    });
});