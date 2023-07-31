import { Wallet, WalletsData, WalletsHookParams } from './types/wallets';
import { getEthplorerWalletInfoUrl } from './eth/ethplorer';
import { getBinplorerWalletInfoUrl } from './bsc/binplorer';

const isPromiseFilled = <T extends object>(
  v: PromiseSettledResult<T>,
): v is PromiseFulfilledResult<T> => v.status === 'fulfilled';

export const getWalletsData = async (urls: string[]) => {
  const requestPromises = urls.map((url) => fetch(url));
  const results = await Promise.allSettled(requestPromises);

  const data = await Promise.all(
    results.map(
      async (r): Promise<Wallet | undefined> =>
        isPromiseFilled(r) ? await r.value.json() : undefined,
    ),
  );

  return data;
};

const getBlockchainApi = ({ blockchain, addresses }: WalletsHookParams) => {
  switch (blockchain) {
    case 'Ethereum':
      return {
        requests: addresses.map((address) =>
          getEthplorerWalletInfoUrl({ address, blockchain }),
        ),
      };
    case 'BNB Smart Chain':
      return {
        requests: addresses.map((address) =>
          getBinplorerWalletInfoUrl({ address, blockchain }),
        ),
      };
    default:
      throw new Error('This blockchain is not yet supported');
  }
};

export const getWalletsByAddressesAndNetwork = (
  params: WalletsHookParams,
): Promise<WalletsData> => {
  const { requests } = getBlockchainApi(params);
  return getWalletsData(requests);
};

// export const walletInfoApi = {
//   // export const walletInfoApi = createApi({
//   //   reducerPath: 'walletInfoApi',
//   //   baseQuery: fetchBaseQuery({ baseUrl: 'https:' }),
//   //   endpoints: (builder) => ({
//   getWalletInfoByAddressAndNetwork: () => {},
//   getWalletInfoByAddressAndNetwork: builder.query<
//       WalletInfoData,
//       WalletInfoHookParams
//     >({
//       queryFn: async (
//         { addresses, blockchain }: WalletInfoHookParams,
//         _api,
//         _extraOptions,
//         fetchWithBQ,
//       ) => {
//         const getUrl = (queryParams: WalletInfoRequestParams) => {
//           switch (queryParams.blockchain) {
//             case 'Ethereum':
//               return getEthplorerWalletInfoUrl(queryParams);
//             case 'BNB Smart Chain':
//               return getBinplorerWalletInfoUrl(queryParams);
//             default:
//               throw new Error('This blockchain is not yet supported');
//           }
//         };

//         const requestPromises = addresses.map((address) =>
//           fetchWithBQ(getUrl({ address, blockchain })),
//         );
//         const results = await Promise.allSettled(requestPromises);

//         return {
//           data: results.map((r) =>
//             r.status === 'fulfilled' ? r?.value.data : {},
//           ) as WalletInfoData,
//         };
//       },
//     }),
//   }),
// };

// // export const { useGetWalletInfoByAddressAndNetworkQuery } = walletInfoApi;
