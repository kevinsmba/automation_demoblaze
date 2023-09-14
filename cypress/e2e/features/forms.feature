
Feature: Verify Form flows 
    @Forms
    Scenario: Verify that home page is loaded
        Given The user is in the Tools QA Homepage
        When click the "Forms" icon
        And Practice form is clicked
        And Fill the First Name with "Kevin"