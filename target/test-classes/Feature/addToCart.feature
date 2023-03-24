@san
Feature: To verify the Add to cart functionality House application

  Background: 
    Given user launches house application

  Scenario: To increase the count of product in add to cart page
    When user enter the "Tables" in search bar
    And user click search button
    And user sees the result based on search selected product
    And user increase the count in add to cart
    And user click the checkout box
    And user sees the add to cart page with increase count
    Then user sees the my cart page
