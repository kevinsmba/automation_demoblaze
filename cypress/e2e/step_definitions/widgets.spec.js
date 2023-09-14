import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { actions } from "../Actions/actions";

When('{string} is clicked', (selectModule) => {
    actions.clickSelectMenu(selectModule);
})
When('Click in the dropdown color list', () => {
    actions.clickColorsDropdown();
})
When('Select dropdown menu option to {string}', (color) => {
    //dataTable.hashes().forEach(row => {
        actions.selectDropdownOption(color);
    //});
})
Then('Verify that the selected color is {string}', (color) => {
    actions.verifyColorDropDown(color);
})
When('Locate and select {string} as the brand', (carBrand) => {
    actions.selectCarBrand(carBrand);
})