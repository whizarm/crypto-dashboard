import { getWalletsByAddressesAndNetwork } from '../wallets';
import mockEthplorerResponse from 'test/_mocks/ethplorer';
import mockBinplorerResponse from 'test/_mocks/binplorer';

const addresses = ['0x123456', '0x7890'];

describe('getWalletsByAddressesAndNetwork', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  test('should fetch Ethereum wallets data', async () => {
    const queryParams = {
      blockchain: 'Ethereum',
      addresses,
    };

    const result = await getWalletsByAddressesAndNetwork(queryParams);

    expect(result).toEqual([mockEthplorerResponse, mockEthplorerResponse]);
  });

  test('should fetch BNB Smart Chain wallets data', async () => {
    const queryParams = {
      blockchain: 'BNB Smart Chain',
      addresses,
    };

    const result = await getWalletsByAddressesAndNetwork(queryParams);

    expect(result).toEqual([mockBinplorerResponse, mockBinplorerResponse]);
  });

  test('should throw an error if an unsupported blockchain is provided', () => {
    const unsupportedParams = {
      blockchain: 'Unsupported Blockchain',
      addresses,
    };

    expect(() =>
      getWalletsByAddressesAndNetwork(unsupportedParams),
    ).toThrowError('This blockchain is not yet supported');
  });
});
