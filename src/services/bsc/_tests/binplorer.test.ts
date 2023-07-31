import { WalletRequestParams } from 'services/types/wallets';
import { getBinplorerWalletInfoUrl } from '../binplorer';

describe('getBinplorerWalletInfoUrl', () => {
  const address = '0x123456';
  const API_KEY = 'API_KEY';

  beforeAll(() => {
    vi.stubEnv('VITE_ETHPLORER_API_KEY', API_KEY);
  });

  afterAll(() => {
    vi.unstubAllEnvs();
  });

  test('returns the correct URL with valid parameters', () => {
    const result = getBinplorerWalletInfoUrl({
      address,
    } as WalletRequestParams);

    const expectedURL = `https://api.binplorer.com/getAddressInfo/${address}?showETHTotals=true&showTxsCount=true&apiKey=${API_KEY}`;
    expect(result).toBe(expectedURL);
  });
});
