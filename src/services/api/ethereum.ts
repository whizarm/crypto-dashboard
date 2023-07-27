import { TransactionsRequestParams } from 'services/types/transactions';
import { getUrlStrWithParams } from 'utils';

const BASE_URL = 'https://api.etherscan.io/api';

export const getEtherscanUrl = (params: TransactionsRequestParams) => {
  const etherscanParams = {
    ...params,
    module: 'account',
    action: 'txlist',
    startblock: 0,
    endblock: 99999999,
    apikey: import.meta.env.VITE_ETHERSCAN_API_KEY,
  };

  return getUrlStrWithParams(BASE_URL, etherscanParams);
};
