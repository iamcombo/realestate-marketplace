import { Card, Center, Col, Container, Grid, Text, Title } from "@mantine/core";
import Image from "next/image";
import house from "@/assets/house.png";
import apartment from "@/assets/apartment.png";
import condo from "@/assets/condo.png";
import Link from "next/link";

const SelectType = () => (
  <Container size={1280} my={40}>
    <Title align="center">What do you want to sell?</Title>
    <Text align="center">Select a property type below to begin.</Text>
    <Grid columns={24} mt={24} justify="center">
      <Col md={6}>
        <Link href='/listing'>
          <Card
            p={24}
            radius={16}
            shadow="md"
            withBorder
          >
            <Center>
              <Image alt='' src={house} width={60} height={60} />
            </Center>
            <Title order={4} mt={32} align="center">House</Title>
          </Card>
        </Link>
      </Col>
      <Col md={6}>
        <Link href='/listing'>
          <Card
            p={24}
            radius={16}
            shadow="md"
            withBorder
          >
            <Center>
              <Image alt='' src={apartment} width={60} height={60} />
            </Center>
            <Title order={4} mt={32} align="center">Apartment</Title>
          </Card>
        </Link>
      </Col>
      <Col md={6}>
        <Link href='/listing'>
          <Card
            p={24}
            radius={16}
            shadow="md"
            withBorder
          >
            <Center>
              <Image alt='' src={condo} width={60} height={60} />
            </Center>
            <Title order={4} mt={32} align="center">Condo</Title>
          </Card>
        </Link>
      </Col>
    </Grid>
  </Container>
);

export default SelectType;