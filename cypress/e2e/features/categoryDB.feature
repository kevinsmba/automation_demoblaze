Feature: DemoBlaze Home page category e2e
    Background: 
        Given The user visit the DemoBlaze URL
    
    Scenario Outline: Click the <Categories> category verify that the first product is <First Product> and Length to be <Lenght>
        When Click in the category "<Categories>"
        Then Verify that the first product in the "<Categories>" is "<First Product>"
        And Verify the lenght of the "<Categories>" category to be "<Lenght>"

        Examples:
            | Categories |  First Product       |   Lenght  |
            | Phones     |  Samsung galaxy s6   |     7     |
            | Laptops    |  Sony vaio i5        |     6     |
            | Monitors   |  Apple monitor 24    |     2     |