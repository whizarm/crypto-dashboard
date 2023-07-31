import {
  formatDateTime,
  formatEtherscanTime,
  formatTokenAmount,
  formatUsdAmount,
} from '../format';
import * as config from 'config';

vi.spyOn(config, 'DISPLAY_MAX_FRACTION_DIGITS', 'get').mockReturnValue(9);

describe('formatDateTime', () => {
  test('formats the date and time correctly', () => {
    const date = new Date('2023-07-31T12:34:56Z');
    const expectedFormattedDate = '7/31/2023, 12:34:56 PM';

    const result = formatDateTime(date);

    expect(result).toEqual(expectedFormattedDate);
  });
});

describe('formatEtherscanTime', () => {
  test('formats the time string correctly', () => {
    const timeString = '1669820537000';
    const expectedFormattedTime = 1669820537000;

    const result = formatEtherscanTime(timeString);

    expect(result).toEqual(expectedFormattedTime);
  });
});

describe('formatTokenAmount', () => {
  test('formats the token amount correctly with symbol', () => {
    const amount = '1234.1234567890';
    const symbol = 'ABC';
    const expectedFormattedAmount = '1,234.123456789 ABC';

    const result = formatTokenAmount(amount, symbol);

    expect(result).toEqual(expectedFormattedAmount);
  });

  test('formats the token amount correctly without symbol', () => {
    const amount = '5678.123456789012345';
    const expectedFormattedAmount = '5,678.123456789';

    const result = formatTokenAmount(amount);

    expect(result).toEqual(expectedFormattedAmount);
  });

  test('returns null for null amount', () => {
    const amount = null;
    const result = formatTokenAmount(amount);
    expect(result).toBeNull();
  });
});

describe('formatUsdAmount', () => {
  test('formats the USD amount correctly', () => {
    const amount = '1234.5678';
    const expectedFormattedAmount = '$1,234.57';

    const result = formatUsdAmount(amount);

    expect(result).toEqual(expectedFormattedAmount);
  });

  test('returns null for null or undefined amount', () => {
    const amount = null;
    const result = formatUsdAmount(amount);
    expect(result).toBeNull();
  });
});
