import { Button, Col, Container, Grid, Overlay, Paper, Text, Title } from "@mantine/core";
import { styles } from './styles/cardSlide';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

const CardSlide = ({ image, title, category }: CardProps) => (
  <Paper
    shadow="md"
    radius={16}
    sx={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
    h={400}
  >
    <Overlay
      gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 70%)"
      opacity={0.8}
      zIndex={0}
      radius={16}
    />
    <Container style={{ zIndex: 1, position: 'absolute', height: 'inherit', width: '100%' }}>
      <Grid columns={24} sx={{ zIndex: 1 }} h={340} align='center'>
        <Col span={20} md={10}>
          <div>
            <Text size="xs" color="slate.0">
              {category}
            </Text>
            <Title order={1} weight={800} color="slate.0" sx={styles.title}>
              {title}
            </Title>
          </div>
          <Button mt={24} size="md" radius={8} variant="white" color="dark">
            Book a tour
          </Button>
        </Col>
      </Grid>
    </Container>
  </Paper>
);

export default CardSlide;