module.exports = {
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended'
  ],
  plugins: ['cypress'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'warn'
  }
};