class SelectorsDemoblaze {
    elements = {
        macBookAir: () =>  cy.contains('a', 'MacBook air'),
        selectSamsungGalaxyS6: () => cy.contains('a', 'Samsung galaxy s6').should('contain', 'Samsung galaxy s6'),
        laptopCategory: () =>  cy.contains('#itemc','Laptop'),
        productAddCart: () => cy.contains('a', 'Add to cart').should('be.visible'),
        globalCartButton: () => cy.get('#cartur'),
        ProductPrice: () => cy.get('#totalp'),
        acceptBrowserNoti: () => cy.on('window:alert', (text) => {return true})
    };
    clickSamsungGalaxyS6(){
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
    }
    BrowserNotifAccept(){
        this.elements.acceptBrowserNoti();
    }
    ClickLaptopCategory(){
        this.elements.laptopCategory().click();
    }
    ClickMacBookAir(){
        this.elements.macBookAir().click();
    }
}
export const selectors = new SelectorsDemoblaze();



