import { DRAWER_WIDTH } from 'config';
import {
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  styled,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuItems from './MenuItems';

type Props = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

const MenuDrawer = ({ isOpen, toggleDrawer }: Props) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const drawerVariant = matchDownMd ? 'temporary' : 'permanent';

  return (
    <StyledDrawer variant={drawerVariant} open={isOpen} role="complementary">
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <MenuItems />
      </List>
    </StyledDrawer>
  );
};

type DrawerProps = {
  open: boolean;
};

const StyledDrawer = styled(MuiDrawer)<DrawerProps>(
  ({ theme: { breakpoints, spacing, transitions }, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: DRAWER_WIDTH,
      transition: transitions.create('width', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: transitions.create('width', {
          easing: transitions.easing.sharp,
          duration: transitions.duration.leavingScreen,
        }),
        width: spacing(7),
        [breakpoints.up('sm')]: {
          width: spacing(9),
        },
      }),
    },
  }),
);

export default MenuDrawer;
