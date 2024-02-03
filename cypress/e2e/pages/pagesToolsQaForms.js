class FormsToolsQA {
    elements = {
        practiceForm: () => cy.get('.btn.btn-light').contains('Practice Form'),
    }
}

export const pagesFormsToolsQA = new FormsToolsQA();