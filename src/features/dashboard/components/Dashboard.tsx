import Grid from '@mui/material/Grid';
import { Card } from 'components/Card';
import Statistics from './Statistics';
import Wallets from './Wallets';
import Balances from './Balances';

const Dashboard = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={8}>
      <Card height={350} title="Statistics">
        <Statistics />
      </Card>
    </Grid>
    <Grid item xs={12} md={4}>
      <Card height={350} title="Connected wallets">
        <Wallets />
      </Card>
    </Grid>
    <Grid item xs={12}>
      <Card title="Assets">
        <Balances />
      </Card>
    </Grid>
  </Grid>
);

export default Dashboard;
