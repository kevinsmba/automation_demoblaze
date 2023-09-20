import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { actionsTQA } from "../Actions/actionsToolsQA";

Given('The user is in the Tools QA Homepage', () => {
    cy.visit('https://demoqa.com/');
});
When('click the {string} icon', (moduleType) => {
    actionsTQA.clickModule(moduleType);
    cy.on('uncaught:exception', () => {
    return false
  })
})
Then('Verify the title {string} of the page', (header) => {
    actionsTQA.CheckMainHeader(header);
})
