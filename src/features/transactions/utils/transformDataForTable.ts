import { formatEther } from 'ethers';
import { TransactionsData } from 'services';
import { formatEtherscanTime, formatDateTime, formatTokenAmount } from 'utils';

export type TransactionsTableRow = {
  blockNumber: string;
  fee: string;
  from: string;
  hash: string;
  time: string;
  to: string;
  value: string;
};

export const transformDataForTable = (
  data?: TransactionsData,
): TransactionsTableRow[] => {
  if (typeof data?.result === 'string' || !data?.result.length) {
    return [];
  }

  return data.result.map(
    ({ blockNumber, from, hash, timeStamp, to, value, gasUsed, gasPrice }) => ({
      blockNumber,
      fee:
        formatTokenAmount(
          formatEther(BigInt(parseInt(gasUsed) * parseInt(gasPrice))),
          'ETH',
        ) ?? '-',
      from,
      hash,
      time: formatDateTime(formatEtherscanTime(timeStamp)),
      to,
      value: formatTokenAmount(formatEther(value), 'ETH') ?? '-',
    }),
  );
};
