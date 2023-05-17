import { CardItem, SearchBox } from '@/components';
import { data as chunk } from '@/constants/data';
import { useIsClient } from '@/hooks';
import { Col, Container, Grid } from '@mantine/core';
import Link from 'next/link';

interface IMintData {
  lister: string;
  price: string;
  uri: string;
  nonce: string;
  signature: string;
}

const getRandomInt = () => {
  return Math.floor(Math.random() * 5);
};

const Buy = ({ data }: { data: IMintData[] }) => {
  return (
    <Container size={1280} my={40}>
      <SearchBox />
      <Grid columns={24}>
        {useIsClient() &&
          data?.map((i, index) => (
            <Col md={6} key={index}>
              <Link href={`/property/${index}`}>
                <CardItem
                  author={{
                    description: '',
                    image: '',
                    name: 'Sale agent',
                  }}
                  category={chunk[getRandomInt()].category}
                  footer="733 people liked this"
                  image={chunk[getRandomInt()].image}
                  title={chunk[getRandomInt()].title}
                />
              </Link>
            </Col>
          ))}
      </Grid>
    </Container>
  );
};

export default Buy;

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/storage', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
};
