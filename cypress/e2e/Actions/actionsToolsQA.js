import { selectorsTQA } from "../pages/pagesToolsQA";

class toolsQAactions {
    clickModule(element){
        selectorsTQA.elements.Icons().contains(element).click();
    }
    CheckMainHeader(header){
        selectorsTQA.elements.mainHeader().should('have.text',header);
    }
    clickPracticeForm(){
        selectorsTQA.elements.practiceForm().click();
    }
    typeFirstName(name){
        selectorsTQA.elements.practiceFormFname().type(name);
    }
    clickSelectMenu(selectModule){
        selectorsTQA.elements.WidgetsSelectMenu(selectModule).click();
    }
    clickColorsDropdown(){
        selectorsTQA.elements.WidgetDropdown().click();
    }
    selectDropdownOption(color){
        selectorsTQA.elements.getDropdown().select(color);
    }
    verifyColorDropDown(color){
        selectorsTQA.elements.getDropdown().find('option:selected').should('have.text', color);
    }
    selectCarBrand(carBrand){
        selectorsTQA.elements.carSelection().select(carBrand)
    }
}

export const actionsTQA = new toolsQAactions();