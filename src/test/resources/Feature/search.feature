Feature: To verify the search functionality of the application

  Background: 
    Given user launches house application

  Scenario Outline: To verify the search relevance using search bar available
    When user enter the "<searchkey>" in search bar
    And user click search button
    Then user sees the results based on "<searchkey>"

    Examples: 
      | searchkey |
      | Tables    |

  Scenario Outline: To verify the search relevance using category and sub-category navigation
    When user click the category "<category>"
    And user click the sub-category "<subcategory>"
    And user sees the results based on "<category>" and "<subcategory>"

    Examples: 
      | category | subcategory             |
      | Dining   | Dinner Sets             |
      | Cooking  | Non-Stick Cookware Sets |
