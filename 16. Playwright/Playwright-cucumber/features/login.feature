Feature: Login action

  As a use
  I want to login into application

  Scenario: Login with valid credentials
    Given I visit a login page
    When I fill the login form with valid credentials
    Then I should see the home page

  Scenario Outline: Try to login with invalid credentials
    Given I visit a login page
    When I fill the login form with "<username>" and "<password>"
    Then I wait for 3 seconds

    Examples:
      | username | password |
      | fail-1  | fail-1  |
      | fail-2  | fail-2  |
      | fail-3  | fail-3  |
