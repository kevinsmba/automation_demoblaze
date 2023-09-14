
@Widget
Feature: Widget module testing
    Background: 
        Given The user is in the Tools QA Homepage
        When click the "Widgets" icon
    @SmokeTest
    @colorsDropdown
    Scenario Outline: Verify the <color> of the dropdown list in the Select Menu Module
        When "Select Menu" is clicked
        And Select dropdown menu option to "<color>"
        Then Verify that the selected color is "<color>"
        Examples:
        | color  |
        | Green  |
        | Red    |
        | Blue   |
        | Yellow |
        | Purple | 
        | Black  |
        | White  |
        | Voilet | 
        | Indigo |
        | Magenta|
        | Aqua   |

    @CarBrandDropdown
    @SmokeTest
    Scenario Outline: Verify the car brand <Brands> in the list in the Select Menu Module
        When "Select Menu" is clicked
        And Locate and select "<Brands>" as the brand
        Examples:
            | Brands |
            | Volvo  |
            | Saab   |
            | Opel   |
            | Audi   |

    @Tagtest
    Scenario Outline: Check the Menu module
        When "Menu" is clicked
    
    @Tagtest
    Scenario Outline: Check the Tool Tips module
        When "Tool Tips" is clicked

    