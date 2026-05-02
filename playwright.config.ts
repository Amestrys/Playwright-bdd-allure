import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';
import { BASE_URL } from './config/env';

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: ['fixtures/fixtures.ts', 'steps/**/*.ts', 'hooks/**/*.ts'],
});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir,
  /* Run tests in files in parallel */
  fullyParallel: true,
  reporter: [
    ['html'], // Rapport par défaut de Playwright (optionnel)
    ['allure-playwright'], // Rapport Allure
    cucumberReporter('json', { outputFile: 'cucumber-report/report.json' }),
    cucumberReporter('html', { outputFile: 'cucumber-report/report.html' })
  ],
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
  ]

});
