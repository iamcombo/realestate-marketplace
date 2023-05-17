import logo from '@/assets/logo.png';
import {
  Avatar,
  Burger,
  Col,
  Container,
  Grid,
  Group,
  Header,
  MediaQuery,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBell } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Navbar from './Navbar';

const HeaderComponent = () => {
  const { asPath } = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const isPath = (path: string) => path === asPath;
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <Header height={60} withBorder>
      <Container size={1280}>
        <Grid columns={24} align="center" justify="space-between" h={70}>
          <Col span={8}>
            <Link href="/">
              <Group spacing={4}>
                <Image alt="" src={logo} height={55} />
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                  <Title order={4}>RealEstate INC.</Title>
                </MediaQuery>
              </Group>
            </Link>
          </Col>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Col span={12} md={8}>
              <Group position="center" spacing={24}>
                <Link href="/buy">
                  <Text fz={16} fw={isPath('/buy') ? 800 : 500}>
                    Buy
                  </Text>
                </Link>
                <Link href="/listing/selectType">
                  <Text fz={16} fw={isPath('/listing') ? 600 : 500}>
                    Sell
                  </Text>
                </Link>
                <Link href="/">
                  <Text fz={16} fw={isPath('/rent') ? 600 : 500}>
                    Rent
                  </Text>
                </Link>
                <Link href="/">
                  <Text fz={16} fw={isPath('/about') ? 600 : 500}>
                    About
                  </Text>
                </Link>
              </Group>
            </Col>
          </MediaQuery>
          <Col span={12} sm={4} md={8}>
            <Group position="right">
              <IconBell stroke={1.5} />
              <Link href="/profile">
                <Avatar
                  radius="xl"
                  src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                />
              </Link>
            </Group>
          </Col>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Col span={4}>
              <Burger
                opened={opened}
                onClick={toggle}
                aria-label={label}
                size={20}
              />
            </Col>
          </MediaQuery>
        </Grid>
      </Container>
      <Navbar opened={opened} toggle={toggle} />
    </Header>
  );
};

export default HeaderComponent;
