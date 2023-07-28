import { DynamicWidget } from '@dynamic-labs/sdk-react';
import { Box, Divider, Typography } from '@mui/material';
import { Card } from 'components/Card';

const Login = () => (
  <Card title="Welcome!" sx={{ width: '100%', pb: 4 }}>
    <Typography>
      To use this app you need to sign in using a web3 wallet.
      <br />
      Then, you&#39;ll be able to use your wallet to add multiple addresses
      (even from different blockchains) to this app and see up-to-date
      information about them anytime you login.
    </Typography>
    <Divider sx={{ mt: 2, mb: 2 }} />
    <Box display="flex" justifyContent="center">
      <DynamicWidget />
    </Box>
  </Card>
);

export default Login;
