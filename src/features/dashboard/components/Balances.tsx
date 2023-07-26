import { useDynamicContext } from '@dynamic-labs/sdk-react';

const Balances = () => {
  const { networkConfigurations } = useDynamicContext();
  const networks = networkConfigurations?.evm;

  return (
    <>
      {networks?.map((network) => {
        const { networkId, iconUrls } = network;
        return (
          <div key={networkId}>
            <img src={iconUrls[0]} height="50" />
          </div>
        );
      })}
    </>
  );
};

export default Balances;
