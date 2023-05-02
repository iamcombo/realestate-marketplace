'use client';

import { PropertyInfo } from '@/components';
import ImageDisplay from '@/components/Interfaces/PropertyDetail/ImageDisplay';
import { faker } from '@faker-js/faker';
import {
  Button,
  Card,
  Col,
  Container,
  Divider,
  Grid,
  Group,
  Space,
  Text,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import {
  IconDots,
  IconHeart,
  IconMapPinFilled,
  IconShare3,
} from '@tabler/icons-react';
import { BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import React from 'react';

Chart.register(CategoryScale, LinearScale, BarElement);
const center = {
  lat: 11.5564,
  lng: 104.9282,
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Augest',
  'September',
  'October',
  'November',
  'December',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() =>
        faker.datatype.number({ min: 200000, max: 500000 })
      ),
      backgroundColor: '#228be6',
      borderRadius: 8,
    },
  ],
};

const PropertyDetail = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: '',
  });

  const [map, setMap] = React.useState<any>(null);

  const onLoad = React.useCallback((_map: any) => {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    if (!map) return;
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback((_map: any) => {
    setMap(null);
  }, []);

  return (
    <Container size={1280} my={40}>
      <ImageDisplay />
      <Grid columns={24} gutter={40} justify="space-between">
        <Col md={18}>
          <Group position="apart" align="start">
            <div>
              <Text weight={600} size={32}>
                565 Broome Str, NY
              </Text>
              <Group align="center" spacing={4}>
                <IconMapPinFilled fill="gray" />
                <Text>Williamsbridge, Bronx</Text>
              </Group>
            </div>
            <Group mt={16}>
              <IconHeart stroke={1.5} color="blue" />
              <IconShare3 stroke={1.5} color="blue" />
              <IconDots stroke={1.5} color="blue" />
            </Group>
          </Group>
          <Divider my={24} />
          <PropertyInfo />
        </Col>
        <Col md={6}>
          <Card withBorder radius={16} sx={{ position: 'initial' }}>
            <Text color="dimmed">Price</Text>
            <Text fz={24} weight={800} c="primary.6">
              $400,500 USD
            </Text>
            <Button fullWidth size="md" mt={24} radius={8}>
              Apply now
            </Button>
            <Divider my={16} />
            <Text weight={600} mb={8}>
              Request a tour
            </Text>
            <DateInput placeholder="Pick date and time" size="md" radius={8} />
            <Button fullWidth variant="outline" size="md" radius={8} my={16}>
              Book a tour
            </Button>
            <Text weight="lighter" fz={12}>
              * It is free with no obligation - cancel anytime
            </Text>
          </Card>
          {/* <Text my={16} c='dimmed'>Price History</Text>
          <Bar
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: true,
                  text: 'Chart.js Bar Chart'
                },
              }}
            }
            data={data}
          /> */}
        </Col>
      </Grid>
      <Space h={40} />
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '400px',
            borderRadius: '16px',
          }}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div />
      )}
    </Container>
  );
};

export default PropertyDetail;
