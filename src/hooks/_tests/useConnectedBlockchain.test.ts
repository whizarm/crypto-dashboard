import { renderHook } from '@testing-library/react';
import * as dynamic from '@dynamic-labs/sdk-react';
import { useConnectedBlockchain } from '../useConnectedBlockchain';
import dynamicContext from 'test/_mocks/dynamicContext';

describe('useConnectedBlockchain', () => {
  test('should return the connected blockchain for a valid network', () => {
    const { result } = renderHook(() => useConnectedBlockchain());
    expect(result.current).toEqual(
      dynamicContext?.networkConfigurations?.evm?.[0],
    );
  });

  test('should return undefined if no connected blockchain found', () => {
    vi.spyOn(dynamic, 'useDynamicContext').mockImplementation(() => ({
      ...dynamicContext,
      network: 123456,
    }));
    const { result } = renderHook(() => useConnectedBlockchain());

    expect(result.current).toBeUndefined();
  });
});
