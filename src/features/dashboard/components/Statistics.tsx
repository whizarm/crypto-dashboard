import { formatTokenAmount, formatUsdAmount } from 'utils';
import { useWalletInfo } from '../hooks/useWalletInfo';
import { Grid } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PaymentIcon from '@mui/icons-material/Payment';
import Statistic from './Statistic';
import { Card } from 'components/Card';

const Statistics = () => {
  const { isLoading, balances, network } = useWalletInfo();
  const { usd, nativeToken, totalIn, totalOut, totalTxs } = balances;
  const symbol = network?.nativeCurrency.symbol;
  const icon = network?.iconUrls[0];
  const networkName = network?.vanityName ?? network?.name;

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} sm={6} md={12} display="flex">
        <Card title={`${networkName ?? ''} overview`} sx={{ flexGrow: 1 }} />
      </Grid>

      <Statistic
        title="Native token balance"
        value={formatTokenAmount(nativeToken, symbol)}
        Icon={icon ?? ''}
        isLoading={isLoading}
      />
      <Statistic
        title="USD balance"
        value={formatUsdAmount(usd)}
        Icon={AccountBalanceIcon}
        isLoading={isLoading}
      />
      <Statistic
        title="Total inflows"
        value={formatTokenAmount(totalIn, symbol)}
        Icon={TrendingUpIcon}
        isLoading={isLoading}
      />
      <Statistic
        title="Total outflows"
        value={formatTokenAmount(totalOut, symbol)}
        Icon={TrendingDownIcon}
        isLoading={isLoading}
      />
      <Statistic
        title="Total transactions count"
        value={totalTxs}
        Icon={PaymentIcon}
        isLoading={isLoading}
      />
    </Grid>
  );
};

export default Statistics;
