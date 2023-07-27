import { WalletInfoRequestParams } from 'services/types/walletInfo';
import { getUrlStrWithParams } from 'utils';

const BASE_URL = 'https://api.ethplorer.io';
const GET_WALLET_INFO = '/getAddressInfo/';

export const getEthplorerWalletInfoUrl = ({
  address,
}: WalletInfoRequestParams) => {
  const ethplorerParams = {
    apiKey: import.meta.env.VITE_ETHPLORER_API_KEY,
  };

  const URL = BASE_URL.concat(GET_WALLET_INFO, '/', address);

  return getUrlStrWithParams(URL, ethplorerParams);
};
