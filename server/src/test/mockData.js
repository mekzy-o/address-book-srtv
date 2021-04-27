import faker from 'faker';

export const mockContactDetails = {
  contactsWithoutFirstName: {
    lastName: faker.internet.lastName,
    phone: faker.internet.phone,
    address: faker.internet.address,
  },
  contactsWithoutLastName: {
    firstName: faker.firstName,
    phone: faker.internet.phone,
    address: faker.internet.address,
  },
  contactsWithoutPhone: {
    firstName: faker.internet.firstName,
    lastName: faker.internet.lastName,
    address: faker.internet.address,
  },
  contactsWithoutAddress: {
    firstName: faker.internet.firstName,
    lastName: faker.internet.lastName,
    phone: faker.internet.phone,
  },
};
