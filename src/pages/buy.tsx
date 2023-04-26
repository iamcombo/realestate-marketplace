import { CardItem } from "@/components/Cards/CardItem";
import { data } from "@/constants/data";
import { Button, Card, Col, Container, Divider, Grid, Group, Select, Stack, Text, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";

const Buy = () => (
  <Container size={1280} my={40}>
    <Card shadow="sm" mt={16} mb={40} radius={16} withBorder sx={{ position: 'initial' }}>
      <Group align="start">
        <div>
          <Text fw={600}>Location</Text>
          <Text c='dimmed'>Sihanouk ville</Text>
        </div>
        <Divider orientation="vertical" />
        <div>
          <Text weight={600}>When</Text>
          <DateInput
            placeholder="Select date"
            variant="filled"
            size="md"
            radius={8}
          />  
        </div>
        <Divider orientation="vertical" />
        <div>
          <Text weight={600}>Price range</Text>
          <Group>
            <TextInput variant="filled" size="md" radius={8} w={160} placeholder="from" />
            <TextInput variant="filled" size="md" radius={8} w={160} placeholder="to" />
          </Group>
        </div>
        <Divider orientation="vertical" />
        <div>
          <Text fw={600}>Property type</Text>
          <Select placeholder="Select property type" variant="filled" size="md" radius={8} data={[]} w={200} />
        </div>
        <Divider orientation="vertical" />
        <Stack justify="flex-end"  h={65}>
         <Button px={40} size="md" radius={8}>Search</Button>
        </Stack>
      </Group>
    </Card>
    <Grid columns={24}>
      { data.map((i) => 
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
      )}
    </Grid>
  </Container> 
);

export default Buy;