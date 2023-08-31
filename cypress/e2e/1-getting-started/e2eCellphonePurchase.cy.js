/// <reference types="cypress" />
import actionsDemoblaze from "./actionsSelectors";
import SelectorsDemoblaze from "./pagesSelector";


//Given the user visits DemoBlaze page
describe('Check the purchase of a cellphone', () => {

    before(() => {
        cy.visit('https://www.demoblaze.com/index.html#');
    });

    it('Given the user adds the product to the cart', async () => {
        const actions = new actionsDemoblaze();
        const selectors = new SelectorsDemoblaze();
        actions.selectDevice;
        actions.addToCart;
        actions.goToCart;
        selectors.ProductPrice().should('have.text','360');
    });
})

