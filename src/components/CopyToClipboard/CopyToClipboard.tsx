import { useState } from 'react';
import { Box, IconButton, Snackbar } from '@mui/material';
import { SNACKBAR_AUTOHIDE_TIME } from 'config';
import CopyAll from '@mui/icons-material/CopyAll';

type Props = {
  value: string;
};

export const CopyToClipboard = ({ value }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(value);
  };

  return (
    <>
      <IconButton onClick={handleClick} color="primary">
        <CopyAll />
      </IconButton>
      <Box sx={{ position: 'relative' }}>
        <Snackbar
          message={<span>Copied to clipboard</span>}
          autoHideDuration={SNACKBAR_AUTOHIDE_TIME}
          onClose={() => setOpen(false)}
          open={open}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{
            position: 'absolute',
            top: { xs: 18 },
            right: { xs: 0 },
            left: { xs: 0 },
            '& .MuiSnackbarContent-root': {
              minWidth: 'max-content',
              flexGrow: 0,
            },
          }}
        />
      </Box>
    </>
  );
};
