class toolsQAselectors {
    elements = {
        Icons: () => cy.get('.card.mt-4.top-card'),
        mainHeader: () => cy.get('.main-header'),
        practiceForm: () => cy.get('.btn.btn-light').contains('Practice Form'),
        practiceFormFname: () => cy.get('#firstName'),
        WidgetsSelectMenu: () => cy.get('.btn.btn-light').contains('Select Menu'),
        WidgetDropdown: () => cy.get('#oldSelectMenu'),
        getDropdown: () => cy.get('#oldSelectMenu')
    };
    /*clickModule(element){
        this.elements.Icons().contains(element).click();
    }
    CheckMainHeader(header){
        this.elements.mainHeader().should('have.text',header);
    }
    clickPracticeForm(){
        this.elements.practiceForm().click();
    }
    typeFirstName(name){
        this.elements.practiceFormFname().type(name);
    }
    clickSelectMenu(){
        this.elements.WidgetsSelectMenu().click();
    }
    clickColorsDropdown(){
        this.elements.WidgetDropdown().click();
    }
    selectDropdownOption(color){
        this.elements.getDropdown().select(color);
    }
*/
};

export const selectors = new toolsQAselectors();