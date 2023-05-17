/* eslint-disable react/no-unknown-property */
import CarouselWithThumnail from '@/components/CarouselWithThumnail';
import {
  Button,
  Card,
  Col,
  Container,
  Drawer,
  Grid,
  Image,
  MediaQuery,
  Paper,
  SimpleGrid,
  Stack,
  Tabs,
} from '@mantine/core';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import {
  Icon360View,
  IconBadgeHd,
  IconPhoto,
  IconSquareRotatedForbid,
} from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState } from 'react';

import('aframe');

const ThreeDModel = dynamic(() => import('./3dModel'), { ssr: false });

const ImageDisplay = () => {
  const [opened, setOpened] = useState(false);
  const [tab, setTab] = useState<string | null>('');

  useEffect(() => {
    function initTour() {
      // Set up the 360-degree panorama image
      const panoImg = document.querySelector('#pano');
      if (!panoImg) return;
      panoImg.onload = () => {
        const sky = document.querySelector('a-sky');
        sky.setAttribute('src', '#pano');
      };

      // const container = document.querySelector("#myEmbeddedScene");
      // if (tab === "360") {
      //   container.style.padding = "100px";
      // } else {
      //   container.style.display = "block";
      // }
    }
    initTour();
  }, [tab]);

  return (
    <>
      <Grid columns={24} mb={16} gutterMd={40}>
        <Col span={24} sm={18} md={18}>
          <Paper sx={{ position: 'relative' }} withBorder>
            <Image
              height={400}
              fit="cover"
              radius="sm"
              alt=""
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
            />
            <Button
              onClick={() => setOpened(true)}
              size="md"
              variant="white"
              color="dark"
              m={16}
              sx={{ position: 'absolute', top: 0 }}
            >
              View all
            </Button>
          </Paper>
        </Col>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Col span={6} md={6}>
            <Stack>
              <Image
                radius="sm"
                alt=""
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              />
              <Image
                radius="sm"
                alt=""
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </Stack>
          </Col>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Col span={24}>
            <SimpleGrid cols={2}>
              <Image
                radius="sm"
                alt=""
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                height={80}
              />
              <Image
                radius="sm"
                alt=""
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                height={80}
              />
            </SimpleGrid>
          </Col>
        </MediaQuery>
      </Grid>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title=""
        overlayProps={{ opacity: 0.5, blur: 4 }}
        position="bottom"
        size="100%"
        transitionProps={{
          transition: 'slide-up',
          duration: 250,
          timingFunction: 'linear',
        }}
      >
        <Container size={1280}>
          <Tabs defaultValue="gallery" onTabChange={(v) => setTab(v)}>
            <Tabs.List>
              <Tabs.Tab
                value="gallery"
                icon={<IconPhoto size="0.8rem" stroke={1.5} />}
              >
                Gallery
              </Tabs.Tab>
              <Tabs.Tab
                value="360"
                icon={<Icon360View size="0.8rem" stroke={1.5} />}
              >
                360
              </Tabs.Tab>
              <Tabs.Tab
                value="floor"
                icon={<IconSquareRotatedForbid size="0.8rem" stroke={1.5} />}
              >
                3D
              </Tabs.Tab>
              <Tabs.Tab
                value="video"
                icon={<IconBadgeHd size="0.8rem" stroke={1.5} />}
              >
                Video
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pt="xs">
              <CarouselWithThumnail />
            </Tabs.Panel>

            <Tabs.Panel value="360" pt="xs">
              <Card withBorder radius={16} p={0} sx={{ display: 'block' }}>
                <div id="myEmbeddedScene">
                  <a-scene
                    embedded="true"
                    style={{ width: '100%', height: '600px' }}
                  >
                    <a-assets timeout="10000">
                      <img
                        crossOrigin="anonymous"
                        alt=""
                        id="pano"
                        src="../pano.jpg"
                      />
                    </a-assets>

                    <a-sky src="#pano" />

                    <a-entity>
                      <a-camera wasd-controls="acceleration: 1000; fly: true;" />
                    </a-entity>
                  </a-scene>
                </div>
              </Card>
            </Tabs.Panel>

            <Tabs.Panel value="floor" pt="xs">
              <Card withBorder radius={16} bg="slate.2">
                {/* <a-scene> */}
                <Suspense fallback={<span>loading...</span>}>
                  <Canvas
                    style={{ height: '70vh' }}
                    frameloop="demand"
                    shadows
                    camera={{ position: [0, 0, 10] }}
                  >
                    <OrbitControls
                      makeDefault
                      minPolarAngle={Math.PI / 2}
                      maxPolarAngle={Math.PI / 2}
                    />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[20, 30, 10]} intensity={1} />
                    <pointLight position={[-10, -10, -10]} color="blue" />
                    <PerspectiveCamera makeDefault position={[0, 0, 200]} />
                    <ThreeDModel />
                  </Canvas>
                </Suspense>
                {/* </a-scene> */}
              </Card>
            </Tabs.Panel>

            <Tabs.Panel value="video" pt="xs">
              <iframe
                width="100%"
                height="720px"
                src="https://www.youtube.com/embed/YVT7fN6hFcY"
                title="YouTube video player"
                allow="
                  accelerometer;
                  clipboard-write; 
                  encrypted-media; 
                  gyroscope; 
                  picture-in-picture; 
                  web-share
                "
                allowFullScreen
              />
            </Tabs.Panel>
          </Tabs>
        </Container>
      </Drawer>
    </>
  );
};

export default ImageDisplay;
