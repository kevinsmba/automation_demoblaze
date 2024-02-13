import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { actionsQaForms } from "../Actions/actionsToolsQaForms";

When('Practice form is clicked', () => {
    actionsQaForms.clickPracticeForm();
})
When('Fill the First Name with {string}', (firstName) => {
    actionsQaForms.typeFirstName(firstName);
})
When('Fill the lastname with {string}', (lastname) => {
    actionsQaForms.typeLastname(lastname)
})
When('Fill the email with {string}',(email) => {
    actionsQaForms.typeUserEmail(email)
})
When('Select the gender to {string}', (gender) => {
    actionsQaForms.selectGender(gender)
})
When('Type the number {string}', (number) => {
    actionsQaForms.typeUserNumber(number)
})
When("Enter the user's birthdate to {string},{string},{string}", (year, month, day) => {
    actionsQaForms.clickUserBirthDateCalendar();
    actionsQaForms.selectYear(year)
    actionsQaForms.selectMonth(month)
    actionsQaForms.selectDay(day, 0)
})
When("Select the checkbox Sports and Reading", () => {
    actionsQaForms.SelectCheckbox(1)
    actionsQaForms.SelectCheckbox(2)
})
When("Select the country {string} on the displayable list", (country) => {
    actionsQaForms.SelectCountry(country)
})
/*Then('Verify the title {string} of the page', (header) => {
    actionsTQA.CheckMainHeader(header);
})*/
