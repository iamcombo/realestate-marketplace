import ImageDisplay from "@/components/Interfaces/PropertyDetail/ImageDisplay";
import { Avatar, Button, Card, Col, Container, Divider, Grid, Group, Rating, Space, Spoiler, Text } from "@mantine/core";
import { IconBath, IconBed, IconDots, IconHeart, IconPhoneFilled, IconShare3 } from "@tabler/icons-react";
import { GoogleMap, Marker, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import React from "react";
import { Bar } from "react-chartjs-2";
import { faker } from '@faker-js/faker';
import { BarElement, CategoryScale, Chart, LinearScale } from "chart.js";
import { PropertyInfo } from "@/components";

Chart.register(CategoryScale, LinearScale, BarElement);

const PropertyDetail = () => {
  const { isLoaded } = useLoadScript({
    // id: 'google-map-script',
    googleMapsApiKey: ""
  });

  const [map, setMap] = React.useState<any>(null);
  const center = {
    lat: 11.5564,
    lng: 104.9282
  };

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

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 200000, max: 500000 })),
        backgroundColor: '#228be6',
        borderRadius: 8
      },
    ],
  };

  return (
    <Container size={1280} my={40}>
      <Grid columns={24} gutter={40} justify='space-between'>
        <Col md={14}>
          <ImageDisplay />
          <Group position="apart">
            <Text fz={24} weight={600} c='blue'>$400,500 USD</Text>
            <div>
              <Text weight={600} size={32}>565 Broome Str, NY</Text>
              <Text>Williamsbridge, Bronx</Text>
            </div>
            <Group>
              <IconHeart stroke={1.5} />
              <IconShare3 stroke={1.5} />
              <IconDots stroke={1.5} />
            </Group>
          </Group>
          <Divider my={24} />
          <PropertyInfo />
        </Col>
        <Col md={10}>
          <Group position='center'>
            <Card w={300} withBorder p={16} radius={8}>
              <Group position="center" mb={8}>
                <Avatar alt="" src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4" size="lg" radius="xl" />
              </Group>
              <Text align="center">Sale Agent</Text>
              <Group position="center" spacing={4} align="center">
                <Rating value={3.5} fractions={2} readOnly />
                <Text>[123]</Text>
              </Group>
              <Card.Section bg='slate.0' p={24} mt={8}>
                <Button fullWidth size="md" leftIcon={<IconPhoneFilled stroke={1.5} size={14} />}>Contact Agent</Button>
                <Divider my={16} />
                <Button fullWidth px={60} variant="outline">Buy</Button>
              </Card.Section>
            </Card>
          </Group>
          <Text my={16} c='dimmed'>Price History</Text>
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
          />
        </Col>
      </Grid>
      <Space h={40} />
      {
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '400px',
              borderRadius: '16px'
            }}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
            <Marker position={center} />
          </GoogleMap>
        ) : <></>
      }
    </Container>
  );
};

export default PropertyDetail;