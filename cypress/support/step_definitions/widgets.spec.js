import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { actions } from "../../e2e/Actions/actions";

When('Select menu is clicked', () => {
    actions.clickSelectMenu();
})
When('Click in the dropdown color list', () => {
    actions.clickColorsDropdown();
})
When('Select dropdown menu option to {string}', (color) => {
    actions.selectDropdownOption(color);
})
