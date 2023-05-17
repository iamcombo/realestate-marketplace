import { useIsClient } from '@/hooks';
import { faker } from '@faker-js/faker';
import {
  Avatar,
  Button,
  Card,
  Col,
  Grid,
  Group,
  Space,
  Spoiler,
  Text,
  Title,
} from '@mantine/core';
import {
  IconAirConditioning,
  IconAlarm,
  IconArtboard,
  IconBath,
  IconBed,
  IconBoxModel2,
  IconBuildingSkyscraper,
  IconCameraCheck,
  IconDeviceTv,
  IconDiscountCheck,
  IconFireHydrant,
  IconFlame,
  IconLamp,
  IconLeaf,
  IconWifi,
} from '@tabler/icons-react';

const PropertyInfo = () => (
  <>
    <Grid columns={24}>
      <Col md={8}>
        <Text weight={600}>Description</Text>
      </Col>
      <Col md={16}>
        <Spoiler maxHeight={100} showLabel="Show more" hideLabel="Hide">
          <Text c="dimmed">{useIsClient() && faker.lorem.paragraph(10)}</Text>
        </Spoiler>
      </Col>
    </Grid>
    <Card withBorder radius={16} mt={8}>
      <Text weight={500} color="dimmed">
        Listed by property owner
      </Text>
      <Group mt={8} position="apart">
        <Group>
          <Avatar
            src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            radius="xl"
            size="lg"
          />
          <div>
            <Text weight={600}>Jonh Wick</Text>
            <Text fz={14} color="dimmed">
              Sale agent
            </Text>
          </div>
        </Group>
        <Button size="md" px={24} radius={8}>
          Contact
        </Button>
      </Group>
    </Card>

    <Space h={40} />

    <Title order={4} mb={16}>
      Project Overview
    </Title>
    <Grid columns={24}>
      <Col md={8}>
        <Text c="dimmed">Bedrooms</Text>
        <Group spacing={8} align="center">
          <IconBed size={20} stroke={1.5} color="blue" />
          <Text weight={600} size={14}>
            4
          </Text>
        </Group>
      </Col>
      <Col md={8}>
        <Text c="dimmed">Bathrooms</Text>
        <Group spacing={8} align="center">
          <IconBath size={20} stroke={1.5} color="blue" />
          <Text weight={600} size={14}>
            2
          </Text>
        </Group>
      </Col>
      <Col md={8}>
        <Text c="dimmed">Area</Text>
        <Group spacing={8} align="center">
          <IconBoxModel2 size={20} stroke={1.5} color="blue" />
          <Text weight={600} size={14}>
            1,024 m²
          </Text>
        </Group>
      </Col>
      <Col md={8}>
        <Text c="dimmed">Decoration type</Text>
        <Group spacing={8} align="center">
          <IconLamp size={20} stroke={1.5} color="blue" />
          <Text weight={600} size={14}>
            Modern style
          </Text>
        </Group>
      </Col>
      <Col md={8}>
        <Text c="dimmed">Greening rate</Text>
        <Group spacing={8} align="center">
          <IconLeaf size={20} stroke={1.5} color="blue" />
          <Text weight={600} size={14}>
            30%
          </Text>
        </Group>
      </Col>
      <Col md={8}>
        <Text c="dimmed">Property type</Text>
        <Group spacing={8} align="center">
          <IconBuildingSkyscraper size={20} stroke={1.5} color="blue" />
          <Text weight={600} size={14}>
            Villa
          </Text>
        </Group>
      </Col>
    </Grid>

    <Space h={40} />
    <Title order={4} mb={16}>
      Highlight
    </Title>
    <Grid columns={24}>
      <Col md={8}>
        <Group spacing={8} align="center">
          <IconDiscountCheck color="green" stroke={1.5} size={32} />
          <Text weight={600} size={14}>
            Guaranteed Leaseback
          </Text>
        </Group>
      </Col>
      <Col md={8}>
        <Group spacing={8} align="center">
          <IconDiscountCheck color="green" stroke={1.5} size={32} />
          <Text weight={600} size={14}>
            High Return Yield
          </Text>
        </Group>
      </Col>
      <Col md={8}>
        <Group spacing={8} align="center">
          <IconDiscountCheck color="green" stroke={1.5} size={32} />
          <Text weight={600} size={14}>
            Brand Developer
          </Text>
        </Group>
      </Col>
      <Col md={8}>
        <Group spacing={8} align="center">
          <IconDiscountCheck color="green" stroke={1.5} size={32} />
          <Text weight={600} size={14}>
            High Appreciation Value
          </Text>
        </Group>
      </Col>
    </Grid>

    <Space h={40} />
    <Title order={4} mb={16}>
      Property Feature
    </Title>
    <Grid columns={24}>
      <Col md={8}>
        <Group spacing={8} align="center">
          <IconAirConditioning color="blue" stroke={1.5} size={20} />
          <Text weight={600} size={14}>
            Air Conditioning
          </Text>
        </Group>
      </Col>
      <Col md={8}>
        <Group spacing={8} align="center">
          <IconDeviceTv color="blue" stroke={1.5} size={20} />
          <Text weight={600} size={14}>
            Pay TV
          </Text>
        </Group>
      </Col>
      <Col md={8}>
        <Group spacing={8} align="center">
          <IconArtboard color="blue" stroke={1.5} size={20} />
          <Text weight={600} size={14}>
            Balcony
          </Text>
        </Group>
      </Col>
      <Col md={8}>
        <Group spacing={8} align="center">
          <IconWifi color="blue" stroke={1.5} size={20} />
          <Text weight={600} size={14}>
            Internet/Wifi
          </Text>
        </Group>
      </Col>
    </Grid>

    <Space h={40} />
    <Title order={4} mb={16}>
      Security
    </Title>
    <Grid columns={24}>
      <Col md={8}>
        <Group spacing={8} align="center">
          <IconAlarm color="blue" stroke={1.5} size={20} />
          <Text weight={600} size={14}>
            Alarm System
          </Text>
        </Group>
      </Col>
      <Col md={8}>
        <Group spacing={8} align="center">
          <IconFlame color="blue" stroke={1.5} size={20} />
          <Text weight={600} size={14}>
            Fire Alarm
          </Text>
        </Group>
      </Col>
      <Col md={8}>
        <Group spacing={8} align="center">
          <IconCameraCheck color="blue" stroke={1.5} size={20} />
          <Text weight={600} size={14}>
            Video Security
          </Text>
        </Group>
      </Col>
      <Col md={8}>
        <Group spacing={8} align="center">
          <IconFireHydrant color="blue" stroke={1.5} size={20} />
          <Text weight={600} size={14}>
            Fire sprinkler system
          </Text>
        </Group>
      </Col>
    </Grid>
  </>
);

export default PropertyInfo;
