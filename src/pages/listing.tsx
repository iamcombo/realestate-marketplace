import { Button, Container, Group, MultiSelect, Select, Stack, TextInput, Textarea, Title } from "@mantine/core";
import { IconCurrencyDollar } from "@tabler/icons-react";

const Listing = () => {
  let _;

  return (
    <Container size={520} my={40}>
      <Title order={4} mb={8}>General Info</Title>
      <Stack>
        <Select
          label='Property for'
          placeholder="Please select option"
          data={['Sale', 'Rent', 'Both']}
        />
        <Select
          label='Property type'
          placeholder="Please select property type"
          data={['Apartment', 'Condo', 'Flat']}
        />
      </Stack>

      <Title order={4} mt={24} mb={8}>Sale/Rent/Both</Title>
      <TextInput 
        label='Price'
        placeholder="Enter price"
        icon={<IconCurrencyDollar stroke={1.5} />}
      />

      <Title order={4} mt={24} mb={8}>Property Detail</Title>
      <Stack>
        <TextInput 
          label='Title'
          placeholder="Enter title"
        />
        <Textarea 
          label='Description'
          placeholder="Enter description"
        />
        <TextInput
          label='Bedroom'
          placeholder="Enter bedroom quantity"
        />
        <TextInput
          label='Bathroom'
          placeholder='Enter bathroom quantity'
        />
        <TextInput
          label='Parking'
          placeholder="Enter parking quantity"
        />
        <TextInput
          label='Land Area'
          placeholder='Enter land area'
        />
        <TextInput
          label='Floor Area'
          placeholder='Enter floor area'
        />
      </Stack>

      <Title order={4} mt={24} mb={8}>Location</Title>
      <Stack>
        <Select
          label='City/Province'
          placeholder="Select city/province"
          data={['Phnom Penh', 'Sihanouk ville']}
        />
        <TextInput
          label='Khan/District'
          placeholder="Enter khan/district"
        />
        <TextInput
          label='Sangkat/Commune'
          placeholder="Enter sangkat/commune"
        />
        <TextInput
          label='Street name'
          placeholder="Enter street name"
        />
        <TextInput
          label='Street Number'
          placeholder="Enter street number"
        />
      </Stack>

      <Title order={4} mt={24} mb={8}>Feature</Title>
      <Stack>
        <MultiSelect
          label='Amenities'
          data={[]}
        />
        <MultiSelect
          label='Property feature'
          data={[]}
        />
        <MultiSelect
          label='Security'
          data={[]}
        />
        <MultiSelect
          label='Views'
          data={[]}
        />
      </Stack>

      <Title order={4} mt={24} mb={8}>Image</Title>
      <Stack>

      </Stack>

      <Title order={4} mt={24} mb={8}>Video & VR</Title>
      <Stack>
        
      </Stack>
      <Group position="right">
        <Button radius={8} px={32}>List Property</Button>
      </Group>
    </Container>
  );
};

export default Listing;