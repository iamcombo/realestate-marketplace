import { Card, Container, Title } from "@mantine/core";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Connect = () => {
  return (
    <Container size={1280} my={40}>
      <Card radius={16} shadow="sm" p={40}>
        <Title order={3} mb={16}>Connect Wallet</Title>
        <ConnectButton />
      </Card>
    </Container>
  );
};

export default Connect;