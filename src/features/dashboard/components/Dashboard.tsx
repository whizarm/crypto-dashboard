import Grid from '@mui/material/Grid';
import { useWalletInfo } from '../hooks/useWalletInfo';
import Statistics from './Statistics';
import Wallets from './Wallets';
import Balances from './Balances';

const Dashboard = () => {
  /*const {loading, error} = */ useWalletInfo();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Statistics />
      </Grid>

      <Grid item xs={12} md={8}>
        <Wallets />
      </Grid>

      <Grid item xs={12} order={3}>
        <Balances />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
