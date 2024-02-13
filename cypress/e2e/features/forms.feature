
Feature: Verify Form flows 
    @Tagtest
    Scenario: Verify that home page is loaded
        Given The user is in the Tools QA Homepage
        When click the "Forms" icon
        And Practice form is clicked
        And Fill the First Name with "Kevin"
        And Fill the lastname with "Torres"
        And Fill the email with "johndoe@email.com"
        And Select the gender to "Female"
        And Type the number "3219087896"
        And Enter the user's birthdate to "1997","June","02"
        And Select the checkbox Sports and Reading
        And Select the country "NCR" on the displayable list