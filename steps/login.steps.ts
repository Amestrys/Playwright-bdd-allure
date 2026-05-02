import { expect } from '@playwright/test';
import { Given, When, Then, step, parameter, Severity, severity } from '../fixtures/fixtures';
import { BASE_URL, ENV, USER_NAME, PASSWORD } from '../config/env';

Given('I navigate to the login page', async ({ loginPage }) => {
    await step('Ouvrir la page de connexion', async () => {
        await loginPage.navigate(BASE_URL);
        console.log(`=== Navigated to ${BASE_URL} using environment: ${ENV} ===`);
    });
});

When('I submit the correct credentials', async ({ loginPage, scenarioData }) => {
    // Rend les paramètres visibles dans le rapport Allure
    await parameter('USER_NAME', USER_NAME);
    await parameter('password', '***'); // masqué dans le rapport

    await step(`Saisir les identifiants (utilisateur : ${USER_NAME})`, async () => {
        await loginPage.login(USER_NAME, PASSWORD);
        scenarioData['USER_NAME'] = USER_NAME;
    });
});


Then('the stored USER_NAME should be the correct one', async ({ scenarioData }) => {
    await step(`Vérifier que le nom d'utilisateur stocké est "${USER_NAME}"`, async () => {
        expect(scenarioData['USER_NAME']).toBe(USER_NAME);
    });
});