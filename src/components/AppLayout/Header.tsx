import { 
  Avatar,
  Col,
  Container,
  Grid,
  Group,
  Header,
  MediaQuery,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { IconBell } from "@tabler/icons-react";
import logo from '@/assets/logo.png';
import { useRouter } from "next/router";

const HeaderComponent = () => {
  const { asPath } = useRouter();
  const isPath = (path: string) => path === asPath;

  return (
    <Header
      height={60}
      withBorder
    >
      <Container size={1280}>
        <Grid columns={24} align="center" justify="space-between" h={70}>
          <Col span={8}>
            <Link href='/'>
              <Group spacing={4}>
                <Image alt='' src={logo} height={55} />
                <Title order={4}>RealEstate INC.</Title>
              </Group>
            </Link>
          </Col>
          <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
            <Col md={8}>
              <Group position="center" spacing={24}>
                <Link href='/buy'>
                  <Text fz={16} fw={isPath('/buy') ? 800 : 500}>Buy</Text>
                </Link>
                <Link href='/listing/selectType'>
                  <Text fz={16} fw={isPath('/listing') ? 600 : 500}>Sell</Text>
                </Link>
                <Link href='/'>
                  <Text fz={16} fw={isPath('/rent') ? 600 : 500}>Rent</Text>
                </Link>
                <Link href='/'>
                  <Text fz={16} fw={isPath('/about') ? 600 : 500}>About</Text>
                </Link>
              </Group>
            </Col>
          </MediaQuery>
          <Col span={12} md={8}>
            <Group position="right">
              <IconBell stroke={1.5} />
              <Link href='/profile'>
                <Avatar radius='xl' src='https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4' />
              </Link>
            </Group>
          </Col>
        </Grid>
      </Container>
    </Header>
  );
};
  

export default HeaderComponent;