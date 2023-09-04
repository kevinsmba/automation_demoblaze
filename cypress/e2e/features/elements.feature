@SmokeTest
@Elements
Feature: Test the access to the Icons from the homepage
    Background: 
        Given I am in the Tools QA Homepage
    Scenario: Click the Elements icon to access to it 
        When click the "Elements" icon
        Then Verify the title "Elements" of the page
    Scenario: Click the Forms icon to access to it 
        When click the "Forms" icon
        Then Verify the title "Forms" of the page
    Scenario: Click the Alerts, Frame & Windows icon to access to it 
        When click the "Alerts, Frame & Windows" icon
        Then Verify the title "Alerts, Frame & Windows" of the page
    Scenario: Click the Widgets icon to access to it 
        When click the "Widgets" icon
        Then Verify the title "Widgets" of the page
    Scenario: Click the Interactions icon to access to it 
        When click the "Interactions" icon
        Then Verify the title "Interactions" of the page
    Scenario: Click the Book Store icon to access to it 
        When click the "Book Store" icon
        Then Verify the title "Book Store" of the page


        