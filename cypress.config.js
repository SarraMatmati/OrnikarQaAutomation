const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.ornikar.com',
    specPattern: "cypress/e2e/**/*.{feature,features}",
    supportFile: 'cypress/support/e2e.js',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    video: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    
    setupNodeEvents(on, config) {
      // Cucumber preprocessor
      addCucumberPreprocessorPlugin(on, config);
     
      // Esbuild preprocessor
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));
      
      // Mochawesome reporter
      on('after:run', (results) => {
        if (results) {
          require('mochawesome-merge').merge({
            files: ['cypress/reports/mochawesome-report/*.json'],
            output: 'cypress/reports/mochawesome-bundle.json'
          }).then(() => {
            require('mochawesome-report-generator').create({
              files: ['cypress/reports/mochawesome-bundle.json'],
              dir: 'cypress/reports/mochawesome-report',
              reportTitle: 'Ornikar QA Automation Report',
              reportPageTitle: 'Test Results'
            });
          });
        }
      });
      
      return config;
    },
    
    env: {
      // Variables d'environnement
      testUser: {
        email: 'test@example.com',
        password: 'TestPassword123!'
      }
    }
  },
  
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss'
  }
});