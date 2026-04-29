import {
  Before, After, BeforeAll, AfterAll,
  parentSuite, suite, subSuite, owner, attachment, ContentType,
} from '../fixtures/fixtures';

/**
 * Hook exécuté une seule fois avant tous les scénarios du worker.
 */
BeforeAll(async function () {
  console.log('\n=== Démarrage de la suite de tests ===');
});

/**
 * Hook exécuté une seule fois après tous les scénarios du worker.
 */
AfterAll(async function () {
  console.log('\n=== Fin de la suite de tests ===');
});

/**
 * Hook exécuté avant chaque scénario.
 * - Vide les cookies pour garantir un contexte propre.
 * - Définit la hiérarchie de suites dans Allure (onglet Suites).
 */
Before(async function ({ page }) {
  console.log('\n--- Démarrage du scénario ---');
  await page.context().clearCookies();

  // Organisation hiérarchique dans le rapport Allure
  await parentSuite('PlaywrightBDD Project');
  await suite('Authentication');
  await subSuite('Login');
  await owner('QA Team');
});

/**
 * Hook exécuté après chaque scénario.
 * - Log les données collectées via scenarioData.
 * - Attache scenarioData en JSON dans le rapport Allure.
 */
After(async function ({ scenarioData }) {
  console.log('--- Fin du scénario. Données collectées :', scenarioData);

  await attachment(
    'Scenario Data',
    JSON.stringify(scenarioData, null, 2),
    { contentType: ContentType.JSON },
  );
});
