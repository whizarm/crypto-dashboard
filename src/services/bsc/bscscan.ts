import {
  TransactionsData,
  TransactionsRequestParams,
} from 'services/types/transactions';
import { getUrlStrWithParams } from 'utils';

const BASE_URL = 'https://api.bscscan.com/api';

export const getBscscanUrl = (params: TransactionsRequestParams) => {
  const etherscanParams = {
    ...params,
    module: 'account',
    action: 'txlist',
    startblock: 0,
    endblock: 99999999,
    apikey: import.meta.env.VITE_BSCSCAN_API_KEY,
  };

  return getUrlStrWithParams(BASE_URL, etherscanParams);
};

export const handleBscscanResponse = (res: TransactionsData) => {
  // "0" means error in bscscan api
  if (res.status === '0' && res.message !== 'No transactions found') {
    throw new Error(res.result);
  }
};
