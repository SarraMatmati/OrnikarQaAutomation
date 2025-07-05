import { And, Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../support/pages/HomePage';
import QuotePage from '../../support/pages/QuotePage';
import ConfirmationPage from '../../support/pages/ConfirmationPage';

const homePage = new HomePage();
const quotePage = new QuotePage();
const confirmationPage = new ConfirmationPage();

// Background steps
Given('je suis sur la page d\'accueil d\'assurance auto', () => {
  homePage.visit();
  homePage.verifyPageLoaded();
});

And('j\'accepte les cookies', () => {
  homePage.acceptCookies();
});

Given('je suis sur la page de devis', () => {
  homePage.visit();
  homePage.acceptCookies();
  homePage.clickDevisButton();
});

//Scenario Outline: Validation des formats d'email
When('je saisis l\'email {string}', (email) => {
  cy.get('[data-test="email"]').clear().type(email);
});

And('je clique en dehors du champ', () => {
  cy.get('body').click();
});

Then('je vois le message {string}', (message) => {
  if (message === 'aucun message') {
    cy.get('[data-test="error-message"]').should('not.exist');
  } else {
    cy.get('[data-test="error-message"]').should('contain.text', message);
  }
});