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

type ApiSuccessMsg =
  | 'OK'
  | 'OK-Missing/Invalid API Key, rate limit of 1/5sec applied';

type ApiError =
  | 'Invalid API Key'
  | 'Max rate limit reached, please use API Key for higher rate limit'
  | 'Error! Missing Or invalid Action name'
  | 'Error! Block number already pass'
  | 'Error! Invalid address format'
  | 'Contract source code not verified'
  | 'Query Timeout occured. Please select a smaller result dataset';

export type TransactionsData =
  | {
      status: '1';
      message: ApiSuccessMsg;
      result: Transaction[] | [];
    }
  | {
      status: '0';
      message: 'NOTOK';
      result: ApiError;
    }
  | {
      status: '0';
      message: 'No transactions found';
      result: [];
    };
