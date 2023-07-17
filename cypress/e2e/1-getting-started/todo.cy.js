/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  //visit the homepage
  it('Go to DemoBlaze page', async ()=>{
    cy.visit('https://www.demoblaze.com/index.html#');

  })
  //validate the text of the title
  it('check that main title is correct', async ()=>{
    cy.visit('https://www.demoblaze.com/index.html#');
    cy.contains('#nava','PRODUCT STORE');
  })
  //username password and sign up
  it('Write a username and password and complete the sign up', async ()=>{
    cy.visit('https://www.demoblaze.com/index.html#');
    const email = faker.internet.email();
    const password = faker.internet.password();
    cy.get('#signin2').click();
    cy.get('#sign-username').clear().type(email);
    cy.get('#sign-password').clear().type(password);
    cy.contains('button.btn.btn-primary', 'Sign up').click();
    //test
  })
})