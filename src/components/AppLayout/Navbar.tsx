import logo from '@/assets/logo.png';
import {
  Container,
  Drawer,
  Group,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = ({
  opened,
  toggle,
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
    >
      {/* drawer content */}
      <Container>
        <Link href="/">
          <Group spacing={4}>
            <Image alt="" src={logo} height={55} />
            <Title order={4}>RealEstate INC.</Title>
          </Group>
        </Link>
        <Space h={24} />
        <Stack onClick={toggle}>
          <Link href="/buy">
            <Text fz={20} fw={isPath('/buy') ? 600 : 500}>
              Buy
            </Text>
          </Link>
          <Link href="/">
            <Text fz={20} fw={isPath('/rent') ? 600 : 500}>
              Rent
            </Text>
          </Link>
          <Link href="/">
            <Text fz={20} fw={isPath('/about') ? 600 : 500}>
              About
            </Text>
          </Link>
        </Stack>
      </Container>
    </Drawer>
  );
};

export default Navbar;
