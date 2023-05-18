import { PropertyInfo } from '@/components';
import ImageDisplay from '@/components/Interfaces/PropertyDetail/ImageDisplay';
import { ModalConfirmation } from '@/components/Modal';
import { ESTATE_CONTRACT } from '@/constants/contracts';
import useAsync from '@/hooks/useAsync';
import connectContract from '@/utils/connectContract';
import {
  Button,
  Card,
  Col,
  Container,
  Divider,
  Grid,
  Group,
  Space,
  Text,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { notifications } from '@mantine/notifications';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import {
  IconDots,
  IconHeart,
  IconMapPinFilled,
  IconShare3,
} from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { parseEther } from 'viem';
import { useAccount } from 'wagmi';

const center = {
  lat: 11.5564,
  lng: 104.9282,
};

interface IMintData {
  lister: string;
  price: string;
  uri: string;
  nonce: string;
  signature: string;
}

const PropertyDetail = ({ data }: { data: IMintData[] }) => {
  const { address } = useAccount();
  const { query } = useRouter();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: '',
  });

  const [modalConfirm, setModalConfirm] = useState(false);
  const [map, setMap] = useState<any>(null);

  const onLoad = useCallback(() => {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    if (!map) return;
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const Sale = () => {
    const { Contract } = connectContract(
      ESTATE_CONTRACT.ADDRESS,
      ESTATE_CONTRACT.ABI
    );

    if (!Contract) return;
    if (!query.id) return;
    const id = +query.id;

    return Contract.sale(
      address,
      data[+id].lister,
      data[+id].price,
      data[+id].uri,
      data[+id].nonce,
      data[+id].signature,
      {
        value: parseEther(data[+id].price as unknown as `${number}`),
      }
    );
  };

  const { execute: handleSale, status } = useAsync(
    Sale,
    async (trx) => {
      notifications.show({
        id: 'load-data',
        loading: true,
        title: 'Transaction in progress',
        message: 'Transaction will be completed in seconds.',
        autoClose: false,
        withCloseButton: false,
        radius: 'md',
      });
      await trx.wait();
      notifications.update({
        id: 'load-data',
        title: 'Successfully',
        message: 'Transaction Completed',
        radius: 'md',
      });
      setModalConfirm(false);
    },
    (err) => {
      notifications.show({
        title: 'Transaction failed',
        message: err?.reason,
        color: 'red',
        radius: 'md',
      });
      setModalConfirm(false);
    },
    false
  );

  // const { config } = usePrepareContractWrite({
  //   address: ESTATE_CONTRACT.ADDRESS,
  //   abi: ESTATE_CONTRACT.ABI,
  //   functionName: 'sale',
  //   args: [
  //     address,
  //     data[+id].lister,
  //     data[+id].price,
  //     data[+id].uri,
  //     data[+id].nonce,
  //     data[+id].signature,
  //   ],
  //   from: address,
  //   value: parseEther(data[+id].price as `${number}`),
  // });

  // const { status, write } = useContractWrite(config);

  // console.log(
  //   address,
  //   '\n',
  //   data[+id].lister,
  //   '\n',
  //   data[+id].price,
  //   '\n',
  //   data[+id].uri,
  //   '\n',
  //   data[+id].nonce,
  //   '\n',
  //   data[+id].signature
  // );

  // const handleSale = async () => {
  //   try {
  //     const { Contract } = connectContract(
  //       ESTATE_CONTRACT.ADDRESS,
  //       ESTATE_CONTRACT.ABI
  //     );
  //     if (!Contract) return;
  //     const trx = await Contract.sale(
  //       address,
  //       data[+id].lister,
  //       data[+id].price,
  //       data[+id].uri,
  //       data[+id].nonce,
  //       data[+id].signature,
  //       { value: utils.parseEther(data[+id].price) }
  //     );
  //   } catch (error: any) {
  //     console.log(error?.reason);
  //   }
  // };

  return (
    <Container size={1280} my={40}>
      <ImageDisplay />
      <Grid columns={24} gutter={40} justify="space-between">
        <Col md={18}>
          <Group position="apart" align="start">
            <div>
              <Text weight={600} size={32}>
                565 Broome Str, NY
              </Text>
              <Group align="center" spacing={4}>
                <IconMapPinFilled fill="gray" />
                <Text>Williamsbridge, Bronx</Text>
              </Group>
            </div>
            <Group mt={16}>
              <IconHeart stroke={1.5} color="blue" />
              <IconShare3 stroke={1.5} color="blue" />
              <IconDots stroke={1.5} color="blue" />
            </Group>
          </Group>
          <Divider my={24} />
          <PropertyInfo />
        </Col>
        <Col md={6}>
          <Card withBorder radius={16} sx={{ position: 'initial' }}>
            <Text color="dimmed">Price</Text>
            <Text fz={24} weight={800} c="primary.6">
              {query.id && data[+query.id].price} ETH
            </Text>
            <Button
              fullWidth
              size="md"
              mt={24}
              radius={8}
              loading={status === 'pending'}
              onClick={() => setModalConfirm(true)}
            >
              Apply now
            </Button>
            <Divider my={16} />
            <Text weight={600} mb={8}>
              Request a tour
            </Text>
            <DateInput placeholder="Pick date and time" size="md" radius={8} />
            <Button fullWidth variant="outline" size="md" radius={8} my={16}>
              Book a tour
            </Button>
            <Text weight="lighter" fz={12}>
              * It is free with no obligation - cancel anytime
            </Text>
          </Card>
          {/* <Text my={16} c='dimmed'>Price History</Text>
          <Bar
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: true,
                  text: 'Chart.js Bar Chart'
                },
              }}
            }
            data={data}
          /> */}
        </Col>
      </Grid>
      <Space h={40} />
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '400px',
            borderRadius: '16px',
          }}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div />
      )}

      <ModalConfirmation
        modal={modalConfirm}
        setModal={setModalConfirm}
        status={status}
        callbackFn={handleSale}
      />
    </Container>
  );
};

export default PropertyDetail;

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/storage', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
};
