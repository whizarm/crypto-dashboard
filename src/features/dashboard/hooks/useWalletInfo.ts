import { useDynamicContext } from '@dynamic-labs/sdk-react';
import {
  useGetWalletInfoByAddressAndNetworkQuery,
  WalletInfoHookParams,
} from 'services';
import { getNetworkTotals } from '../utils/getNetworkTotals';
import { useConnectedBlockchain } from 'hooks';

export const useWalletInfo = () => {
  const { connectedWallets } = useDynamicContext();
  const network = useConnectedBlockchain();

  const requestParams: WalletInfoHookParams = {
    addresses: connectedWallets?.map((w) => w.address) ?? [],
    blockchain: network?.vanityName ?? network?.name ?? '',
  };

  const { data, error, isLoading } = useGetWalletInfoByAddressAndNetworkQuery(
    requestParams,
    {
      skip: !requestParams.addresses.length || !requestParams.blockchain,
    },
  );

  return {
    data,
    error,
    isLoading,
    network,
    balances: getNetworkTotals(!error ? data : undefined),
  };
};
