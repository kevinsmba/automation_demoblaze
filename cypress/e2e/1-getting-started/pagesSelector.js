class SelectorsDemoblaze {
    constructor() { }
    selectSamsungGalaxyS6() {
        return cy.contains('a', 'Samsung galaxy s6');
    }
    productAddCart() {
        return cy.contains('a', 'Add to cart').should('be.visible');
    }
    globalCartButton() {
        return cy.get('#cartur');
    }
    ProductPrice() {
        return cy.get('#totalp');
    }
}
export default SelectorsDemoblaze;