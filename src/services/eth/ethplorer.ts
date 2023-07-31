import { WalletRequestParams } from 'services/types/wallets';
import { getUrlStrWithParams } from 'utils';

const BASE_URL = 'https://api.ethplorer.io';
const GET_WALLET_INFO = '/getAddressInfo/';

export const getEthplorerWalletInfoUrl = ({ address }: WalletRequestParams) => {
  const ethplorerParams = {
    showETHTotals: 'true',
    showTxsCount: 'true',
    apiKey: import.meta.env.VITE_ETHPLORER_API_KEY,
  };

  const URL = BASE_URL.concat(GET_WALLET_INFO, address);

  return getUrlStrWithParams(URL, ethplorerParams);
};
