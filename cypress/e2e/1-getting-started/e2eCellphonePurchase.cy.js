/// <reference types="cypress" />
import { selectors } from "./pagesSelector";

//Given the user visits DemoBlaze page
describe('Check the purchase of a cellphone', () => {

    before(() => {
        cy.visit('https://www.demoblaze.com/index.html#');
    });

    it('Given the user adds the product to the cart', async () => {
        selectors.clickProduct('Samsung galaxy s6');
        selectors.addToCart();
        selectors.goToCart();
        selectors.priceValidation('360');
    });
})

