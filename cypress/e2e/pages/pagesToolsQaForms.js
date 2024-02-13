class FormsToolsQA {
    elements = {
        practiceForm: () => cy.get('.btn.btn-light').contains('Practice Form'),
        practiceFormFname: () => cy.get('#firstName'),
        practiceFormFlastname: () => cy.get('#lastName'),
        practiceFormUserEmail: () => cy.get('#userEmail'),
        practiceFormGender: () => cy.get('input[name="gender"]'),
        practiceFormUserNumb: () => cy.get('#userNumber'),
        practiceFormBirthDate: () => cy.get('#dateOfBirthInput'),
        formSelectMonth: () => cy.get('.react-datepicker__month-select'),
        formSelectYear: () => cy.get('.react-datepicker__year-select'),
        formSelectDay: (day) => cy.get(`.react-datepicker__day--0${day}`),
        formsCheckbox: (number) => cy.get(`#hobbies-checkbox-${number}`),
        formsSelectCountry: () => cy.get('.css-yk16xz-control').eq(1)
    }
}

export const pagesFormsToolsQA = new FormsToolsQA();