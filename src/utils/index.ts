import { faker } from "@faker-js/faker";

export const generateAddress = () => (
  `${faker.address.streetAddress()}, ${faker.address.state()}, ${faker.address.cityName()}`
);
