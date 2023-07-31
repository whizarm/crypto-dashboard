import { getUrlStrWithParams } from '../getUrlStrWithParams';

describe('getUrlStrWithParams', () => {
  test('returns the correct URL string with single parameter', () => {
    const baseUrl = 'https://example.com';
    const params = { id: 123 };
    const expectedUrl = 'https://example.com?id=123';

    const result = getUrlStrWithParams(baseUrl, params);

    expect(result).toBe(expectedUrl);
  });

  test('returns the correct URL string with multiple parameters', () => {
    const baseUrl = 'https://example.com';
    const params = { id: '123', value: 30 };
    const expectedUrl = 'https://example.com?id=123&value=30';

    const result = getUrlStrWithParams(baseUrl, params);

    expect(result).toBe(expectedUrl);
  });

  test('handles numeric and string parameters', () => {
    const baseUrl = 'https://example.com';
    const params = { id: '123', value: 123 };
    const expectedUrl = 'https://example.com?id=123&value=123';

    const result = getUrlStrWithParams(baseUrl, params);

    expect(result).toBe(expectedUrl);
  });

  test('handles empty parameters object', () => {
    const baseUrl = 'https://example.com';
    const params = {};
    const expectedUrl = 'https://example.com';

    const result = getUrlStrWithParams(baseUrl, params);

    expect(result).toBe(expectedUrl);
  });
});
