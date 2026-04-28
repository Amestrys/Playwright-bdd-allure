Feature: User Authentication

  Scenario: Successful login with valid credentials
    Given I navigate to the login page
    When I submit username "tomsmith" and password "SuperSecretPassword!"
    Then I should be logged in successfully