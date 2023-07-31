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
