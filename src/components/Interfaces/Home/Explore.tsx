import CardItem from '@/components/Cards/CardItem';
import { data } from '@/constants/data';
import { Button, Col, Grid, Group, Title } from '@mantine/core';
import { IconChevronsRight } from '@tabler/icons-react';

const Explore = () => (
  <>
    <Group position="apart" align="center" mt={32} mb={16}>
      <Title order={3} weight={600}>
        Explore
      </Title>
      <Button
        variant="light"
        radius={16}
        rightIcon={<IconChevronsRight size={14} />}
      >
        more
      </Button>
    </Group>
    <Grid columns={24}>
      {data.map((i) => (
        <Col md={6} key={i.title}>
          <CardItem
            author={{
              description: '',
              image: '',
              name: 'Sale agent',
            }}
            category={i.category}
            footer="733 people liked this"
            image={i.image}
            title={i.title}
          />
        </Col>
      ))}
    </Grid>
  </>
);

export default Explore;
