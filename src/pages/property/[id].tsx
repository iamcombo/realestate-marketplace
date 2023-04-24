import ImageDisplay from "@/components/Interfaces/PropertyDetail/ImageDisplay";
import { Avatar, Button, Card, Col, Container, Divider, Grid, Group, Space, Spoiler, Text } from "@mantine/core";
import { IconBath, IconBed, IconDots, IconHeart, IconPhoneFilled, IconShare3 } from "@tabler/icons-react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React from "react";

const PropertyDetail = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  });

  const [map, setMap] = React.useState<any>(null);
  const center = {
    lat: -3.745,
    lng: -38.523
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

  return (
    <Container size={1280} my={40}>
      <Grid columns={24} gutter={40} justify='space-between'>
        <Col md={14}>
          <ImageDisplay />
          {/* image carousel */}
          <Group position="apart">
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
          <Grid columns={24}>
            <Col md={8}>
              <Text c='dimmed' weight={500}>Bedrooms</Text>
              <Group spacing={4} align="center">
                <Text weight={600} size={20}>4</Text>
                <IconBed size={16} stroke={1.5} />
              </Group>
            </Col>
            <Col md={8}>
              <Text c='dimmed' weight={500}>Bathrooms</Text>
              <Group spacing={4} align="center">
                <Text weight={600} size={20}>2</Text>
                <IconBath size={16} stroke={1.5} />
              </Group>
            </Col>
            <Col md={8}>
              <Text c='dimmed' weight={500}>Area</Text>
              <Group spacing={4} align="center">
                <Text weight={600} size={20}>1,024 ft²</Text>
              </Group>
            </Col>
            <Col md={8}>
              <Text c='dimmed' weight={500}>Built</Text>
              <Group spacing={0}>
                <Text size={20} weight={600}>2017</Text>
              </Group>
            </Col>
            <Col md={8}>
              <Text c='dimmed' weight={500}>Parking</Text>
              <Group spacing={0}>
                <Text size={20} weight={600}>1 Indoor</Text>
              </Group>
            </Col>
          </Grid>
          <Grid columns={24}>
            <Col md={8}>
              <Text weight={600}>Description</Text>
            </Col>
            <Col md={16}>
              <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </Spoiler>
            </Col>
          </Grid>
        </Col>
        <Col md={10}>
          <Group position='center'>
            <Card w={300} withBorder p={16} radius={8}>
              <Group position="center" mb={8}>
                <Avatar alt="" src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4" size="lg" radius="xl" />
              </Group>
              <Text align="center">Sale Agent</Text>
              <Card.Section bg='slate.1' p={24} mt={8}>
                <Button fullWidth size="md" leftIcon={<IconPhoneFilled stroke={1.5} size={14} />}>Contact Agent</Button>
                <Divider my={16} />
                <Button fullWidth px={60} variant="outline">Buy</Button>
              </Card.Section>
            </Card>
          </Group>
        </Col>
      </Grid>
      <Space h={40} />
      {
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '400px'
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