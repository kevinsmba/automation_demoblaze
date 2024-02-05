import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { actionsQaForms } from "../Actions/actionsToolsQaForms";

When('Practice form is clicked', () => {
    actionsQaForms.clickPracticeForm();
})
When('Fill the First Name with {string}', (firstName) => {
    actionsQaForms.typeFirstName(firstName);
})
/*Then('Verify the title {string} of the page', (header) => {
    actionsTQA.CheckMainHeader(header);
})*/
