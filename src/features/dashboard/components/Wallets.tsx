import { useDynamicContext } from '@dynamic-labs/sdk-react';
import { Box, Button } from '@mui/material';
import { CryptoAddressWithClipboard } from 'components/CryptoAddress';
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
            <CryptoAddressWithClipboard
              key={id}
              connectedChain={connectedChain}
            >
              {address}
            </CryptoAddressWithClipboard>
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
