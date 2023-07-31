import { useEffect, useState } from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react';
import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  Alert,
  AlertTitle,
} from '@mui/material';
import { TransactionsRequestParams } from 'services';
import { useSupportedBlockchains, useConnectedBlockchain } from 'hooks';
import { Card } from 'components/Card';
import { ToggleButtons } from 'components/ToggleButtons';
import { CryptoAddress } from 'components/CryptoAddress';
import TransactionsTable from './TransactionsTable';
import { transformDataForTable } from '../utils/transformDataForTable';
import { useTransactionsData } from '../hooks/useTransactionsData';

const Transactions = () => {
  const { primaryWallet, connectedWallets } = useDynamicContext();
  const connectedBlockchain = useConnectedBlockchain();
  const supportedBlockchains = useSupportedBlockchains();

  const initialParams: TransactionsRequestParams = {
    address: primaryWallet?.address ?? '',
    blockchain:
      connectedBlockchain?.vanityName ?? connectedBlockchain?.name ?? '',
    page: 1,
    offset: 10,
    sort: 'desc',
  };

  const [requestParams, setRequestParams] = useState(initialParams);
  const { data, isLoading, isError } = useTransactionsData(requestParams);

  useEffect(() => {
    if (initialParams.blockchain) {
      setRequestParams((params) => ({
        ...params,
        blockchain: initialParams.blockchain,
      }));
    }
  }, [initialParams.blockchain]);

  const selectAddressHandler = ({ target }: SelectChangeEvent) => {
    const { value } = target;
    setRequestParams((params) => ({
      ...params,
      address: value,
    }));
  };

  const selectBlockchainHandler = (
    _e: React.MouseEvent<HTMLElement>,
    value: string,
  ) => {
    setRequestParams((params) => ({
      ...params,
      blockchain: value,
    }));
  };

  const pageChangeHandler = (
    _e: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setRequestParams((params) => ({
      ...params,
      page: newPage + 1,
    }));
  };

  const rowsPerPageChangeHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setRequestParams((params) => ({
      ...params,
      page: 1,
      offset: parseInt(value),
    }));
  };

  const dataForTable = transformDataForTable(data);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card
            title="Blockchain selection"
            height={180}
            sx={{ overflowY: 'scroll' }}
          >
            {!!supportedBlockchains && (
              <ToggleButtons
                buttons={supportedBlockchains}
                selectedValue={requestParams.blockchain}
                onChange={selectBlockchainHandler}
              />
            )}
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card title="Wallet selection" height={180}>
            <FormControl fullWidth>
              <InputLabel id="select-connected-wallet-label">Wallet</InputLabel>
              <Select
                labelId="select-connected-wallet-label"
                id="select-connected-wallet"
                value={requestParams.address}
                label="Pick wallet"
                onChange={selectAddressHandler}
              >
                {connectedWallets?.map(({ address }) => (
                  <MenuItem key={address} value={address}>
                    <CryptoAddress>{address}</CryptoAddress>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card title="Transactions" sx={{ pb: 8 }}>
            {isError ? (
              <Alert severity="error">
                <AlertTitle>
                  An error occurred while getting data from the server
                </AlertTitle>
              </Alert>
            ) : (
              <TransactionsTable
                data={dataForTable}
                rowsPerPage={requestParams.offset}
                page={requestParams.page}
                handleChangePage={pageChangeHandler}
                handleChangeRowsPerPage={rowsPerPageChangeHandler}
                isLoading={isLoading}
              />
            )}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Transactions;
