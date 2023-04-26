import { 
  Avatar,
  Col,
  Container,
  Grid,
  Group,
  Header,
  MediaQuery,
  Text,
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
              <Image alt='' src={logo} height={30} />
            </Link>
          </Col>
          <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
            <Col md={8}>
              <Group position="center">
                <Link href='/'>
                  <Text weight={isPath('/') ? 600 : 500}>Home</Text>
                </Link>
                <Link href='/'>
                  <Text weight={500}>Buy</Text>
                </Link>
                <Link href='/listing/selectType'>
                  <Text weight={isPath('/listing') ? 600 : 500}>Sell</Text>
                </Link>
                <Link href='/'>
                  <Text weight={500}>Rent</Text>
                </Link>
                <Link href='/'>
                  <Text weight={500}>Contact</Text>
                </Link>
              </Group>
            </Col>
          </MediaQuery>
          <Col span={12} md={8}>
            <Group position="right">
              <IconBell stroke={1.5} />
              <Avatar radius='xl' src='https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4' />
            </Group>
          </Col>
        </Grid>
      </Container>
    </Header>
  );
};
  

export default HeaderComponent;