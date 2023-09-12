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
    clickSelectMenu(){
        selectors.elements.WidgetsSelectMenu().click();
    }
    clickColorsDropdown(){
        selectors.elements.WidgetDropdown().click();
    }
    selectDropdownOption(color){
        selectors.elements.getDropdown().select(color);
    }
}

export const actions = new toolsQAactions();