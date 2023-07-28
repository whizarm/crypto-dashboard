export interface TransactionsRequestParams {
  address: string;
  blockchain: string;
  page?: number;
  offset?: number;
  sort?: 'asc' | 'desc';
}

interface Transaction {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
  methodId: string;
  functionName: string;
}

type ApiErrorMsg =
  | 'OK'
  | 'NOTOK'
  | 'OK-Missing/Invalid API Key, rate limit of 1/5sec applied';

export interface TransactionsData {
  status: '0' | '1';
  message: ApiErrorMsg;
  result: Transaction[] | [];
}
