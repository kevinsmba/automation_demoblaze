class SelectorsDemoblaze {
    elements = {
        selectSamsungGalaxyS6: () => cy.contains('a', 'Samsung galaxy s6').should('contain', 'Samsung galaxy s6'),
        productAddCart: () => cy.contains('a', 'Add to cart').should('be.visible'),
        globalCartButton: () => cy.get('#cartur'),
        ProductPrice: () => cy.get('#totalp'),
        acceptBrowserNoti: () => cy.on('window:alert', (text) => {return true})
    };
    selectDevice(){
        this.elements.selectSamsungGalaxyS6().click();
    }
    addToCart(){
        this.elements.productAddCart().click();
    }
    goToCart(){
        this.elements.globalCartButton().click().wait(6000);
    }
    priceValidarion(chainers,amount){
        this.elements.ProductPrice().should(chainers, amount); 
        cy.screenshot();
    }
    BrowserNotifAccept(){
        this.elements.acceptBrowserNoti();
    }
}
export const selectors = new SelectorsDemoblaze();
