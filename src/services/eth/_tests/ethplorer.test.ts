import { TransactionsRequestParams } from 'services/types/transactions';
import { getEthplorerWalletInfoUrl } from '../ethplorer';

describe('getEthplorerWalletInfoUrl', () => {
  const address = '0x123456';
  const API_KEY = 'API_KEY';

  beforeAll(() => {
    vi.stubEnv('VITE_ETHPLORER_API_KEY', API_KEY);
  });

  afterAll(() => {
    vi.unstubAllEnvs();
  });

  test('returns the correct URL with valid parameters', () => {
    const result = getEthplorerWalletInfoUrl({
      address,
    } as TransactionsRequestParams);

    const expectedURL = `https://api.ethplorer.io/getAddressInfo/${address}?showETHTotals=true&showTxsCount=true&apiKey=${API_KEY}`;
    expect(result).toBe(expectedURL);
  });
});
