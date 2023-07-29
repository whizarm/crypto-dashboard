import { useDynamicContext } from '@dynamic-labs/sdk-react';
import { SUPPORTED_BLOCKCHAINS } from 'config';

export const useSupportedBlockchains = () => {
  const { networkConfigurations } = useDynamicContext();

  const supportedBlockchains = networkConfigurations?.evm
    ?.filter(({ vanityName, name }) => {
      const blockchain = vanityName ?? name;
      return !!blockchain && SUPPORTED_BLOCKCHAINS.includes(blockchain);
    })
    .map(({ iconUrls, vanityName, name }) => {
      return {
        iconUrl: iconUrls[0],
        value: vanityName ?? name ?? '',
      };
    });

  return supportedBlockchains;
};
