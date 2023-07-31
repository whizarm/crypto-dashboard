import { useQuery } from 'react-query';
import { useDynamicContext } from '@dynamic-labs/sdk-react';
import { getWalletsByAddressesAndNetwork, WalletsHookParams } from 'services';
import { getNetworkTotals } from '../utils/getNetworkTotals';
import { useConnectedBlockchain } from 'hooks';

export const useWalletInfo = () => {
  const { connectedWallets } = useDynamicContext();
  const network = useConnectedBlockchain();

  const requestParams: WalletsHookParams = {
    addresses: connectedWallets?.map((w) => w.address) ?? [],
    blockchain: network?.vanityName ?? network?.name ?? '',
  };

  const apiResults = useQuery(
    ['transactions', requestParams],
    () => getWalletsByAddressesAndNetwork(requestParams),
    {
      enabled: !!requestParams.addresses.length && !!requestParams.blockchain,
    },
  );

  const balances = getNetworkTotals(
    !apiResults.error ? apiResults.data : undefined,
  );

  return {
    ...apiResults,
    network,
    balances,
  };
};
