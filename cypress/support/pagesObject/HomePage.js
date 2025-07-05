class HomePage {
  constructor() {
    this.elements = {
      title: '[data-test="main-title"]',
      devisButton: '[data-test="devis-button"]',
      cookieAccept: '[data-test="cookie-accept"]',
      cookieRefuse: '[data-test="cookie-refuse"]',
      cookieContinueWithout: '[data-test="cookie-continue-without"]',
      cookieBanner: '[data-test="cookie-banner"]',
      navigationMenu: '[data-test="nav-menu"]',
      logo: '[data-test="logo"]',
      loadingSpinner: '[data-test="loading-spinner"]'
    };
  }

  visit() {
    cy.visit('/assurance-auto');
    this.waitForPageLoad();
  }

  waitForPageLoad() {
    cy.get('body').should('be.visible');
    cy.document().should('have.property', 'readyState', 'complete');
    // Wait for any loading spinners to disappear
    cy.get(this.elements.loadingSpinner, { timeout: 10000 }).should('not.exist');
  }

  acceptCookies() {
    cy.get('body').then(($body) => {
      if ($body.find(this.elements.cookieBanner).length > 0) {
        cy.get(this.elements.cookieAccept, { timeout: 5000 })
          .should('be.visible')
          .click();
        // Wait for cookie banner to disappear
        cy.get(this.elements.cookieBanner).should('not.exist');
      }
    });
  }

  refuseCookies() {
    cy.get('body').then(($body) => {
      if ($body.find(this.elements.cookieBanner).length > 0) {
        cy.get(this.elements.cookieRefuse, { timeout: 5000 })
          .should('be.visible')
          .click();
        // Wait for cookie banner to disappear
        cy.get(this.elements.cookieBanner).should('not.exist');
      }
    });
  }

  continueWithoutAcceptingCookies() {
    cy.get('body').then(($body) => {
      if ($body.find(this.elements.cookieBanner).length > 0) {
        cy.get(this.elements.cookieContinueWithout, { timeout: 5000 })
          .should('be.visible')
          .click();
        // Wait for cookie banner to disappear
        cy.get(this.elements.cookieBanner).should('not.exist');
      }
    });
  }

  clickDevisButton() {
    cy.get(this.elements.devisButton)
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  verifyPageTitle() {
    cy.get(this.elements.title)
      .should('be.visible')
      .and('contain.text', 'Assurance Auto');
  }

  verifyPageLoaded() {
    cy.get(this.elements.logo).should('be.visible');
    cy.get(this.elements.devisButton).should('be.visible');
    // Verify that the page is fully loaded
    cy.get('body').should('not.have.class', 'loading');
  }

  // Additional utility methods
  isCookieBannerVisible() {
    return cy.get(this.elements.cookieBanner).should('be.visible');
  }

  waitForCookieBanner() {
    cy.get(this.elements.cookieBanner, { timeout: 10000 }).should('be.visible');
  }

  verifyCookieBannerGone() {
    cy.get(this.elements.cookieBanner).should('not.exist');
  }
}

export default HomePage;