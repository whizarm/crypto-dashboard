import { useState } from 'react';
import { Box, Container, CssBaseline, Toolbar } from '@mui/material';
import AppBar from './AppBar';
import MenuDrawer from './MenuDrawer';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <MenuDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};
