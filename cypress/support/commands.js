// Custom commands for Ornikar testing

// Command to accept cookies
Cypress.Commands.add('acceptCookies', () => {
  cy.get('[data-test="cookie-accept"]', { timeout: 5000 })
    .should('be.visible')
    .click();
});

// Command to fill personal information
Cypress.Commands.add('fillPersonalInfo', (personalInfo) => {
  cy.get('[data-test="firstName"]').type(personalInfo.firstName);
  cy.get('[data-test="lastName"]').type(personalInfo.lastName);
  cy.get('[data-test="email"]').type(personalInfo.email);
  cy.get('[data-test="phone"]').type(personalInfo.phone);
});

// Command to fill vehicle information
Cypress.Commands.add('fillVehicleInfo', (vehicleInfo) => {
  cy.get('[data-test="licensePlate"]').type(vehicleInfo.licensePlate);
  cy.get('[data-test="brand"]').select(vehicleInfo.brand);
  cy.get('[data-test="model"]').select(vehicleInfo.model);
  cy.get('[data-test="year"]').select(vehicleInfo.year);
});

// Command to wait for page load
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible');
  cy.document().should('have.property', 'readyState', 'complete');
});

// Command to check responsive design
Cypress.Commands.add('checkResponsive', (breakpoints = ['mobile', 'tablet', 'desktop']) => {
  const viewports = {
    mobile: [375, 667],
    tablet: [768, 1024],
    desktop: [1280, 720]
  };
  
  breakpoints.forEach(breakpoint => {
    const [width, height] = viewports[breakpoint];
    cy.viewport(width, height);
    cy.wait(1000); // Wait for responsive adjustments
  });
});