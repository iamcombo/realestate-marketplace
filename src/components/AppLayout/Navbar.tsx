import { Container, Drawer, Group, Space, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/logo.png';
import { useRouter } from "next/router";

const Navbar = ({
  opened,
  toggle
}: {
  opened: boolean;
  toggle: () => void; 
}) => {
  const { asPath } = useRouter();
  const isPath = (path: string) => path === asPath;

  return (
    <Drawer
      opened={opened}
      onClose={toggle}
      transitionProps={{ transition: 'slide-right', duration: 250 }}
      // withCloseButton={false}
    >
      {/* drawer content */}
      <Container>
        <Link href='/'>
          <Group spacing={4}>
            <Image alt='' src={logo} height={55} />
            <Title order={4}>RealEstate INC.</Title>
          </Group>
        </Link>
        <Space h={24} />
        <Stack>
          <Link href='/buy'>
            <Text fz={20} fw={isPath('/buy') ? 600 : 500}>Buy</Text>
          </Link>
          <Link href='/listing/selectType'>
            <Text fz={20} fw={isPath('/listing') ? 600 : 500}>Sell</Text>
          </Link>
          <Link href='/'>
            <Text fz={20} fw={isPath('/rent') ? 600 : 500}>Rent</Text>
          </Link>
          <Link href='/'>
            <Text fz={20} fw={isPath('/about') ? 600 : 500}>About</Text>
          </Link>
        </Stack>
      </Container>
    </Drawer>
  );
};

export default Navbar;