import { getEtherscanUrl, handleEtherscanResponse } from '../etherscan';

describe('etherscan', () => {
  const address = '0x123456';
  const API_KEY = 'API_KEY';

  beforeAll(() => {
    vi.stubEnv('VITE_ETHERSCAN_API_KEY', API_KEY);
  });

  afterAll(() => {
    vi.unstubAllEnvs();
  });

  describe('getEtherscanUrl', () => {
    test('returns the correct URL with valid parameters', () => {
      const params = {
        address,
        blockchain: 'Ethereum',
        page: 1,
        offset: 10,
        sort: <const>'desc',
      };

      const expectedURL = `https://api.etherscan.io/api?address=0x123456&blockchain=Ethereum&page=1&offset=10&sort=desc&module=account&action=txlist&startblock=0&endblock=99999999&apikey=${API_KEY}`;
      const result = getEtherscanUrl(params);

      expect(result).toBe(expectedURL);
    });
  });

  describe('handleEtherscanResponse', () => {
    test('throws an error if status is "0" with a non-"No transactions found" message', () => {
      const res = {
        status: <const>'0',
        message: <const>'NOTOK',
        result: <const>'Invalid API Key',
      };

      expect(() => handleEtherscanResponse(res)).toThrow('Invalid API Key');
    });

    test('does not throw an error if status is "0" with "No transactions found" message', () => {
      const res = {
        status: <const>'0',
        message: <const>'No transactions found',
        result: [] as [],
      };

      expect(() => handleEtherscanResponse(res)).not.toThrow();
    });

    test('does not throw an error if status is not "0"', () => {
      const res = {
        status: <const>'1',
        message: <const>'OK',
        result: [],
      };

      expect(() => handleEtherscanResponse(res)).not.toThrow();
    });
  });
});
