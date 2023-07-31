import { renderHook } from '@testing-library/react';
import { useSupportedBlockchains } from '../useSupportedBlockchains';

describe('useSupportedBlockchains', () => {
  test('should return supported blockchains', () => {
    const { result } = renderHook(() => useSupportedBlockchains());
    expect(result.current).toEqual([
      {
        iconUrl: 'https://app.dynamic.xyz/assets/networks/eth.svg',
        value: 'Ethereum',
      },
      {
        iconUrl: 'https://app.dynamic.xyz/assets/networks/bnb.svg',
        value: 'BNB Smart Chain',
      },
    ]);
  });
});
