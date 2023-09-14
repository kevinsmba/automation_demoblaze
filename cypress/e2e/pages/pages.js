class toolsQAselectors {
    elements = {
        Icons: () => cy.get('.card.mt-4.top-card'),
        mainHeader: () => cy.get('.main-header'),
        practiceForm: () => cy.get('.btn.btn-light').contains('Practice Form'),
        practiceFormFname: () => cy.get('#firstName'),
        WidgetsSelectMenu: (selectModule) => cy.get('.btn.btn-light').contains(selectModule),
        getDropdown: () => cy.get('#oldSelectMenu'),
        carSelection: () => cy.get('#cars')
    };
};

export const selectors = new toolsQAselectors();

// WidgetsSelectMenu: () => cy.get('.btn.btn-light').contains('Select Menu'),