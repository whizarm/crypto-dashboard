import { formatEther } from 'ethers';
import { TransactionsData } from 'services';
import { formatEtherscanTime, formatDateTime } from 'utils';

export const transformDataForTable = (data?: TransactionsData) => {
  if (typeof data?.result === 'string' || !data?.result.length) return [];
  return data.result.map(
    ({
      blockNumber,
      from,
      hash,
      timeStamp,
      to,
      value,
      gasUsed,
      gasPrice, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }: any) => ({
      blockNumber,
      fee: formatEther(gasUsed * gasPrice),
      from,
      hash,
      time: formatDateTime(formatEtherscanTime(timeStamp)),
      to,
      value: formatEther(value),
    }),
  );
};
