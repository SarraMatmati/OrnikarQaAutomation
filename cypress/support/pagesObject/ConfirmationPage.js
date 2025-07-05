class ConfirmationPage {
  constructor() {
    this.elements = {
      confirmationTitle: '[data-test="confirmation-title"]',
      contractNumber: '[data-test="contract-number"]',
      customerInfo: '[data-test="customer-info"]',
      vehicleInfo: '[data-test="vehicle-info"]',
      downloadButton: '[data-test="download-contract"]',
      emailConfirmation: '[data-test="email-confirmation"]',
      premiumAmount: '[data-test="premium-amount"]',
      guaranteeType: '[data-test="guarantee-type"]',
      contractDetails: '[data-test="contract-details"]',
      successMessage: '[data-test="success-message"]'
    };
  }

  verifyConfirmationPage() {
    cy.get(this.elements.confirmationTitle)
      .should('be.visible')
      .and('contain.text', 'Félicitations');
    
    cy.get(this.elements.successMessage)
      .should('be.visible')
      .and('contain.text', 'Votre contrat a été créé avec succès');
  }

  verifyContractNumber() {
    cy.get(this.elements.contractNumber)
      .should('be.visible')
      .and('contain.text', 'Contrat n°')
      .invoke('text')
      .then((text) => {
        const contractNum = text.match(/\d+/)[0];
        expect(contractNum).to.have.length.greaterThan(6);
      });
  }

  verifyContractInformation() {
    // Verify contract details are displayed
    cy.get(this.elements.contractDetails).should('be.visible');
    
    // Verify customer information is correct
    cy.get(this.elements.customerInfo).should('contain.text', 'Jean Dupont');
    
    // Verify vehicle information is correct
    cy.get(this.elements.vehicleInfo).should('contain.text', 'Peugeot 308');
    
    // Verify guarantee type is displayed
    cy.get(this.elements.guaranteeType).should('be.visible');
  }

  verifyPremiumAmount(guaranteeType) {
    cy.get(this.elements.premiumAmount)
      .should('be.visible')
      .and('contain.text', '€')
      .invoke('text')
      .then((amountText) => {
        const amount = parseFloat(amountText.replace(/[^\d.,]/g, '').replace(',', '.'));
        
        if (guaranteeType === 'Tous risques') {
          // Premium should be higher for comprehensive coverage
          expect(amount).to.be.greaterThan(500);
        } else if (guaranteeType === 'Tiers') {
          // Premium should be lower for third-party coverage
          expect(amount).to.be.lessThan(500);
        }
      });
  }

  verifyCustomerInformation(expectedInfo) {
    cy.get(this.elements.customerInfo)
      .should('contain.text', expectedInfo.firstName)
      .and('contain.text', expectedInfo.lastName)
      .and('contain.text', expectedInfo.email);
  }

  verifyVehicleInformation(expectedInfo) {
    cy.get(this.elements.vehicleInfo)
      .should('contain.text', expectedInfo.brand)
      .and('contain.text', expectedInfo.model)
      .and('contain.text', expectedInfo.licensePlate);
  }

  downloadContract() {
    cy.get(this.elements.downloadButton)
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  verifyEmailConfirmation() {
    cy.get(this.elements.emailConfirmation)
      .should('be.visible')
      .and('contain.text', 'Un email de confirmation a été envoyé');
  }

  // Additional validation methods
  verifyPageLoaded() {
    cy.get(this.elements.confirmationTitle).should('be.visible');
    cy.get('body').should('not.have.class', 'loading');
  }

  verifyAllElementsPresent() {
    const requiredElements = [
      this.elements.confirmationTitle,
      this.elements.contractNumber,
      this.elements.premiumAmount,
      this.elements.downloadButton
    ];

    requiredElements.forEach(element => {
      cy.get(element).should('be.visible');
    });
  }

  // Wait for confirmation page to load completely
  waitForConfirmationPage() {
    cy.get(this.elements.confirmationTitle, { timeout: 15000 }).should('be.visible');
    cy.get(this.elements.contractNumber).should('be.visible');
  }
}

export default ConfirmationPage;