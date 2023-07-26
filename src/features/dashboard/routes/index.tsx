import Dashboard from '../components/Dashboard';
import DashboardIcon from '@mui/icons-material/Dashboard';

const dashboardRoutes = [
  {
    path: '/dashboard',
    element: <Dashboard />,
    Icon: <DashboardIcon />,
    title: 'Dashboard',
  },
];

export default dashboardRoutes;
