import { pagesFormsToolsQA } from "../pages/pagesToolsQaForms";

class toolsQAforms {
    typeFirstName(name) {
        pagesFormsToolsQA.elements.practiceFormFname().type(name);
    }
    clickPracticeForm(){
        pagesFormsToolsQA.elements.practiceForm().click();
    }
    typeLastname(lastname){
        pagesFormsToolsQA.elements.practiceFormFlastname().type(lastname)
    }
    typeUserEmail(email){
        pagesFormsToolsQA.elements.practiceFormUserEmail().type(email)
    }
    selectGender(gender){
        pagesFormsToolsQA.elements.practiceFormGender().check(gender, {force: true})
    }
    typeUserNumber(number){
        pagesFormsToolsQA.elements.practiceFormUserNumb().type(number)
    }
    clickUserBirthDateCalendar(){
        pagesFormsToolsQA.elements.practiceFormBirthDate().click()
    }
    selectYear(year){
        pagesFormsToolsQA.elements.formSelectYear().select(year)
    }
    selectMonth(month){
        pagesFormsToolsQA.elements.formSelectMonth().select(month)
    }
    selectDay(day, position){
        pagesFormsToolsQA.elements.formSelectDay(day).eq(position).click()
    }
    SelectCheckbox(number){
        pagesFormsToolsQA.elements.formsCheckbox(number).check({force: true})
    }
    SelectCountry(country){
        pagesFormsToolsQA.elements.formsSelectCountry().click({force:true}).select(country)
    }
}

export const actionsQaForms = new toolsQAforms();