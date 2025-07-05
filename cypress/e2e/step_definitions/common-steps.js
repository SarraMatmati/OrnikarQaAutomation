import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../support/pagesObject/HomePage';
import QuotePage from '../../support/pagesObject/QuotePage';
import ConfirmationPage from '../../support/pagesObject/ConfirmationPage';

const homePage = new HomePage();
const quotePage = new QuotePage();
const confirmationPage = new ConfirmationPage();

// Background steps
Given('je suis sur la page d\'accueil d\'assurance auto', () => {
  homePage.visit();
  homePage.verifyPageLoaded();
});

// Cookie handling steps
Given('j\'accepte les cookies', () => {
  homePage.acceptCookies();
});

Given('je refuse les cookies', () => {
  homePage.refuseCookies();
});

Given('je clique sur {string}', (buttonText) => {
  switch (buttonText) {
    case 'Continuer sans accepter':
      homePage.continueWithoutAcceptingCookies();
      break;
    default:
      cy.contains('button', buttonText).click();
  }
});

Given('je suis sur la page de devis', () => {
  homePage.visit();
  homePage.acceptCookies();
  homePage.clickDevisButton();
});

// Navigation steps
When('je clique sur le bouton {string}', (buttonText) => {
  switch (buttonText) {
    case 'Obtenir un devis':
      homePage.clickDevisButton();
      break;
    case 'Continuer':
      quotePage.clickContinue();
      break;
    case 'Calculer mon devis':
      quotePage.clickCalculate();
      break;
    default:
      cy.contains('button', buttonText).click();
  }
});

When('je clique en dehors du champ', () => {
  cy.get('body').click();
});

// Form filling steps
When('je renseigne mes informations personnelles', (dataTable) => {
  const personalInfo = dataTable.hashes()[0];
  quotePage.fillPersonalInformation({
    firstName: personalInfo.prénom,
    lastName: personalInfo.nom,
    email: personalInfo.email,
    phone: personalInfo.téléphone
  });
});

When('je renseigne les informations du véhicule', (dataTable) => {
  const vehicleInfo = dataTable.hashes()[0];
  quotePage.fillVehicleInformation({
    brand: vehicleInfo.marque,
    model: vehicleInfo.modèle,
    licensePlate: vehicleInfo.immatriculation,
    year: vehicleInfo.année
  });
});

When('je saisis l\'email {string}', (email) => {
  cy.get('[data-test="email"]').clear().type(email);
});

When('je saisis le téléphone {string}', (phone) => {
  cy.get('[data-test="phone"]').clear().type(phone);
});

When('je saisis la plaque {string}', (plate) => {
  cy.get('[data-test="licensePlate"]').clear().type(plate);
});

When('je saisis un email invalide {string}', (email) => {
  cy.get('[data-test="email"]').clear().type(email);
});

// Verification steps
Then('je vois la page de devis', () => {
  cy.url().should('include', '/devis');
});

Then('je vois la page de confirmation', () => {
  confirmationPage.verifyConfirmationPage();
});

Then('je vois les messages d\'erreur pour les champs obligatoires', () => {
  quotePage.verifyErrorMessages();
});

Then('les champs en erreur sont surlignés', () => {
  quotePage.verifyFieldErrors();
});

Then('je vois le message {string}', (message) => {
  if (message === 'aucun message') {
    cy.get('[data-test="error-message"]').should('not.exist');
  } else {
    cy.get('[data-test="error-message"]').should('contain.text', message);
  }
});

Then('le devis contient les informations saisies', () => {
  quotePage.verifyQuoteDisplayed();
});

Then('le montant est affiché', () => {
  cy.get('[data-test="quote-amount"]')
    .should('be.visible')
    .and('contain.text', '€');
});

Then('je reçois un numéro de contrat', () => {
  confirmationPage.verifyContractNumber();
});

Then('le bouton {string} est désactivé', (buttonText) => {
  cy.get(`[data-test="${buttonText.toLowerCase().replace(/ /g, '-')}-button"]`)
    .should('be.disabled');
});

Then('le champ email est surligné en rouge', () => {
  cy.get('[data-test="email"]')
    .should('have.class', 'error')
    .and('have.css', 'border-color', 'rgb(255, 0, 0)');
});

Then('les informations du contrat sont correctes', () => {
  confirmationPage.verifyContractInformation();
});

Then('le montant de la prime est inférieur à celui des {string}', (guaranteeType) => {
  confirmationPage.verifyPremiumAmount(guaranteeType);
});