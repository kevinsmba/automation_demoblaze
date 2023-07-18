/// <reference types="cypress" />


//Given the user visits DemoBlaze page
describe('Check the purchase of a product', () => {

    before(() => {
        cy.visit('https://www.demoblaze.com/index.html#');
    });

    it('Given the user adds the product to the cart', async () => {
        cy.contains('a', 'Samsung galaxy s6').click();
        cy.contains('a', 'Add to cart').should('be.visible').click();
        cy.get('#cartur').click();
        cy.contains('h2', 'Total').should('have.text', 'Total');
        cy.get('#totalp').should('have.text', '360');
    });
})
