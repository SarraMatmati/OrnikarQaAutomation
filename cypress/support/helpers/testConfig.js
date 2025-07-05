// Test configuration and data management
export const TestConfig = {
  // Test data for different scenarios
  testData: {
    validUser: {
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@example.com',
      phone: '0123456789'
    },
    validVehicle: {
      brand: 'Peugeot',
      model: '308',
      licensePlate: 'AB-123-CD',
      year: '2020'
    },
    alternativeUser: {
      firstName: 'Marie',
      lastName: 'Martin',
      email: 'marie.martin@example.com',
      phone: '0987654321'
    },
    alternativeVehicle: {
      brand: 'Renault',
      model: 'Clio',
      licensePlate: 'XY-789-ZW',
      year: '2021'
    }
  },

  // Cookie handling scenarios
  cookieScenarios: {
    accept: 'accept',
    refuse: 'refuse',
    continueWithout: 'continue-without'
  },

  // Guarantee types
  guaranteeTypes: {
    allRisk: 'Tous risques',
    thirdParty: 'Tiers',
    thirdPartyCollision: 'Tiers Collision'
  },

  // Test tags for filtering
  tags: {
    cookies: '@cookies',
    validation: '@validation',
    subscription: '@subscription',
    smoke: '@smoke',
    regression: '@regression'
  },

  // Timeout configurations
  timeouts: {
    short: 5000,
    medium: 10000,
    long: 15000,
    veryLong: 30000
  },

  // Viewport configurations
  viewports: {
    mobile: { width: 375, height: 667 },
    tablet: { width: 768, height: 1024 },
    desktop: { width: 1280, height: 720 }
  }
};

// Helper functions for test data management
export const TestHelpers = {
  // Get test data by scenario
  getTestData(scenario = 'valid') {
    switch (scenario) {
      case 'alternative':
        return {
          user: TestConfig.testData.alternativeUser,
          vehicle: TestConfig.testData.alternativeVehicle
        };
      default:
        return {
          user: TestConfig.testData.validUser,
          vehicle: TestConfig.testData.validVehicle
        };
    }
  },

  // Generate random test data
  generateRandomData() {
    const randomId = Math.floor(Math.random() * 10000);
    return {
      firstName: `Test${randomId}`,
      lastName: `User${randomId}`,
      email: `test${randomId}@example.com`,
      phone: `01${randomId.toString().padStart(8, '0')}`
    };
  },

  // Validate email format
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validate phone number format
  isValidPhone(phone) {
    const phoneRegex = /^0[1-9](\d{8})$/;
    return phoneRegex.test(phone);
  },

  // Validate license plate format
  isValidLicensePlate(plate) {
    const plateRegex = /^[A-Z]{2}-\d{3}-[A-Z]{2}$/;
    return plateRegex.test(plate);
  }
};

// Environment-specific configurations
export const EnvironmentConfig = {
  development: {
    baseUrl: 'https://dev.ornikar.com',
    timeout: 10000
  },
  staging: {
    baseUrl: 'https://staging.ornikar.com',
    timeout: 15000
  },
  production: {
    baseUrl: 'https://www.ornikar.com',
    timeout: 20000
  }
};

// Export default configuration
export default {
  TestConfig,
  TestHelpers,
  EnvironmentConfig
}; 