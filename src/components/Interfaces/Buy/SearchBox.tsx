import {
  Button,
  Card,
  Col,
  Grid,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';

const SearchBox = () => (
  <Card
    shadow="sm"
    px={32}
    py={24}
    mt={16}
    mb={40}
    radius={16}
    withBorder
    sx={{ position: 'initial' }}
  >
    <Text fw={600} fz={24}>
      Search the type what you looking for.
    </Text>
    <Grid columns={24} justify="space-around" mt={8}>
      <Col md={4}>
        <Text fw={600}>Location</Text>
        <Select
          placeholder="Select location"
          data={['Sihanouk ville']}
          value="Sihanouk ville"
          size="md"
          radius={8}
          variant="filled"
        />
      </Col>
      <Col md={12}>
        <Group position="center">
          <div>
            <Text weight={600}>Price range</Text>
            <Group>
              <TextInput
                variant="filled"
                size="md"
                radius={8}
                placeholder="from"
              />
              <TextInput
                variant="filled"
                size="md"
                radius={8}
                placeholder="to"
              />
            </Group>
          </div>
        </Group>
      </Col>
      <Col md={4}>
        <Text fw={600}>Property type</Text>
        <Select
          placeholder="Select property type"
          variant="filled"
          size="md"
          radius={8}
          data={['Villa', 'Apartment', 'Condo']}
        />
      </Col>
      <Col md={4}>
        <Stack justify="flex-end" h={65}>
          <Button px={40} size="md" radius={8}>
            Search
          </Button>
        </Stack>
      </Col>
    </Grid>
  </Card>
);

export default SearchBox;
