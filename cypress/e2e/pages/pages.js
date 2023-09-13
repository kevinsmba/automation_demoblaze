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
};

export const selectors = new toolsQAselectors();