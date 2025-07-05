import { faker } from '@faker-js/faker';

export class DataGenerator {
  static generatePersonalInfo() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number('01########')
    };
  }

  static generateVehicleInfo() {
    const brands = ['Peugeot', 'Renault', 'Citroën', 'Volkswagen', 'BMW'];
    const models = ['308', 'Clio', 'C3', 'Golf', 'Série 3'];
    
    return {
      brand: faker.helpers.arrayElement(brands),
      model: faker.helpers.arrayElement(models),
      licensePlate: this.generateLicensePlate(),
      year: faker.date.between({ from: '2010-01-01', to: '2023-12-31' }).getFullYear().toString()
    };
  }

  static generateLicensePlate() {
    const letters1 = faker.string.alpha({ length: 2 }).toUpperCase();
    const numbers = faker.string.numeric(3);
    const letters2 = faker.string.alpha({ length: 2 }).toUpperCase();
    
    return `${letters1}-${numbers}-${letters2}`;
  }

  static generateTestScenarios() {
    return {
      validScenario: {
        personal: this.generatePersonalInfo(),
        vehicle: this.generateVehicleInfo()
      },
      invalidScenario: {
        personal: {
          firstName: '',
          lastName: '',
          email: 'invalid-email',
          phone: '123'
        },
        vehicle: {
          brand: '',
          model: '',
          licensePlate: 'INVALID',
          year: ''
        }
      }
    };
  }
}