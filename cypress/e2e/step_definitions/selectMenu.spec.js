import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { actions } from "../pages/pages";

Given ('I visit the Tools QA Homepage', () => {
    cy.visit('https://demoqa.com/')
});
When('select the {string} icon', (icon) => {
    actions.clickIcon(icon);
    cy.on('uncaught:exception', () => {
    return false
  })
});
And('Select the {string} option', (menu) => {
    actions.clickSelectMenuW(menu);
})
Then('Verify the title {string} of the page', (header) => {
    actions.CheckMainHeader(header);
})