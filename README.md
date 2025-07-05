# 🚗 Ornikar QA Automation Suite

[![Cypress](https://img.shields.io/badge/Cypress-14.5.1-green.svg)](https://www.cypress.io/)
[![Cucumber](https://img.shields.io/badge/Cucumber-BDD-blue.svg)](https://cucumber.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Test Scenarios](#test-scenarios)
- [Running Tests](#running-tests)
- [Cookie Handling](#cookie-handling)
- [Page Object Model](#page-object-model)
- [Configuration](#configuration)
- [Reporting](#reporting)
- [CI/CD Integration](#cicd-integration)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This is a comprehensive Cypress automation test suite for the Ornikar insurance website, featuring advanced cookie handling scenarios, robust test organization, and enterprise-grade testing practices. The project implements BDD (Behavior Driven Development) using Cucumber and follows the Page Object Model pattern for maintainable and scalable test automation.

### Key Highlights
- ✅ **Comprehensive Cookie Management**: Accept, refuse, and continue without accepting cookies
- ✅ **BDD Implementation**: Cucumber feature files with Gherkin syntax
- ✅ **Page Object Model**: Clean separation of concerns
- ✅ **Multi-Environment Support**: Dev, staging, and production configurations
- ✅ **Advanced Reporting**: Mochawesome and Cucumber HTML reports
- ✅ **Responsive Testing**: Mobile, tablet, and desktop viewport testing

## 🚀 Features

### 🍪 Cookie Handling Scenarios
- **Accept Cookies**: Full functionality with cookie acceptance
- **Refuse Cookies**: Testing with cookie refusal
- **Continue Without Accepting**: Testing the "continue without accepting" option
- **Dynamic Cookie Banner Detection**: Intelligent handling of cookie banners

### 🧪 Test Organization
- **Tagged Scenarios**: Organized with `@cookies`, `@validation`, `@subscription` tags
- **Environment Support**: Dev, staging, and production configurations
- **Responsive Testing**: Mobile, tablet, and desktop viewport testing
- **Data-Driven Testing**: Reusable test data with validation

### 📊 Comprehensive Reporting
- **Mochawesome HTML Reports**: Beautiful reports with screenshots and videos
- **Cucumber HTML Reports**: Feature-based reporting
- **JSON Reports**: CI/CD integration support
- **Parallel Execution**: Support for parallel test execution

### 🔧 Advanced Features
- **Error Handling**: Robust error management and recovery
- **Wait Strategies**: Intelligent waiting mechanisms
- **Field Validation**: Comprehensive form validation
- **Cross-Browser Testing**: Chrome, Firefox, Edge support
- **Performance Monitoring**: Test execution time tracking

## 🏗️ Architecture

### Technology Stack
- **Framework**: Cypress 14.5.1
- **BDD**: Cucumber (@badeball/cypress-cucumber-preprocessor)
- **Pattern**: Page Object Model
- **Language**: JavaScript (ES6+)
- **Reporting**: Mochawesome + Cucumber HTML Reports
- **Linting**: ESLint + Prettier

### Design Patterns
- **Page Object Model**: Encapsulates page elements and actions
- **Step Definitions**: Reusable test steps with parameters
- **Data Management**: Centralized test data configuration
- **Helper Functions**: Utility functions for common operations

## 📋 Prerequisites

### System Requirements
- **Node.js**: 16.0.0 or higher
- **npm**: 8.0.0 or higher
- **Git**: Latest version
- **Memory**: Minimum 4GB RAM
- **Storage**: 2GB free space

### Browser Support
- **Chrome**: 90+
- **Firefox**: 88+
- **Edge**: 90+
- **Safari**: 14+ (macOS only)

## 🛠️ Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/SarraMatmati/OrnikarQaAutomation.git
cd OrnikarQaAutomation
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Verify Cypress Installation
```bash
npx cypress verify
```

### Step 4: Open Cypress Test Runner (Optional)
```bash
npm run cy:open
```

## 📁 Project Structure

```
ornikar-qa-automation/
├── cypress/
│   ├── e2e/
│   │   ├── subscriptionModule/
│   │   │   └── insurance-subscription.feature
│   │   ├── validationModule/
│   │   │   ├── form-validation.feature
│   │   │   └── form-validation/
│   │   │       └── form-validation.js
│   │   └── step_definitions/
│   │       ├── common-steps.js
│   │       └── insurance-subscription-steps.js
│   ├── support/
│   │   ├── pagesObject/
│   │   │   ├── HomePage.js
│   │   │   ├── QuotePage.js
│   │   │   └── ConfirmationPage.js
│   │   ├── helpers/
│   │   │   ├── testConfig.js
│   │   │   └── data-generator.js
│   │   ├── commands.js
│   │   └── e2e.js
│   └── fixtures/
│       └── test-data.json
├── cypress.config.js
├── package.json
├── .gitignore
├── .eslintrc.js
├── .prettierrc
└── README.md
```

## 🧪 Test Scenarios

### Cookie Management Tests
```bash
# Test all cookie scenarios
npm run test:cookies

# Test specific cookie handling
npm run test:accept-cookies
npm run test:refuse-cookies
npm run test:continue-without-cookies
```

### Subscription Flow Tests
```bash
# Test complete subscription flow
npm run test:complete-subscription

# Test partial subscription
npm run test:partial-subscription

# Test all subscription scenarios
npm run test:subscription
```

### Validation Tests
```bash
# Test field validation
npm run test:field-validation

# Test error handling
npm run test:error-handling

# Test all validation scenarios
npm run test:validation
```

### Environment-Specific Tests
```bash
# Development environment
npm run test:dev

# Staging environment
npm run test:staging

# Production environment
npm run test:prod
```

## 🏃‍♂️ Running Tests

### Basic Commands
```bash
# Open Cypress Test Runner
npm run cy:open

# Run all tests
npm run cy:run

# Run specific browser
npm run cy:run:chrome
npm run cy:run:firefox
npm run cy:run:edge
```

### Responsive Testing
```bash
# Mobile testing (375x667)
npm run cy:run:mobile

# Tablet testing (768x1024)
npm run cy:run:tablet

# Desktop testing (1280x720)
npm run cy:run:headed
```

### Parallel Execution
```bash
# Run tests in parallel
npm run cy:run:parallel
```

## 🍪 Cookie Handling Implementation

### Accept Cookies
```javascript
Given('j\'accepte les cookies', () => {
  homePage.acceptCookies();
});
```

### Refuse Cookies
```javascript
Given('je refuse les cookies', () => {
  homePage.refuseCookies();
});
```

### Continue Without Accepting
```javascript
Given('je clique sur "Continuer sans accepter"', () => {
  homePage.continueWithoutAcceptingCookies();
});
```

### Cookie Banner Detection
```javascript
// Intelligent cookie banner handling
acceptCookies() {
  cy.get('body').then(($body) => {
    if ($body.find(this.elements.cookieBanner).length > 0) {
      cy.get(this.elements.cookieAccept, { timeout: 5000 })
        .should('be.visible')
        .click();
      cy.get(this.elements.cookieBanner).should('not.exist');
    }
  });
}
```

## 🏠 Page Object Model

### HomePage Class
```javascript
class HomePage {
  constructor() {
    this.elements = {
      title: '[data-test="main-title"]',
      devisButton: '[data-test="devis-button"]',
      cookieAccept: '[data-test="cookie-accept"]',
      cookieRefuse: '[data-test="cookie-refuse"]',
      cookieContinueWithout: '[data-test="cookie-continue-without"]',
      cookieBanner: '[data-test="cookie-banner"]'
    };
  }

  visit() {
    cy.visit('/assurance-auto');
    this.waitForPageLoad();
  }

  acceptCookies() {
    // Implementation with error handling
  }
}
```

### QuotePage Class
```javascript
class QuotePage {
  fillPersonalInformation(personalInfo) {
    this.fillField(this.elements.firstName, personalInfo.firstName);
    this.fillField(this.elements.lastName, personalInfo.lastName);
    this.fillField(this.elements.email, personalInfo.email);
    this.fillField(this.elements.phone, personalInfo.phone);
  }

  fillField(selector, value) {
    cy.get(selector)
      .should('be.visible')
      .clear()
      .type(value)
      .should('have.value', value);
  }
}
```

## ⚙️ Configuration

### Cypress Configuration
```javascript
// cypress.config.js
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.ornikar.com',
    specPattern: "cypress/e2e/**/*.{feature,features}",
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000
  }
});
```

### Environment Variables
```javascript
// Environment-specific configurations
env: {
  testUser: {
    email: 'test@example.com',
    password: 'TestPassword123!'
  }
}
```

### Test Data Configuration
```javascript
// testConfig.js
export const TestConfig = {
  testData: {
    validUser: {
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@example.com',
      phone: '0123456789'
    }
  },
  timeouts: {
    short: 5000,
    medium: 10000,
    long: 15000
  }
};
```

## 📊 Reporting

### Generate Reports
```bash
# Generate all reports
npm run report:generate

# Open HTML report
npm run report:open
```

### Report Types
- **Mochawesome**: Beautiful HTML reports with screenshots and videos
- **Cucumber HTML**: Feature-based reporting with step details
- **JSON**: CI/CD integration support
- **Console**: Real-time test execution feedback

### Report Features
- ✅ Screenshots on failure
- ✅ Video recordings
- ✅ Test execution time
- ✅ Browser information
- ✅ Environment details
- ✅ Error stack traces

## 🔄 CI/CD Integration

### GitHub Actions Example
```yaml
name: Cypress Tests
on: [push, pull_request]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: cypress-io/github-action@v6
        with:
          start: npm start
          wait-on: 'http://localhost:3000'
          browser: chrome
          record: true
```

### Jenkins Pipeline Example
```groovy
pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm run cy:run'
            }
        }
        stage('Generate Reports') {
            steps {
                sh 'npm run report:generate'
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'cypress/reports/mochawesome-report',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }
    }
}
```

## 🎯 Best Practices

### 1. Page Object Model
- ✅ Encapsulate page elements and actions
- ✅ Reusable page methods
- ✅ Easy maintenance and updates
- ✅ Clear separation of concerns

### 2. Data-Driven Testing
- ✅ Centralized test data management
- ✅ Reusable test scenarios
- ✅ Easy data updates
- ✅ Validation helpers

### 3. Error Handling
- ✅ Robust error recovery
- ✅ Meaningful error messages
- ✅ Screenshot capture on failure
- ✅ Retry mechanisms

### 4. Wait Strategies
- ✅ Intelligent waiting mechanisms
- ✅ Custom commands for common waits
- ✅ Timeout configurations
- ✅ Element state verification

### 5. Test Organization
- ✅ Tagged scenarios for selective execution
- ✅ Logical test grouping
- ✅ Clear naming conventions
- ✅ Modular test structure

## 🔧 Troubleshooting

### Common Issues

#### 1. Cookie Banner Not Found
**Problem**: Tests fail because cookie banner selectors are not found
**Solution**: 
```javascript
// Update selectors in HomePage.js
cookieAccept: '[data-test="cookie-accept"]',
cookieRefuse: '[data-test="cookie-refuse"]',
cookieBanner: '[data-test="cookie-banner"]'
```

#### 2. Form Validation Errors
**Problem**: Form fields not found or validation failing
**Solution**: 
```javascript
// Check field selectors in QuotePage.js
firstName: '[data-test="firstName"]',
lastName: '[data-test="lastName"]',
email: '[data-test="email"]'
```

#### 3. Timeout Issues
**Problem**: Tests timing out due to slow page loads
**Solution**: 
```javascript
// Adjust timeouts in cypress.config.js
defaultCommandTimeout: 15000,
requestTimeout: 15000,
responseTimeout: 15000
```

#### 4. Report Generation Issues
**Problem**: Reports not generating properly
**Solution**: 
```bash
# Ensure mochawesome dependencies are installed
npm install mochawesome mochawesome-merge mochawesome-report-generator
```

### Debug Mode
```bash
# Run with headed mode for debugging
npm run cy:run:headed

# Run specific test with debugging
npx cypress run --spec "cypress/e2e/subscriptionModule/insurance-subscription.feature" --headed
```

### Logging and Debugging
```javascript
// Add custom logging
Cypress.Commands.add('logInfo', (message) => {
  cy.log(`[INFO] ${message}`);
});

// Debug element state
cy.get('[data-test="email"]').then(($el) => {
  cy.log(`Email field visible: ${$el.is(':visible')}`);
  cy.log(`Email field value: ${$el.val()}`);
});
```

## 🤝 Contributing

### Development Workflow
1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/new-test-scenario
   ```
3. **Make your changes**
4. **Add appropriate tests**
5. **Update documentation**
6. **Run tests locally**
   ```bash
   npm run cy:run
   ```
7. **Submit a pull request**

### Code Standards
- ✅ Follow existing code structure
- ✅ Add appropriate tags to new scenarios
- ✅ Update test data as needed
- ✅ Ensure all tests pass before committing
- ✅ Update documentation for new features
- ✅ Use meaningful commit messages

### Commit Message Convention
```
type(scope): description

Examples:
feat(cookies): add refuse cookies scenario
fix(validation): correct email validation logic
docs(readme): update installation instructions
test(subscription): add new guarantee type test
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

### Getting Help
- 📧 **Email**: matmati.sarra@gmail.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/SarraMatmati/OrnikarQaAutomation/issues)
- 📖 **Documentation**: This README and inline code comments

### Resources
- [Cypress Documentation](https://docs.cypress.io/)
- [Cucumber Documentation](https://cucumber.io/docs/)
- [Page Object Model Pattern](https://www.selenium.dev/documentation/en/guidelines_and_recommendations/page_object_models/)

---

**Made with ❤️ by Sarra Matmati**

*Last updated: January 2025*