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

export const formatEtherscanTime = (time: number) =>
  parseInt(time.toString().padEnd(13, '0'));

export const tokenFormatter = new Intl.NumberFormat(undefined, {
  style: 'decimal',
  maximumFractionDigits: 8,
});

export const formatTokenAmount = (
  amount: string | number | null,
  symbol?: string,
) => {
  if (!amount && amount !== 0) {
    return null;
  }

  const value = typeof amount === 'string' ? parseFloat(amount) : amount;
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
