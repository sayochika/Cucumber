Feature: Search
  As a customer
  I want to be able to search for cars with chosen parameters
  SO that I can buy a car

  Scenario: Search for a particular car
    Given I am on Autotrader Homepage
    When I enter my postcode
    And I select a distance to postcode
    And I select a car of my choice
    And I click on Search for Car button
    Then the result for the car for is displayed
		And the result clicked on is displayed