class DemoBlaze {
    elements = {
        categoryHomepage: (categoryHomeSelection) => cy.get('.list-group-item').contains(categoryHomeSelection),
        firstElementCategory: (firstElement) => cy.get('#tbodyid').contains(firstElement)
    }
}
export const selectorsDb = new DemoBlaze();