import { test as base } from 'playwright-bdd';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';

// Ré-export centralisé des fonctions allure-js-commons utilisées dans le projet
export {
  step,
  parameter,
  attachment,
  description,
  link,
  issue,
  tms,
  epic,
  feature,
  story,
  suite,
  parentSuite,
  subSuite,
  owner,
  severity,
  tag,
  tags,
  label,
  displayName,
  ContentType,
  Severity,
  LabelName,
  LinkType,
} from 'allure-js-commons';

/**
 * Conteneur de données partagées entre les steps d'un même scénario.
 * Chaque scénario reçoit sa propre instance fraîche.
 */
export type ScenarioData = Record<string, unknown>;

/**
 * Extension du test Playwright avec les fixtures personnalisées.
 *
 * - loginPage    : instance de LoginPage prête à l'emploi dans chaque step.
 * - scenarioData : objet mutable pour faire transiter des données d'une step à l'autre.
 */
export const test = base.extend<{
  loginPage: LoginPage;
  scenarioData: ScenarioData;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  scenarioData: async ({}, use) => {
    await use({});
  },
});

// Ré-export des builders BDD liés aux fixtures personnalisées
export const { Given, When, Then, Before, After, BeforeAll, AfterAll } = createBdd(test);
