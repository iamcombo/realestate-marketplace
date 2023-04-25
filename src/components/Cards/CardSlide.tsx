import { Button, Col, Grid, Overlay, Paper, Text, Title } from "@mantine/core";

interface CardProps {
  image: string;
  title: string;
  category: string;
}

const CardSlide = ({ image, title, category }: CardProps) => (
  <Paper
    shadow="md"
    pl={40}
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
    <div style={{ zIndex: 1, position: 'absolute', height: 'inherit', width: '100%' }}>
      <Grid columns={24} sx={{ zIndex: 1 }} h={340} align='center'>
        <Col span={10}>
          <div>
            <Text size="xs" color="slate.0">
              {category}
            </Text>
            <Title order={1} weight={800} color="slate.0">
              {title}
            </Title>
          </div>
          <Button variant="white" color="dark" mt={24}>
            Book a tour
          </Button>
        </Col>
      </Grid>
    </div>
  </Paper>
);

export default CardSlide;