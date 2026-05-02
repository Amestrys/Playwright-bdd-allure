import { faker } from '@faker-js/faker';

export function generateFullName(): string {
  return faker.person.fullName();
}

export function generateEmail(): string {
  return faker.internet.email();
}

export function generatePhoneNumber(): string {
  return faker.phone.number();
}

export function generateAddress(): string {
  return faker.location.streetAddress();
}