import { useDynamicContext } from '@dynamic-labs/sdk-react';
import { Card } from 'components/Card';

const Balances = () => {
  const { networkConfigurations } = useDynamicContext();
  const networks = networkConfigurations?.evm;

  return (
    <Card title="Tokens" sx={{ height: '100%' }}>
      {networks?.map((network) => {
        const { networkId, iconUrls } = network;
        return (
          <div key={networkId}>
            <img src={iconUrls[0]} height="50" />
          </div>
        );
      })}
    </Card>
  );
};

export default Balances;
