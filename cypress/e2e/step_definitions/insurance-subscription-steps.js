import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import QuotePage from '../../support/pagesObject/QuotePage';
import ConfirmationPage from '../../support/pagesObject/ConfirmationPage';

const quotePage = new QuotePage();
const confirmationPage = new ConfirmationPage();

// Additional steps for insurance subscription
When('je renseigne toutes les informations obligatoires', () => {
  // Fill all required fields with valid data
  quotePage.fillPersonalInformation({
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@example.com',
    phone: '0123456789'
  });
  
  quotePage.fillVehicleInformation({
    brand: 'Peugeot',
    model: '308',
    licensePlate: 'AB-123-CD',
    year: '2020'
  });
});

When('je sélectionne les garanties {string}', (guaranteeType) => {
  // Wait for guarantee options to be visible
  cy.get('[data-test="guarantee-options"]').should('be.visible');
  
  switch (guaranteeType) {
    case 'Tous risques':
      cy.get(quotePage.elements.guaranteeAllRisk)
        .should('be.visible')
        .check({ force: true });
      break;
    case 'Tiers':
      cy.get(quotePage.elements.guaranteeThirdParty)
        .should('be.visible')
        .check({ force: true });
      break;
    case 'Tiers Collision':
      cy.get(quotePage.elements.guaranteeThirdPartyCollision)
        .should('be.visible')
        .check({ force: true });
      break;
    default:
      cy.get(`[data-test="guarantee-${guaranteeType.toLowerCase().replace(/ /g, '-')}"]`)
        .should('be.visible')
        .check({ force: true });
  }
  
  // Verify the selection was made
  cy.get(`[data-test="guarantee-${guaranteeType.toLowerCase().replace(/ /g, '-')}"]`)
    .should('be.checked');
});

When('je clique sur {string} sans remplir les champs', (buttonText) => {
  // Ensure form is visible before attempting to click
  cy.get(quotePage.elements.form).should('be.visible');
  
  // Click the button without filling any fields
  cy.get(`[data-test="${buttonText.toLowerCase().replace(/ /g, '-')}-button"]`)
    .should('be.visible')
    .click();
});

When('je clique sur {string}', (buttonText) => {
  switch (buttonText) {
    case 'Souscrire maintenant':
      quotePage.clickSubscribe();
      break;
    case 'Continuer':
      quotePage.clickContinue();
      break;
    case 'Calculer mon devis':
      quotePage.clickCalculate();
      break;
    default:
      cy.contains('button', buttonText)
        .should('be.visible')
        .click();
  }
});

When('je saisis un email invalide {string}', (email) => {
  cy.get(quotePage.elements.email)
    .should('be.visible')
    .clear()
    .type(email)
    .should('have.value', email);
});

When('je clique en dehors du champ', () => {
  // Click outside the email field to trigger validation
  cy.get('body').click(0, 0);
});

Then('je vois les messages d\'erreur pour les champs obligatoires', () => {
  quotePage.verifyErrorMessages();
});

Then('les champs en erreur sont surlignés', () => {
  quotePage.verifyFieldErrors();
});

Then('je vois la page de confirmation', () => {
  confirmationPage.waitForConfirmationPage();
  confirmationPage.verifyConfirmationPage();
});

Then('je reçois un numéro de contrat', () => {
  confirmationPage.verifyContractNumber();
});

Then('le bouton {string} est désactivé', (buttonText) => {
  quotePage.verifyButtonState(buttonText.toLowerCase().replace(/ /g, '-'), 'disabled');
});

Then('je vois le message d\'erreur {string}', (message) => {
  if (message === 'Email invalide') {
    quotePage.verifyEmailError();
  } else {
    cy.get(quotePage.elements.errorMessage)
      .should('be.visible')
      .and('contain.text', message);
  }
});

Then('le champ email est surligné en rouge', () => {
  cy.get(quotePage.elements.email)
    .should('have.class', 'error')
    .and('have.css', 'border-color', 'rgb(255, 0, 0)');
});

Then('les informations du contrat sont correctes', () => {
  confirmationPage.verifyContractInformation();
});

Then('le montant de la prime est inférieur à celui des {string}', (guaranteeType) => {
  confirmationPage.verifyPremiumAmount(guaranteeType);
});

// Additional utility steps
Then('le formulaire est valide', () => {
  quotePage.verifyFormValidation();
});

Then('tous les champs obligatoires sont présents', () => {
  quotePage.verifyRequiredFields();
});

Then('la page de devis se charge correctement', () => {
  quotePage.waitForPageLoad();
}); 