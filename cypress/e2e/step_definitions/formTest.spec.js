import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { actions } from "../Actions/actions";

When('Practice form is clicked', () => {
    actions.clickPracticeForm();
})
When('Fill the First Name with {string}', (firstName) => {
    actions.typeFirstName(firstName);
})
/*Then('Verify the title {string} of the page', (header) => {
    actions.CheckMainHeader(header);
})*/
