class QuotePage {
  constructor() {
    this.elements = {
      // Informations personnelles
      firstName: '[data-test="firstName"]',
      lastName: '[data-test="lastName"]',
      email: '[data-test="email"]',
      phone: '[data-test="phone"]',
      
      // Informations véhicule
      licensePlate: '[data-test="licensePlate"]',
      brand: '[data-test="brand"]',
      model: '[data-test="model"]',
      year: '[data-test="year"]',
      
      // Boutons
      continueButton: '[data-test="continue-button"]',
      calculateButton: '[data-test="calculate-button"]',
      subscribeButton: '[data-test="subscribe-button"]',
      
      // Messages d'erreur
      errorMessage: '[data-test="error-message"]',
      fieldError: '[data-test="field-error"]',
      emailError: '[data-test="email-error"]',
      
      // Résultats
      quoteResult: '[data-test="quote-result"]',
      quoteAmount: '[data-test="quote-amount"]',
      
      // Garanties
      guaranteeAllRisk: '[data-test="guarantee-all-risk"]',
      guaranteeThirdParty: '[data-test="guarantee-third-party"]',
      guaranteeThirdPartyCollision: '[data-test="guarantee-third-party-collision"]',
      
      // Form validation
      form: '[data-test="quote-form"]',
      requiredFields: '[data-test="required-field"]'
    };
  }

  fillPersonalInformation(personalInfo) {
    // Clear and fill each field with validation
    this.fillField(this.elements.firstName, personalInfo.firstName);
    this.fillField(this.elements.lastName, personalInfo.lastName);
    this.fillField(this.elements.email, personalInfo.email);
    this.fillField(this.elements.phone, personalInfo.phone);
  }

  fillVehicleInformation(vehicleInfo) {
    // Clear and fill each field with validation
    this.fillField(this.elements.licensePlate, vehicleInfo.licensePlate);
    this.selectOption(this.elements.brand, vehicleInfo.brand);
    this.selectOption(this.elements.model, vehicleInfo.model);
    this.selectOption(this.elements.year, vehicleInfo.year);
  }

  fillField(selector, value) {
    cy.get(selector)
      .should('be.visible')
      .clear()
      .type(value)
      .should('have.value', value);
  }

  selectOption(selector, option) {
    cy.get(selector)
      .should('be.visible')
      .select(option)
      .should('have.value', option);
  }

  clickContinue() {
    cy.get(this.elements.continueButton)
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  clickCalculate() {
    cy.get(this.elements.calculateButton)
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  clickSubscribe() {
    cy.get(this.elements.subscribeButton)
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  verifyErrorMessages() {
    cy.get(this.elements.errorMessage)
      .should('be.visible')
      .and('have.length.greaterThan', 0);
  }

  verifyFieldErrors() {
    cy.get(this.elements.fieldError)
      .should('be.visible')
      .and('have.class', 'error');
  }

  verifyEmailError() {
    cy.get(this.elements.emailError)
      .should('be.visible')
      .and('contain.text', 'Email invalide');
  }

  verifyQuoteDisplayed() {
    cy.get(this.elements.quoteResult).should('be.visible');
    cy.get(this.elements.quoteAmount)
      .should('be.visible')
      .and('contain.text', '€');
  }

  // Additional validation methods
  verifyFormValidation() {
    cy.get(this.elements.form).should('exist');
    cy.get(this.elements.requiredFields).should('have.length.greaterThan', 0);
  }

  verifyButtonState(buttonType, expectedState) {
    const buttonSelector = this.getButtonSelector(buttonType);
    if (expectedState === 'disabled') {
      cy.get(buttonSelector).should('be.disabled');
    } else {
      cy.get(buttonSelector).should('not.be.disabled');
    }
  }

  getButtonSelector(buttonType) {
    switch (buttonType) {
      case 'continue':
        return this.elements.continueButton;
      case 'calculate':
        return this.elements.calculateButton;
      case 'subscribe':
        return this.elements.subscribeButton;
      default:
        return `[data-test="${buttonType}-button"]`;
    }
  }

  // Wait for page to load
  waitForPageLoad() {
    cy.get(this.elements.form).should('be.visible');
    cy.get('body').should('not.have.class', 'loading');
  }

  // Verify all required fields are present
  verifyRequiredFields() {
    const requiredFields = [
      this.elements.firstName,
      this.elements.lastName,
      this.elements.email,
      this.elements.phone,
      this.elements.licensePlate
    ];

    requiredFields.forEach(field => {
      cy.get(field).should('be.visible');
    });
  }
}

export default QuotePage;