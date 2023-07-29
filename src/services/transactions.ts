import { createApi } from '@reduxjs/toolkit/query/react';
import {
  TransactionsData,
  TransactionsRequestParams,
} from './types/transactions';
import { etherscanBaseQuery, getEtherscanUrl } from './eth/etherscan';
import { getBscscanUrl } from './bsc/bscscan';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: etherscanBaseQuery,
  endpoints: (builder) => ({
    getTransactionsByAddressAndNetwork: builder.query<
      TransactionsData,
      TransactionsRequestParams
    >({
      query: ({
        address,
        blockchain,
        page = 1,
        offset = 10,
        sort = 'desc',
      }: TransactionsRequestParams) => {
        const queryParams = { address, blockchain, page, offset, sort };
        switch (blockchain) {
          case 'Ethereum':
            return getEtherscanUrl(queryParams);
          case 'BNB Smart Chain':
            return getBscscanUrl(queryParams);
          default:
            throw new Error('This blockchain is not yet supported');
        }
      },
    }),
  }),
});

export const { useGetTransactionsByAddressAndNetworkQuery } = transactionsApi;
