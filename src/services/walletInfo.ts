import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WalletInfoData, WalletInfoRequestParams } from './types/walletInfo';
import { getEthplorerWalletInfoUrl } from './eth/ethplorer';

export const walletInfoApi = createApi({
  reducerPath: 'walletInfoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https:' }),
  endpoints: (builder) => ({
    getWalletInfoByAddressAndNetwork: builder.query<
      WalletInfoData,
      WalletInfoRequestParams
    >({
      query: ({ address, blockchain }: WalletInfoRequestParams) => {
        const queryParams = { address, blockchain };
        switch (blockchain) {
          case 'Ethereum':
            return getEthplorerWalletInfoUrl(queryParams);
          default:
            throw new Error('This blockchain is not yet supported');
        }
      },
    }),
  }),
});

export const { useGetWalletInfoByAddressAndNetworkQuery } = walletInfoApi;
