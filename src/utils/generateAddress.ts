import { faker } from '@faker-js/faker';

const generateAddress = () =>
  `St.${faker.address.streetAddress()}, ${faker.address.state()}, ${faker.address.cityName()}`;

export default generateAddress;
