import { useQuery } from 'react-query';
import {
  TransactionsRequestParams,
  getTransactionsByAddressAndNetwork,
} from 'services';

export const useTransactionsData = (requestParams: TransactionsRequestParams) =>
  useQuery(
    ['transactions', requestParams],
    () => getTransactionsByAddressAndNetwork(requestParams),
    {
      enabled: !!requestParams.address && !!requestParams.blockchain,
    },
  );
