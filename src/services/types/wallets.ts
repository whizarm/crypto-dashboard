export interface WalletsHookParams {
  addresses: string[];
  blockchain: string;
}

export interface WalletRequestParams {
  address: string;
  blockchain: string;
}

interface PriceInfo {
  rate: number;
  diff: number;
  diff7d: number;
  ts: number;
  marketCapUsd: number;
  availableSupply: number;
  volume24h: number;
  volDiff1: number;
  volDiff7: number;
  volDiff30: number;
  diff30d: number;
}

interface TokenInfo {
  address: string;
  name: string;
  decimals: string;
  symbol: string;
  totalSupply: string;
  owner: string;
  txsCount: number;
  transfersCount: number;
  lastUpdated: number;
  issuancesCount: number;
  holdersCount: number;
  image: string;
  description: string;
  website: string;
  ethTransfersCount: number;
  price: PriceInfo | false;
  publicTags: string[];
}

interface TokenBalance {
  tokenInfo: TokenInfo;
  balance: number;
  rawBalance: string;
}

export interface Wallet {
  address: string;
  ETH: {
    price: PriceInfo;
    balance: number;
    rawBalance: string;
    totalIn?: number;
    totalOut?: number;
  };
  countTxs: number;
  tokens?: TokenBalance[];
}

export type WalletsData = (Wallet | undefined)[];
