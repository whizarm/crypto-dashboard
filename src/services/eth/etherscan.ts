import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query';
import {
  TransactionsData,
  TransactionsRequestParams,
} from 'services/types/transactions';
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

  return getUrlStrWithParams('', etherscanParams);
};

export const etherscanBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (...args) => {
  const res = await fetchBaseQuery({ baseUrl: BASE_URL })(...args);
  const data = res.data as TransactionsData;

  // "0" means error in etherscan api
  if (data.status === '0' && data.message !== 'No transactions found') {
    return {
      error: {
        status: 'CUSTOM_ERROR',
        error: data.result,
      },
    };
  }

  return res;
};
