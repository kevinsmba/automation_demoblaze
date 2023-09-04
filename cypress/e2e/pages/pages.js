class toolsQA {
    elements = {
        Icons: () => cy.get('.card.mt-4.top-card'),
        mainHeader: () => cy.get('.main-header')
    };
    clickIcon(element){
        this.elements.Icons().contains(element).click();
    }
    CheckMainHeader(header){
        this.elements.mainHeader().should('have.text',header);
    }

};

export const actions = new toolsQA();