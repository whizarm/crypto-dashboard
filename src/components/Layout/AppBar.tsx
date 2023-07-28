import { DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react';
import { DRAWER_WIDTH } from 'config';
import { useCurrentRoute } from 'hooks';
import {
  AppBar as MuiAppBar,
  Box,
  Grid,
  IconButton,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

type Props = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

const AppBar = ({ isOpen, toggleDrawer }: Props) => {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const currentRoute = useCurrentRoute();
  const { isAuthenticated, setShowDynamicUserProfile } = useDynamicContext();

  const openLoginModal = () => setShowDynamicUserProfile(true);

  return (
    <StyledAppBar position="absolute" open={isOpen}>
      <Toolbar
        sx={{
          pr: '24px',
          pt: '12px',
          pb: '12px',
        }}
      >
        <Grid
          container
          rowSpacing={1}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={8}>
            <Box display="flex" alignItems="center">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: { xs: '24px', sm: '36px' },
                  ...(isOpen && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                {currentRoute?.title ?? ''}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              display={isAuthenticated && onlySmallScreen ? 'none' : 'flex'}
              justifyContent="end"
              alignItems="center"
            >
              <DynamicWidget
                innerButtonComponent={onlySmallScreen ? 'Connect' : undefined}
              />
            </Box>
            {isAuthenticated && onlySmallScreen && (
              <Box display="flex" justifyContent="end" alignItems="center">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open login modal"
                  size="small"
                  onClick={openLoginModal}
                >
                  <AccountCircle />
                </IconButton>
              </Box>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

type AppBarProps = {
  open: boolean;
};

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme: { transitions, zIndex }, open }) => ({
  zIndex: zIndex.drawer + (open ? -1 : 1),
  transition: transitions.create(['width', 'margin'], {
    easing: transitions.easing.sharp,
    duration: transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  }),
}));

export default AppBar;
