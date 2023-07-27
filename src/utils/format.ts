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
