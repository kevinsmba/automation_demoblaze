import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { actionsTQA } from "../Actions/actionsToolsQA";

When('{string} is clicked', (selectModule) => {
    actionsTQA.clickSelectMenu(selectModule);
})
When('Click in the dropdown color list', () => {
    actionsTQA.clickColorsDropdown();
})
When('Select dropdown menu option to {string}', (color) => {
    //dataTable.hashes().forEach(row => {
        actionsTQA.selectDropdownOption(color);
    //});
})
Then('Verify that the selected color is {string}', (color) => {
    actionsTQA.verifyColorDropDown(color);
})
When('Locate and select {string} as the brand', (carBrand) => {
    actionsTQA.selectCarBrand(carBrand);
})