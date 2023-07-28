import Grid from '@mui/material/Grid';
import { useWalletInfo } from '../hooks/useWalletInfo';
import Statistics from './Statistics';
import Wallets from './Wallets';

const Dashboard = () => {
  useWalletInfo();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Statistics />
      </Grid>

      <Grid item xs={12} md={8}>
        <Wallets />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
