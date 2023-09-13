import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { actions } from "../pages/pages";

Given('I am in the Tools QA Homepage', () => {
    cy.visit('https://demoqa.com/')
});
When('click the {string} icon', (icon) => {
    actions.clickIcon(icon);
    cy.on('uncaught:exception', () => {
    return false
  })
})
Then('Verify the title {string} of the page', (header) => {
    actions.CheckMainHeader(header);
})