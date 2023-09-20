import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { actionsTQA } from "../Actions/actionsToolsQA";

When('Practice form is clicked', () => {
    actionsTQA.clickPracticeForm();
})
When('Fill the First Name with {string}', (firstName) => {
    actionsTQA.typeFirstName(firstName);
})
/*Then('Verify the title {string} of the page', (header) => {
    actionsTQA.CheckMainHeader(header);
})*/
