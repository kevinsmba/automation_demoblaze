import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { actions } from "../../e2e/Actions/actions";
import { getUser } from "../../../api/example";

When('Select menu is clicked', () => {
    actions.clickSelectMenu();
    getUser();
})
When('Click in the dropdown color list', () => {
    actions.clickColorsDropdown();
})
When('Select dropdown menu option to color', (dataTable) => {
    dataTable.hashes().forEach(row => {
        actions.selectDropdownOption(row.colors);
    });
})
