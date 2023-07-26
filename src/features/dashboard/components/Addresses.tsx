import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const preventDefault = (event: React.MouseEvent) => {
  event.preventDefault();
};

const Addresses = () => {
  return (
    <>
      <Typography component="div" color="text.secondary" sx={{ flex: 1 }}>
        0x123124235233
        <br />
        0x99686859
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Add an address using wallet
        </Link>
      </div>
    </>
  );
};

export default Addresses;
