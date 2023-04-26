import { useState } from "react";
import { Button, Col, Container, Drawer, Grid, Image, Paper, Stack, Tabs } from "@mantine/core";
import { IconPhoto, Icon360View, IconBadgeHd, IconSquareRotatedForbid } from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";
import CarouselWithThumnail from "@/components/CarouselWithThumnail";

const ImageDisplay = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Grid columns={24} mb={16} gutterMd={40}>
        <Col span={18}>
          <Paper sx={{ position: 'relative' }} withBorder>
            <Image height={400} fit="cover" radius='sm' alt='' src='https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' /> 
            <Button onClick={() => setOpened(true)} size="md" variant="white" color="dark" m={16} sx={{ position: 'absolute', top: 0 }}>View all</Button>
          </Paper>
        </Col>
        <Col span={6}>
          <Stack>
            <Image radius='sm' alt='' src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' />
            <Image radius='sm' alt='' src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
            {/* <Image radius='sm' alt='' src='https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' /> */}
          </Stack>
        </Col>
      </Grid>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title=""
        overlayProps={{ opacity: 0.5, blur: 4 }}
        position="bottom"
        size='100%'
      >
        <Container size={1280}>
          <Tabs defaultValue="gallery">
            <Tabs.List>
              <Tabs.Tab value="gallery" icon={<IconPhoto size="0.8rem" />}>Gallery</Tabs.Tab>
              <Tabs.Tab value="360" icon={<Icon360View size="0.8rem" />}>360</Tabs.Tab>
              <Tabs.Tab value="floor" icon={<IconSquareRotatedForbid size="0.8rem" />}>Floor</Tabs.Tab>
              <Tabs.Tab value="video" icon={<IconBadgeHd />}>Video</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pt="xs">
              <CarouselWithThumnail />
            </Tabs.Panel>

            <Tabs.Panel value="360" pt="xs">
              360 tab content
            </Tabs.Panel>

            <Tabs.Panel value="floor" pt="xs">
              Floor tab content
            </Tabs.Panel>

            <Tabs.Panel value="video" pt="xs">
              Video tab content
            </Tabs.Panel>
          </Tabs>
        </Container>
      </Drawer>
    </div>
  );
};

export default ImageDisplay;