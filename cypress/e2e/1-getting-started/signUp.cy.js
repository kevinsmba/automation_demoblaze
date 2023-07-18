/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Sign Up test', () => {
  //visit the homepage
  beforeEach(()=>{
    cy.visit('https://www.demoblaze.com/index.html#');

  })
  //validate the text of the title
  it('check that main title is correct', async ()=>{
  //  cy.visit('https://www.demoblaze.com/index.html#');
    cy.contains('#nava','PRODUCT STORE');
  })
  //random username password and sign up
  it('Write a username and password and complete the sign up', async ()=>{
   // cy.visit('https://www.demoblaze.com/index.html#');
    const email = faker.internet.email();
    const password = faker.internet.password();
    cy.get('#signin2').click();
    cy.get('#sign-username').clear().type(email);
    cy.get('#sign-password').clear().type(password);
    cy.contains('button.btn.btn-primary', 'Sign up').click();
  })
  
})