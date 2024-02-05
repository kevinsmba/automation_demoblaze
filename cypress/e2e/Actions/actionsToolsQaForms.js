import { pagesFormsToolsQA } from "../pages/pagesToolsQaForms";

class toolsQAforms {
    typeFirstName(name) {
        pagesFormsToolsQA.elements.practiceFormFname().type(name);
    }
    clickPracticeForm(){
        pagesFormsToolsQA.elements.practiceForm().click();
    }
}

export const actionsQaForms = new toolsQAforms();