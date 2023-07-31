import {
  TransactionsData,
  TransactionsRequestParams,
} from './types/transactions';
import { getEtherscanUrl, handleEtherscanResponse } from './eth/etherscan';
import { getBscscanUrl, handleBscscanResponse } from './bsc/bscscan';

export const getTransactionsData = async (
  url: string,
  handleResponse?: (res: TransactionsData) => void,
) => {
  const res = await fetch(url);
  const data: TransactionsData = await res.json();

  if (typeof handleResponse === 'function') {
    handleResponse(data);
  }

  return data;
};

const getBlockchainApi = (queryParams: TransactionsRequestParams) => {
  switch (queryParams.blockchain) {
    case 'Ethereum':
      return {
        request: getEtherscanUrl(queryParams),
        handleResponse: handleEtherscanResponse,
      };
    case 'BNB Smart Chain':
      return {
        request: getBscscanUrl(queryParams),
        handleResponse: handleBscscanResponse,
      };
    default:
      throw new Error('This blockchain is not yet supported');
  }
};

export const getTransactionsByAddressAndNetwork = (
  params: TransactionsRequestParams,
): Promise<TransactionsData> => {
  const { request, handleResponse } = getBlockchainApi(params);
  return getTransactionsData(request, handleResponse);
};
