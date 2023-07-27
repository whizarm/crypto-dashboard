import { useDynamicContext } from '@dynamic-labs/sdk-react';
import { SUPPORTED_BLOCKCHAINS } from 'config';

export const useSupportedBlockchains = () => {
  const { networkConfigurations } = useDynamicContext();

  const supportedBlockchains = networkConfigurations?.evm
    ?.filter(
      ({ vanityName }) =>
        !!vanityName && SUPPORTED_BLOCKCHAINS.includes(vanityName),
    )
    .map(({ iconUrls, vanityName }) => ({
      iconUrl: iconUrls[0],
      value: vanityName ?? '',
    }));

  return supportedBlockchains;
};
