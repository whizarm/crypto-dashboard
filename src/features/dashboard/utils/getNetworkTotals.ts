import { WalletInfoData } from 'services';

export type userBalances = {
  nativeToken: number | null;
  usd: number | null;
  totalIn: number | null;
  totalOut: number | null;
  totalTxs: number | null;
};

export const getNetworkTotals = (
  data: WalletInfoData | undefined,
): userBalances => {
  if (!data?.length) {
    return {
      nativeToken: null,
      usd: null,
      totalIn: null,
      totalOut: null,
      totalTxs: null,
    };
  }

  const initialBalances = {
    nativeToken: 0,
    usd: 0,
    totalIn: 0,
    totalOut: 0,
    totalTxs: 0,
  };

  return <userBalances>data.reduce((totals, wallet) => {
    const { nativeToken, usd, totalIn, totalOut, totalTxs } = totals;
    return {
      nativeToken: nativeToken + (wallet?.ETH?.balance ?? 0),
      usd: usd + (wallet?.ETH?.balance ?? 0) * (wallet?.ETH?.price.rate ?? 1),
      totalIn: totalIn + (wallet?.ETH?.totalIn ?? 0),
      totalOut: totalOut + (wallet?.ETH?.totalOut ?? 0),
      totalTxs: totalTxs + (wallet?.countTxs ?? 0),
    };
  }, initialBalances);
};
