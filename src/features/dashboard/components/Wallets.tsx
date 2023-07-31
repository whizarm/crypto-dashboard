import { useDynamicContext } from '@dynamic-labs/sdk-react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from '@mui/material';
import { CryptoAddressWithClipboard } from 'components/CryptoAddress';
import { Card } from 'components/Card';
import AddCardIcon from '@mui/icons-material/AddCard';

const Wallets = () => {
  const { connectedWallets, setShowDynamicUserProfile } = useDynamicContext();
  const openDynamicModal = () => setShowDynamicUserProfile(true);

  return (
    <Card
      sx={{
        height: {
          xs: 320,
          md: 608,
        },
      }}
      title="Connected wallets"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          overflowY: 'auto',
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ maxWidth: '550px', overflowY: 'visible' }}
        >
          <Table aria-label="Connected wallets table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell sx={{ textAlign: 'center' }}>
                  Blockchain type
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {connectedWallets.map(
                ({ address, connector: { connectedChain }, id }) => (
                  <TableRow key={id}>
                    <StyledTableCell align="right">
                      <CryptoAddressWithClipboard
                        sx={{ maxWidth: 'calc(75vw - 100px)' }}
                      >
                        {address}
                      </CryptoAddressWithClipboard>
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: 'center' }}>
                      {connectedChain}
                    </StyledTableCell>
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </TableContainer>
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
    </Card>
  );
};

const StyledTableCell = styled(TableCell)({
  padding: '8px',
  overflow: 'visible',
});

export default Wallets;
