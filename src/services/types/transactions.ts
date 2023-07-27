export interface TransactionsRequestParams {
  address: string;
  blockchain: string;
  page?: number;
  offset?: number;
  sort?: 'asc' | 'desc';
}

export interface TransactionsData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
