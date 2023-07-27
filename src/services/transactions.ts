import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  TransactionsData,
  TransactionsRequestParams,
} from './types/transactions';
import { getEtherscanUrl } from './api/ethereum';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https:' }),
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
        sort = 'asc',
      }: TransactionsRequestParams) => {
        const queryParams = { address, blockchain, page, offset, sort };
        switch (blockchain) {
          case 'Ethereum':
            return getEtherscanUrl(queryParams);
          default:
            throw new Error('This blockchain is not yet supported');
        }
      },
    }),
  }),
});

export const { useGetTransactionsByAddressAndNetworkQuery } = transactionsApi;
