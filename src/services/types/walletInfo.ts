export interface WalletInfoHookParams {
  addresses: string[];
  blockchain: string;
}

export interface WalletInfoRequestParams {
  address: string;
  blockchain: string;
}

export interface WalletInfo {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type WalletInfoData = WalletInfo[];
