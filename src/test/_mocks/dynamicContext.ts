import { UseDynamicContext } from '@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext';

export default {
  isAuthenticated: true,
  network: 1,
  networkConfigurations: {
    evm: [
      {
        blockExplorerUrls: ['https://etherscan.io/'],
        chainId: 1,
        iconUrls: ['https://app.dynamic.xyz/assets/networks/eth.svg'],
        name: 'Ethereum Mainnet',
        nativeCurrency: {
          decimals: 18,
          name: 'Ether',
          symbol: 'ETH',
        },
        networkId: 1,
        rpcUrls: ['https://cloudflare-eth.com'],
        vanityName: 'Ethereum',
      },
      {
        blockExplorerUrls: ['https://bscscan.com'],
        chainId: 56,
        iconUrls: ['https://app.dynamic.xyz/assets/networks/bnb.svg'],
        name: 'BNB Smart Chain',
        nativeCurrency: {
          decimals: 18,
          name: 'BNB',
          symbol: 'BNB',
        },
        networkId: 56,
        rpcUrls: ['https://bsc-dataseed1.binance.org'],
      },
    ],
  },
} as unknown as UseDynamicContext;
