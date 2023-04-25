import { faker } from "@faker-js/faker";

export const generateAddress = () => (
  `St.${faker.address.streetAddress()}, ${faker.address.state()}, ${faker.address.cityName()}`
);
