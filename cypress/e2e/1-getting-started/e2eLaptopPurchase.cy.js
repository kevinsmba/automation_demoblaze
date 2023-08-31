/// <reference types="cypress" />
import { selectors } from "./pagesSelector";


//Given the user visits DemoBlaze page
describe('Check the purchase of a laptop', () => {

    before(() => {
        cy.visit('https://www.demoblaze.com/index.html#');
    });

    it('Given the user adds the product to the cart', async () => {
        cy.on('window:alert', (text) => { return true });
        selectors.ClickLaptopCategory();
        selectors.ClickMacBookAir();
        selectors.addToCart();
        selectors.goToCart();
        selectors.priceValidation('have.text', '700');
    });
})
