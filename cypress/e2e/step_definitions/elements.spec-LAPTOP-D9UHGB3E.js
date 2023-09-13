import { Given, When, Then } from "@badeball/cypress-cukcumber-preprocessor";
import { actions } from "../../pages/pages";

Given('I am in the Tools QA Homepage', async function () {
    cy.visit('/')
});

When('click the element icon', () => {
    actions.clickElementsIcon();
})

