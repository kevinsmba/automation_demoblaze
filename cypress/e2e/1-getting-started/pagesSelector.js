class SelectorsDemoblaze {
    elements = {
        selectProduct: (productname) => cy.contains('a', productname).should('contain', productname),
        laptopCategory: () =>  cy.contains('#itemc','Laptop'),
        productAddCart: () => cy.contains('a', 'Add to cart').should('be.visible'),
        globalCartButton: () => cy.get('#cartur'),
        ProductPrice: () => cy.get('#totalp'),
        acceptBrowserNoti: () => cy.on('window:alert', (text) => {return true})
    };
    clickProduct(productname){
        this.elements.selectProduct(productname).click();
    }
    addToCart(){
        this.elements.productAddCart().click();
    }
    goToCart(){
        this.elements.globalCartButton().click().wait(2000);
    }
    priceValidation(amount){
        this.elements.ProductPrice().should('have.text', amount); 
    }
    BrowserNotifAccept(){
        this.elements.acceptBrowserNoti();
    }
    ClickLaptopCategory(){
        this.elements.laptopCategory().click();
    }
}
export const selectors = new SelectorsDemoblaze();


