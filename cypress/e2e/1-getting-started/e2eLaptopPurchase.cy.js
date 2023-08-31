/// <reference types="cypress" />


//Given the user visits DemoBlaze page
describe('Check the purchase of a laptop', () => {

    before(() => {
        cy.visit('https://www.demoblaze.com/index.html#');
    });

    it('Given the user adds the product to the cart', async () => {
        cy.contains('#itemc','Laptop').click();
        cy.contains('a', 'MacBook air').click();
        cy.contains('a', 'Add to cart').click();
        cy.get('#cartur').click();        
        //There should be the verification pf the text "Total" and the amount of the product:
        cy.contains('h2', 'Total').should('have.text', 'Total');
        cy.get('#totalp').should('have.text', '700');
    });
})
