class toolsQAselectors {
    elements = {
        Icons: () => cy.get('.card.mt-4.top-card'),
        mainHeader: () => cy.get('.main-header'),
        WidgetsSelectMenu: (selectModule) => cy.get('.btn.btn-light').contains(selectModule),
        getDropdown: () => cy.get('#oldSelectMenu'),
        carSelection: () => cy.get('#cars')
    };
};

export const selectorsTQA = new toolsQAselectors();

// WidgetsSelectMenu: () => cy.get('.btn.btn-light').contains('Select Menu'),