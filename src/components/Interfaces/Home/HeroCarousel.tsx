import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
// import { useMediaQuery } from "@mantine/hooks";
import Autoplay from 'embla-carousel-autoplay';
import { rem, useMantineTheme } from "@mantine/core";
import CardSlide from "@/components/Cards/CardSlide";
import { data } from "@/constants/data";

const HeroCarousel = () => {
  // const theme = useMantineTheme();
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <CardSlide {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      withControls={false}
      withIndicators
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
};

export default HeroCarousel;