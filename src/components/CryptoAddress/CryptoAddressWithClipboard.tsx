import { Box, SxProps, Typography } from '@mui/material';
import { CryptoAddress } from 'components/CryptoAddress';
import { CopyToClipboard } from 'components/CopyToClipboard';

type Props = {
  children: string;
  connectedChain?: string;
  sx?: SxProps;
};

export const CryptoAddressWithClipboard = ({
  children,
  connectedChain,
  sx,
}: Props) => (
  <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
    {!!connectedChain && (
      <>
        <Typography component="span" color="text.secondary">
          [{connectedChain}]
        </Typography>
        &nbsp;
      </>
    )}

    <CryptoAddress>{children}</CryptoAddress>
    <CopyToClipboard value={children} />
  </Box>
);
