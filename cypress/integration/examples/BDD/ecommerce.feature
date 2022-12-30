Feature: End to End Ecommerce validation

    ECommerce Application Regression
   @Regression
   Scenario: ECommerce Products delivery 
   Given User open Ecommerce Landing Page
   When User add items to the Cart
   And User validates the total prices
   Then User select the country submit and Verify ThankYou message
   @Smoke
   Scenario: Filling up the form to shop
   Given User open Ecommerce Landing Page
   When User fill the form details
   Then User validates forms behaviour
   And User select the Shop page
   @Smoke
   Scenario: Filling up the form data using cucumber dataset
   Given User open Ecommerce Landing Page
   When User fill the form details using dataset
    |name | email | password | gender |
    |David Willis | subhadipsingh.referral@gmail.com | Anthem@456 | Male |
   Then User validates forms behaviour using dataset
   And User select the Shop page