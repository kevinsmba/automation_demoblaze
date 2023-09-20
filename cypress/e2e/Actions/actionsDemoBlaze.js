import { selectorsDb } from "../pages/pagesDemoBlaze";

class DemoBlazeActions {
    clickCategory(categoryHomeSelection){
        selectorsDb.elements.categoryHomepage(categoryHomeSelection).click();
    }
    ValidateFirstElement(firstElement){
        selectorsDb.elements.firstElementCategory(firstElement).should('have.text',firstElement);
    }
}

export const actionsDB = new DemoBlazeActions();