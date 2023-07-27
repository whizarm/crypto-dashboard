export interface WalletInfoRequestParams {
  address: string;
  blockchain: string;
}

export interface WalletInfoData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
