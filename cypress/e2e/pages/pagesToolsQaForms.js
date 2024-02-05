class FormsToolsQA {
    elements = {
        practiceForm: () => cy.get('.btn.btn-light').contains('Practice Form'),
        practiceFormFname: () => cy.get('#firstName')
    }
}

export const pagesFormsToolsQA = new FormsToolsQA();