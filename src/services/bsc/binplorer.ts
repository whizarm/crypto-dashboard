import { WalletRequestParams } from 'services/types/wallets';
import { getUrlStrWithParams } from 'utils';

const BASE_URL = 'https://api.binplorer.com';
const GET_WALLET_INFO = '/getAddressInfo/';

export const getBinplorerWalletInfoUrl = ({ address }: WalletRequestParams) => {
  const binplorerParams = {
    showETHTotals: 'true',
    showTxsCount: 'true',
    apiKey: import.meta.env.VITE_ETHPLORER_API_KEY,
  };

  const URL = BASE_URL.concat(GET_WALLET_INFO, address);

  return getUrlStrWithParams(URL, binplorerParams);
};
