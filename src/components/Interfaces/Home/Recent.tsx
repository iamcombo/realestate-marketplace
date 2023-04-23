import { CardItem } from "@/components/Cards/CardItem";
import { data } from "@/constants/data";
import { Col, Container, Grid, Title } from "@mantine/core";

const Recent = () => (
  <div>
    <Title order={3} weight={600} mt={32} mb={16} align="center">RECENT</Title>
    <Grid columns={24}>
      { data.slice(3).map((i) => 
        <Col md={8}>
          <CardItem
            author={{
              description: '',
              image: '',
              name: 'Sale agent'
              }}
            category={i.category}
            footer='733 people liked this'
            image={i.image}
            title={i.title}
          />
        </Col>
      )}
    </Grid>
  </div>
);

export default Recent;