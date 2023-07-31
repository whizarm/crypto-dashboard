import { DISPLAY_MAX_FRACTION_DIGITS } from 'config';

export const formatDateTime = (date: number | Date) => {
  const dateObject = typeof date === 'number' ? new Date(date) : date;

  return new Intl.DateTimeFormat(undefined, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(dateObject);
};

export const formatEtherscanTime = (time: string | number) =>
  parseInt((typeof time === 'number' ? time.toString() : time).padEnd(13, '0'));

export const tokenFormatter = new Intl.NumberFormat(undefined, {
  style: 'decimal',
  maximumFractionDigits: DISPLAY_MAX_FRACTION_DIGITS,
});

export const formatTokenAmount = (
  amount: string | number | null,
  symbol?: string,
) => {
  if (!amount && amount !== 0) {
    return null;
  }

  const value = typeof amount === 'string' ? parseFloat(amount) : amount;

  if (!symbol) {
    return tokenFormatter.format(value);
  }
  return [tokenFormatter.format(value), symbol].join(' ');
};

export const amountFormatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'narrowSymbol',
  maximumFractionDigits: 2,
});

export const formatUsdAmount = (amount: string | number | null) => {
  if (amount == null) {
    return amount;
  }

  const value = typeof amount === 'string' ? parseFloat(amount) : amount;
  return amountFormatter.format(value);
};
