import { Col, Container, Grid } from "@mantine/core";
import { SearchBox, CardItem } from "@/components";
import { data } from "@/constants/data";

const Buy = () => {
  return (
    <Container size={1280} my={40}>
      <SearchBox />
      <Grid columns={24}>
        { data.map((i) => (
            <Col md={6} key={i.title}>
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
          )
        )}
      </Grid>
    </Container> 
  );
};

export default Buy;