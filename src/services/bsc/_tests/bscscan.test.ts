import { getBscscanUrl, handleBscscanResponse } from '../bscscan';

describe('bscscan', () => {
  const address = '0x123456';
  const API_KEY = 'API_KEY';

  beforeAll(() => {
    vi.stubEnv('VITE_BSCSCAN_API_KEY', API_KEY);
  });

  afterAll(() => {
    vi.unstubAllEnvs();
  });

  describe('getBscscanUrl', () => {
    test('returns the correct URL with valid parameters', () => {
      const params = {
        address,
        blockchain: 'Ethereum',
        page: 1,
        offset: 10,
        sort: <const>'desc',
      };

      const expectedURL = `https://api.bscscan.com/api?address=0x123456&blockchain=Ethereum&page=1&offset=10&sort=desc&module=account&action=txlist&startblock=0&endblock=99999999&apikey=${API_KEY}`;
      const result = getBscscanUrl(params);

      expect(result).toBe(expectedURL);
    });
  });

  describe('handleBscscanResponse', () => {
    test('throws an error if status is "0" with a non-"No transactions found" message', () => {
      const res = {
        status: <const>'0',
        message: <const>'NOTOK',
        result: <const>'Invalid API Key',
      };

      expect(() => handleBscscanResponse(res)).toThrow('Invalid API Key');
    });

    test('does not throw an error if status is "0" with "No transactions found" message', () => {
      const res = {
        status: <const>'0',
        message: <const>'No transactions found',
        result: [] as [],
      };

      expect(() => handleBscscanResponse(res)).not.toThrow();
    });

    test('does not throw an error if status is not "0"', () => {
      const res = {
        status: <const>'1',
        message: <const>'OK',
        result: [],
      };

      expect(() => handleBscscanResponse(res)).not.toThrow();
    });
  });
});
