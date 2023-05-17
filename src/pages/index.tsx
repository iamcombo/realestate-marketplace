import { Explore, HeroCarousel, Reason, Recent } from '@/components';
import { Container } from '@mantine/core';

export default () => (
  <Container size={1280} mb={40}>
    <HeroCarousel />
    <Recent />
    <Explore />
    <Reason />
  </Container>
);
