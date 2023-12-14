import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { actionsDB } from "../Actions/actionsDemoBlaze";

Given('The user visit the DemoBlaze URL', () => {
    cy.visit('https://www.demoblaze.com/')
});
When('Click in the category {string}', (categoryHomeSelection) => {
    actionsDB.clickCategory(categoryHomeSelection);
});
Then('Verify that the first product in the {string} is {string}', (categoryHomeSelection, firstElement) => {
    actionsDB.ValidateFirstElement(firstElement);
});
Then('Verify the lenght of the {string} category to be {string}', (categoryHomeSelection, lenghtNumber) => {
    // Get the element with id tbodyid
    cy.get('#tbodyid')
// Get all the child elements of the element
    .children()
    .wait(8000)
// Assert that the number of child elements is equal to 7
//test
    .should('have.length', lenghtNumber);
});