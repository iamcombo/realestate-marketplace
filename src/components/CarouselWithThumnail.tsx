import { data } from '@/constants/data';
import type { Embla } from '@mantine/carousel';
import { Carousel } from '@mantine/carousel';
import { Col, Grid, Image, SimpleGrid } from '@mantine/core';
import { useState } from 'react';

const CarouselWithThumnail = () => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const onSelect = (index: number) => {
    if (!embla) return;
    return embla.scrollTo(index);
  };

  return (
    <Grid columns={24} gutter={40}>
      <Col md={18}>
        <Carousel getEmblaApi={setEmbla}>
          {data.map((i) => (
            <Carousel.Slide key={i.title}>
              <Image
                src={i.image}
                alt=""
                fit="cover"
                height={400}
                radius={16}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Col>
      <Col md={6}>
        <SimpleGrid cols={2}>
          {data.map((i, index) => (
            <Image
              key={i.title}
              src={i.image}
              alt=""
              fit="cover"
              height={80}
              onClick={() => onSelect(index)}
            />
          ))}
        </SimpleGrid>
      </Col>
    </Grid>
  );
};

export default CarouselWithThumnail;
