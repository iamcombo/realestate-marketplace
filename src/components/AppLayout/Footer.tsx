import Image from "next/image";
import { ActionIcon, Box, Col, Container, Grid, Group, Stack, Text, Title } from "@mantine/core";
import logo from '@/assets/logo.png';
import { IconMailFilled, IconMapPinFilled, IconPhoneFilled } from "@tabler/icons-react";

const Footer = () => (
  <Box bg='slate.0'>
    <Container size={1280} py={40}>
      <Grid columns={24} align="center" justify="space-between">
        <Col span={8}>
          <Group spacing={8}>
            <Image alt='' src={logo} height={30} />
            <Title order={5} c='primary.7'>WARDIERE INC.</Title>
          </Group>
          <Text c='dimmed' mt={8}>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </Text>
        </Col>
        <Col span={8}>
          <Group position="center">
            <Stack spacing={8}>
              <Text weight={500}>Listing</Text>
              <Text weight={500}>About us</Text>
              <Text weight={500}>Contact us</Text>
              <Text weight={500}>Our Team</Text>
            </Stack>
          </Group>
        </Col>
        <Col span={8}>
          <Group position="center">
            <Stack spacing={8}>
              <Group spacing={4}>
                <ActionIcon>
                  <IconMapPinFilled />
                </ActionIcon>
                <Text weight={500}>
                  123 Anywhere Street, Any City, 12345 ST, Cambodia
                </Text>
              </Group>
              <Group spacing={4}>
                <ActionIcon>
                  <IconPhoneFilled />
                </ActionIcon>
                <Text weight={500}>+855 90 909 909</Text>
              </Group>
              <Group spacing={4}>
                <ActionIcon>
                  <IconMailFilled />
                </ActionIcon>
                <Text weight={500}>hello@myemail.com</Text>
              </Group>
            </Stack>
          </Group>
        </Col>
      </Grid>
    </Container>
  </Box>
);

export default Footer;