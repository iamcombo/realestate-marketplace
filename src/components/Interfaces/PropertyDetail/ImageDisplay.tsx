import { Col, Grid, Image, Stack } from "@mantine/core";

const ImageDisplay = () => (
  <div>
    <Grid columns={24} mb={16} gutterMd={40}>
      <Col span={18}>
        <Image height={400} fit="cover" radius='sm' alt='' src='https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' /> 
      </Col>
      <Col span={6}>
        <Stack>
          <Image radius='sm' alt='' src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' />
          <Image radius='sm' alt='' src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
          {/* <Image radius='sm' alt='' src='https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' /> */}
        </Stack>
      </Col>
    </Grid>
  </div>
);

export default ImageDisplay;