import { Container } from "@mantine/core";
import { Explore, HeroCarousel, Reason, Recent } from "@/components";

export default () => (
  <Container size={1280} mb={40}>
    <HeroCarousel />
    <Recent />
    <Explore />
    <Reason />
  </Container>
);
