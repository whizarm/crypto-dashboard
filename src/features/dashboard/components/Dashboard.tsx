import Grid from '@mui/material/Grid';
import { Card } from 'components/Card';
import Statistics from './Statistics';
import Addresses from './Addresses';
import Balances from './Balances';

const Dashboard = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={8} lg={9}>
      <Card height={240} title="Statistics">
        <Statistics />
      </Card>
    </Grid>
    <Grid item xs={12} md={4} lg={3}>
      <Card height={240} title="Addresses">
        <Addresses />
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
