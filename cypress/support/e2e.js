// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Global configuration
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignorer certaines erreurs non critiques
  if (err.message.includes('ResizeObserver loop limit exceeded')) {
    return false;
  }
  return true;
});

// Before each test
beforeEach(() => {
  // Clear cookies and local storage
  cy.clearCookies();
  cy.clearLocalStorage();
  
  // Set viewport
  cy.viewport(1280, 720);
});

// After each test
afterEach(() => {
  // Take screenshot on failure
  cy.screenshot({ capture: 'fullPage' });
});