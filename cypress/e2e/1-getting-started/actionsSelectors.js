import SelectorsDemoblaze from "./pagesSelector";

const selectors = new SelectorsDemoblaze();
class actionsDemoblaze{
    constructor(){
    this.selectDevice = selectors.selectSamsungGalaxyS6().click();
    this.addToCart = selectors.productAddCart().click();
    this.goToCart = selectors.globalCartButton().click();
    this.veryfingProdPrice = selectors.ProductPrice().should('have.text', '360');
    }
}

export default actionsDemoblaze;