import { Box, SxProps } from '@mui/material';
import { CryptoAddress } from 'components/CryptoAddress';
import { CopyToClipboard } from 'components/CopyToClipboard';

type Props = {
  children: string;
  sx?: SxProps;
};

export const CryptoAddressWithClipboard = ({ children, sx }: Props) => (
  <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
    <CryptoAddress>{children}</CryptoAddress>
    <CopyToClipboard value={children} />
  </Box>
);
