import { useDynamicContext } from '@dynamic-labs/sdk-react';

export const useConnectedBlockchain = () => {
  const { network, networkConfigurations } = useDynamicContext();

  const connectedBlockchain = networkConfigurations?.evm?.find(
    ({ chainId }) => chainId === network,
  );

  return connectedBlockchain;
};
