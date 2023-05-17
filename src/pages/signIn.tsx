import { Card, Container, Group, Title } from '@mantine/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const signIn = () => {
  return (
    <Container size={520}>
      <Card radius={16} shadow="sm" p={24} withBorder>
        <Title order={3} align="center">
          Connect Wallet
        </Title>
        <Group position="center" mt={24}>
          <ConnectButton />
        </Group>
      </Card>
    </Container>
  );
};

export default signIn;
