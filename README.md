# Ornikar QA Automation Suite

## Overview
This is an optimized Cypress automation test suite for the Ornikar insurance website, featuring comprehensive cookie handling scenarios and robust test organization.

## Features

### 🍪 Cookie Handling Scenarios
- **Accept Cookies**: Full functionality with cookie acceptance
- **Refuse Cookies**: Testing with cookie refusal
- **Continue Without Accepting**: Testing the "continue without accepting" option

### 🧪 Test Organization
- **Tagged Scenarios**: Organized with `@cookies`, `@validation`, `@subscription` tags
- **Environment Support**: Dev, staging, and production configurations
- **Responsive Testing**: Mobile, tablet, and desktop viewport testing

### 📊 Comprehensive Reporting
- Mochawesome HTML reports
- Cucumber HTML reports
- JSON reports for CI/CD integration

## Test Scenarios

### Cookie Management
```bash
# Test all cookie scenarios
npm run test:cookies

# Test specific cookie handling
npm run test:accept-cookies
npm run test:refuse-cookies
npm run test:continue-without-cookies
```

### Subscription Testing
```bash
# Test complete subscription flow
npm run test:complete-subscription

# Test partial subscription
npm run test:partial-subscription

# Test all subscription scenarios
npm run test:subscription
```

### Validation Testing
```bash
# Test field validation
npm run test:field-validation

# Test error handling
npm run test:error-handling

# Test all validation scenarios
npm run test:validation
```

## Project Structure

```
cypress/
├── e2e/
│   ├── subscriptionModule/
│   │   └── insurance-subscription.feature
│   ├── validationModule/
│   │   └── form-validation.feature
│   └── step_definitions/
│       ├── common-steps.js
│       └── insurance-subscription-steps.js
├── support/
│   ├── pagesObject/
│   │   ├── HomePage.js
│   │   ├── QuotePage.js
│   │   └── ConfirmationPage.js
│   ├── helpers/
│   │   └── testConfig.js
│   ├── commands.js
│   └── e2e.js
└── fixtures/
```

## Key Features

### 🏠 HomePage Optimizations
- Robust cookie banner handling
- Multiple cookie interaction methods
- Improved page load validation
- Better error handling

### 📝 QuotePage Enhancements
- Comprehensive form validation
- Field-level error checking
- Guarantee selection handling
- Button state verification

### ✅ ConfirmationPage Improvements
- Contract number validation
- Premium amount verification
- Comprehensive contract information checks
- Email confirmation validation

## Running Tests

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

### Environment-Specific Testing
```bash
# Development environment
npm run test:dev

# Staging environment
npm run test:staging

# Production environment
npm run test:prod
```

### Responsive Testing
```bash
# Mobile testing
npm run cy:run:mobile

# Tablet testing
npm run cy:run:tablet

# Desktop testing
npm run cy:run:headed
```

## Cookie Handling Implementation

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

## Test Data Management

The test suite includes comprehensive test data management:

- **Valid test data** for standard scenarios
- **Alternative test data** for edge cases
- **Random data generation** for dynamic testing
- **Data validation** helpers

## Reporting

### Generate Reports
```bash
# Generate all reports
npm run report:generate

# Open HTML report
npm run report:open
```

### Report Types
- **Mochawesome**: Beautiful HTML reports with screenshots
- **Cucumber HTML**: Feature-based reporting
- **JSON**: CI/CD integration support

## Code Quality

### Linting and Formatting
```bash
# Check code quality
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run prettier

# Check formatting
npm run prettier:check
```

## Setup

### Initial Setup
```bash
# Install dependencies and verify Cypress
npm run setup
```

### Clean Environment
```bash
# Clean reports and artifacts
npm run clean
```

## Best Practices Implemented

1. **Page Object Model**: Clean separation of concerns
2. **Data-Driven Testing**: Reusable test data
3. **Tagged Scenarios**: Organized test execution
4. **Error Handling**: Robust error management
5. **Wait Strategies**: Intelligent waiting mechanisms
6. **Validation**: Comprehensive field validation
7. **Reporting**: Multiple report formats
8. **Environment Support**: Multi-environment testing

## Troubleshooting

### Common Issues

1. **Cookie Banner Not Found**: Ensure proper selectors in HomePage
2. **Form Validation Errors**: Check field selectors in QuotePage
3. **Timeout Issues**: Adjust timeouts in cypress.config.js
4. **Report Generation**: Ensure mochawesome dependencies are installed

### Debug Mode
```bash
# Run with headed mode for debugging
npm run cy:run:headed
```

## Contributing

1. Follow the existing code structure
2. Add appropriate tags to new scenarios
3. Update test data as needed
4. Ensure all tests pass before committing
5. Update documentation for new features

## License

MIT License - see LICENSE file for details.