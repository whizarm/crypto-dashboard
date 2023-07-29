import { useDynamicContext } from '@dynamic-labs/sdk-react';
import { GenericNetwork } from '@dynamic-labs/types';

export const useConnectedBlockchain = (): GenericNetwork | undefined => {
  const { network, networkConfigurations } = useDynamicContext();

  const connectedBlockchain = networkConfigurations?.evm?.find(
    ({ chainId }) => chainId === network,
  );

  return connectedBlockchain;
};
