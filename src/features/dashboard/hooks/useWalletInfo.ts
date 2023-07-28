import { useDynamicContext } from '@dynamic-labs/sdk-react';
import {
  useGetWalletInfoByAddressAndNetworkQuery,
  WalletInfoHookParams,
} from 'services';
import { DEFAULT_BLOCKCHAIN } from 'config';
import { getNetworkTotals } from '../utils/getNetworkTotals';

export const useWalletInfo = () => {
  const { connectedWallets, networkConfigurations } = useDynamicContext();

  const requestParams: WalletInfoHookParams = {
    addresses: connectedWallets?.map((w) => w.address) ?? [],
    blockchain: DEFAULT_BLOCKCHAIN,
  };

  const { data, error, isLoading } = useGetWalletInfoByAddressAndNetworkQuery(
    requestParams,
    {
      skip: !requestParams.addresses.length,
    },
  );

  const network = networkConfigurations?.evm?.find(
    (n) => n.vanityName === DEFAULT_BLOCKCHAIN,
  );

  return {
    data,
    error,
    isLoading,
    network,
    balances: getNetworkTotals(!error ? data : undefined),
  };
};
