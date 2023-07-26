import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, CssBaseline, Toolbar } from '@mui/material';
import AppBar from './AppBar';
import MenuDrawer from './MenuDrawer';

export const Layout = () => {
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
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
