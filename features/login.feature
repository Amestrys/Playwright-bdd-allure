# Les tags @allure.label.* sont lus nativement par allure-playwright.
# Ils enrichissent l'organisation sans nécessiter de code supplémentaire.

# --- Hiérarchie BDD (onglet Behaviours) ---
@allure.label.epic:Authentication
@allure.label.feature:Login
Feature: User Authentication

  # --- Métadonnées par scénario ---
  @allure.label.severity:critical
  @allure.label.story:SuccessfulLogin
  @allure.id:AUTH-001
  @allure.label.tag:smoke
  @allure.label.tag:regression
  Scenario: Successful login with valid credentials
    Given I navigate to the login page
    When I submit username "tomsmith" and password "SuperSecretPassword!"
    Then I should be logged in successfully
    And the stored username should be "tomsmith"