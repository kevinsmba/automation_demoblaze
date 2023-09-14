import { selectors } from "../pages/pages";

class toolsQAactions {
    clickModule(element){
        selectors.elements.Icons().contains(element).click();
    }
    CheckMainHeader(header){
        selectors.elements.mainHeader().should('have.text',header);
    }
    clickPracticeForm(){
        selectors.elements.practiceForm().click();
    }
    typeFirstName(name){
        selectors.elements.practiceFormFname().type(name);
    }
    clickSelectMenu(selectModule){
        selectors.elements.WidgetsSelectMenu(selectModule).click();
    }
    clickColorsDropdown(){
        selectors.elements.WidgetDropdown().click();
    }
    selectDropdownOption(color){
        selectors.elements.getDropdown().select(color);
    }
    verifyColorDropDown(color){
        selectors.elements.getDropdown().find('option:selected').should('have.text', color);
    }
    selectCarBrand(carBrand){
        selectors.elements.carSelection().select(carBrand)
    }
}

export const actions = new toolsQAactions();