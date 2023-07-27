import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  WalletInfoData,
  WalletInfoHookParams,
  WalletInfoRequestParams,
} from './types/walletInfo';
import { getEthplorerWalletInfoUrl } from './eth/ethplorer';

export const walletInfoApi = createApi({
  reducerPath: 'walletInfoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https:' }),
  endpoints: (builder) => ({
    getWalletInfoByAddressAndNetwork: builder.query<
      WalletInfoData,
      WalletInfoHookParams
    >({
      queryFn: async (
        { addresses, blockchain }: WalletInfoHookParams,
        _api,
        _extraOptions,
        fetchWithBQ,
      ) => {
        const getUrl = (queryParams: WalletInfoRequestParams) => {
          switch (queryParams.blockchain) {
            case 'Ethereum':
              return getEthplorerWalletInfoUrl(queryParams);
            default:
              throw new Error('This blockchain is not yet supported');
          }
        };

        const requestPromises = addresses.map((address) =>
          fetchWithBQ(getUrl({ address, blockchain })),
        );
        const results = await Promise.allSettled(requestPromises);

        return {
          data: results.map((r) =>
            r.status === 'fulfilled' ? r?.value.data : {},
          ) as WalletInfoData,
        };
      },
    }),
  }),
});

export const { useGetWalletInfoByAddressAndNetworkQuery } = walletInfoApi;
