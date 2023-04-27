import CardFeature from '@/components/Cards/CardFeature';
import { useIsClient } from '@/hooks';
import { generateAddress } from '@/utils';
import {
  Avatar,
  Button,
  Card,
  Col,
  Container,
  Flex,
  Grid,
  Group,
  Space,
  Text,
} from '@mantine/core';
import { IconMapPinFilled } from '@tabler/icons-react';

const Profile = () => (
  <Container size={1280} my={40}>
    <Grid columns={24} gutterMd={40}>
      <Col md={6}>
        <Card radius={16} shadow="sm" p={24}>
          <Group position="center" mb={16}>
            <Avatar
              alt=""
              src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
              size="xl"
              radius={100}
            />
          </Group>
          <Text fw={800} align="center">
            Jonh Wick
          </Text>
          <Text fz={14} fw={600} c="orange" align="center">
            SALE AGENT
          </Text>
          <Flex justify="center" align="center" my={8}>
            <IconMapPinFilled size={14} />
            <Text ml={8} fz={10}>
              {useIsClient() && generateAddress()}
            </Text>
          </Flex>
          <Text fz={16} fw={600} align="center">
            25 Properties
          </Text>
          <Space h={16} />
          <Button fullWidth size="md" radius={8}>
            Contact
          </Button>
        </Card>
      </Col>
      <Col md={18}>
        <Text fw={800}>Properties</Text>
        <Space h={24} />
        <CardFeature />
        <Space h={16} />
        <CardFeature />
      </Col>
    </Grid>
  </Container>
);

export default Profile;
