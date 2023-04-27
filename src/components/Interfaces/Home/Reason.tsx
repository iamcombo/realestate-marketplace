import { Card, Col, Grid, Group, Image, Space, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconAngle, IconBuildingEstate, IconClipboardList } from "@tabler/icons-react";

const Reason = () => (
  <>
    <Space h={80} />
    <Title my={16}>Why you should buy <br/> property from us?</Title>
    <Grid columns={24} gutter={40} align='center' justify="space-between">
      <Col md={12}>
        <Card shadow="md" radius={24} p={24}>
          <Group mb={8}>
            <ThemeIcon size='xl' variant='light' radius={8}>
              <IconClipboardList stroke={1.5} />
            </ThemeIcon>
            <Stack spacing={2}>
              <Text size='sm' c='dimmed'>Step - 1</Text>
              <Text fw={600}>Research & Planing</Text>
            </Stack>
          </Group>
          <Text> 
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </Text>
        </Card>
        <Card shadow="md" radius={24} my={16} p={24}>
          <Group mb={8}>
            <ThemeIcon size='xl' variant='light' radius={8}>
              <IconAngle stroke={1.5} />
            </ThemeIcon>
            <Stack spacing={2}>
              <Text size='sm' c='dimmed'>Step - 2</Text>
              <Text fw={600}>Design & Testing</Text>
            </Stack>
          </Group>
          <Text> 
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </Text>
        </Card>
        <Card shadow="md" radius={24} p={24}>
          <Group mb={8}>
            <ThemeIcon size='xl' variant='light' radius={8}>
              <IconBuildingEstate stroke={1.5} />
            </ThemeIcon>
            <Stack spacing={2}>
              <Text size='sm' c='dimmed'>Step - 3</Text>
              <Text fw={600}>Build & Deliver Property</Text>
            </Stack>
          </Group>
          <Text> 
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </Text>
        </Card>
      </Col>
      <Col md={12}>
        <div style={{ position: 'relative', height: 'inherit' }}>
          <Image 
            alt='' 
            src='https://images.unsplash.com/photo-1565953522043-baea26b83b7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
            fit="cover"
            radius={24}
            height={420}
          />
        </div>
      </Col>
    </Grid>
  </>
);

export default Reason;