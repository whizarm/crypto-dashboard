import { useDynamicContext } from '@dynamic-labs/sdk-react';
import { Box, Button, Typography } from '@mui/material';
import { CopyToClipboard } from 'components/CopyToClipboard';
import { CryptoAddress } from 'components/CryptoAddress';
import AddCardIcon from '@mui/icons-material/AddCard';

const Wallets = () => {
  const { connectedWallets, setShowDynamicUserProfile } = useDynamicContext();
  const openDynamicModal = () => setShowDynamicUserProfile(true);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          overflowY: 'auto',
        }}
      >
        {connectedWallets.map(
          ({ address, connector: { connectedChain }, id }) => (
            <Box key={id} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography component="span" color="text.secondary">
                [{connectedChain}]
              </Typography>
              &nbsp;
              <CryptoAddress>{address}</CryptoAddress>
              <CopyToClipboard value={address} />
            </Box>
          ),
        )}
      </Box>

      <Box sx={{ display: 'flex', flexGrow: 0, alignItems: 'end' }}>
        <Button
          variant="text"
          startIcon={<AddCardIcon />}
          onClick={openDynamicModal}
        >
          Link another wallet
        </Button>
      </Box>
    </>
  );
};

export default Wallets;
