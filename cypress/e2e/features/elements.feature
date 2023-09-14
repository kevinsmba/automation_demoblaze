
Feature: Test the access to the Icons from the homepage
    Background: 
        Given The user is in the Tools QA Homepage

    @SmokeTest
    Scenario Outline: Click the <Icon> icon to access it and verify the Header title to be <Title>
        When click the "<Icon>" icon
        Then Verify the title "<Title>" of the page

    Examples:
      | Icon                      | Title                    |
      | Elements                  | Elements                 |
      | Forms                     | Forms                    |
      | Alerts, Frame & Windows   | Alerts, Frame & Windows  |
      | Widgets                   | Widgets                  |
      | Interactions              | Interactions             |
      | Book Store                | Book Store               |
