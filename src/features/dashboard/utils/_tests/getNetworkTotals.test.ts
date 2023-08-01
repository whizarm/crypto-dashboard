import ethplorerData from 'test/_mocks/ethplorer';
import { getNetworkTotals, UserBalances } from '../getNetworkTotals';
import { WalletsData } from 'services';

describe('getNetworkTotals', () => {
  test('should return initial values when data is undefined or empty', () => {
    const testDataUndefined: UserBalances = getNetworkTotals(undefined);
    const testDataEmpty: UserBalances = getNetworkTotals([]);

    const expected: UserBalances = {
      nativeToken: null,
      usd: null,
      totalIn: null,
      totalOut: null,
      totalTxs: null,
    };

    expect(testDataUndefined).toEqual(expected);
    expect(testDataEmpty).toEqual(expected);
  });

  test('should calculate correct totals when data is provided', () => {
    const data = [ethplorerData] as unknown as WalletsData;
    const expected: UserBalances = {
      nativeToken: 0.8226860535617628,
      totalIn: 2.804907366773145,
      totalOut: 1.982221313211382,
      totalTxs: 231,
      usd: 1533.0023409731773,
    };

    const testData: UserBalances = getNetworkTotals(data);
    expect(testData).toEqual(expected);
  });
});
