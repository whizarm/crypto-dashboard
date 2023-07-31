import { getTransactionsByAddressAndNetwork } from '../transactions';
import mockEtherscanResponse from 'test/_mocks/etherscan';
import mockBscscanResponse from 'test/_mocks/bscscan';
import * as ethersc from '../eth/etherscan';
import * as bscsc from '../bsc/bscscan';

const address = '0x123456';

const { handleEtherscanResponse, handleBscscanResponse } = vi.hoisted(() => ({
  handleEtherscanResponse: vi.fn(),
  handleBscscanResponse: vi.fn(),
}));
vi.mock('../eth/etherscan', async () => {
  const actual: typeof ethersc = await vi.importActual('../eth/etherscan');
  return {
    ...actual,
    handleEtherscanResponse,
  };
});
vi.mock('../bsc/bscscan', async () => {
  const actual: typeof bscsc = await vi.importActual('../bsc/bscscan');
  return {
    ...actual,
    handleBscscanResponse,
  };
});

describe('getTransactionsByAddressAndNetwork', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  test('should fetch Ethereum transactions data and call the response handler', async () => {
    const queryParams = {
      blockchain: 'Ethereum',
      address,
    };

    const result = await getTransactionsByAddressAndNetwork(queryParams);

    expect(result).toEqual(mockEtherscanResponse);
    expect(handleEtherscanResponse).toHaveBeenCalledWith(mockEtherscanResponse);
  });

  test('should fetch BNB Smart Chain transactions data and call the response handler', async () => {
    const queryParams = {
      blockchain: 'BNB Smart Chain',
      address,
    };

    const result = await getTransactionsByAddressAndNetwork(queryParams);

    expect(result).toEqual(mockBscscanResponse);
    expect(handleBscscanResponse).toHaveBeenCalledWith(mockBscscanResponse);
  });

  test('should throw an error if an unsupported blockchain is provided', () => {
    const unsupportedParams = {
      blockchain: 'Unsupported Blockchain',
      address,
    };

    expect(() =>
      getTransactionsByAddressAndNetwork(unsupportedParams),
    ).toThrowError('This blockchain is not yet supported');
  });
});
