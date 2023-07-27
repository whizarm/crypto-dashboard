/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { TransactionsData } from 'services';
import { CryptoAddressWithClipboard } from 'components/CryptoAddress';
import TransactionTablePaginationActions from './TransactionTablePaginationActions';

type Props = {
  data: TransactionsData;
  rowsPerPage: number | undefined;
  page: number | undefined;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => void;
  handleChangeRowsPerPage: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TransactionsTable = ({
  data,
  page = 1,
  rowsPerPage = 10,
  handleChangePage,
  handleChangeRowsPerPage,
}: Props) => {
  const isNextButtonDisabled = data?.length < rowsPerPage;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Transactions table" sx={{ tableLayout: 'auto' }}>
        <TableHead>
          <TableRow>
            <TableCell>Tx Hash</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>From</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Fee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ hash, from, fee, time, to, value }: any) => (
            <TableRow
              key={hash}
              sx={{ flexDirection: 'row', flexWrap: 'nowrap' }}
            >
              <TableCell component="th" scope="row" sx={{ width: 200 }}>
                <CryptoAddressWithClipboard
                  sx={{ width: { xs: 100, md: 120, lg: 150, xl: 220 } }}
                >
                  {hash}
                </CryptoAddressWithClipboard>
              </TableCell>
              <TableCell>{time}</TableCell>
              <TableCell>
                <CryptoAddressWithClipboard
                  sx={{ width: { xs: 100, md: 120, lg: 150, xl: 220 } }}
                >
                  {from}
                </CryptoAddressWithClipboard>
              </TableCell>
              <TableCell>{value}</TableCell>
              <TableCell>
                <CryptoAddressWithClipboard
                  sx={{ width: { xs: 100, md: 120, lg: 150, xl: 220 } }}
                >
                  {to}
                </CryptoAddressWithClipboard>
              </TableCell>
              <TableCell
                sx={{
                  maxWidth: {
                    xs: 100,
                    md: 120,
                    lg: 150,
                    xl: 200,
                  },
                }}
              >
                {fee}
              </TableCell>
            </TableRow>
          ))}
          {!data.length && (
            <TableRow>
              <TableCell colSpan={6} sx={{ py: 6, textAlign: 'center' }}>
                No transactions found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              showLastButton={false}
              rowsPerPageOptions={[5, 10, 25, 50]}
              colSpan={3}
              count={-1}
              rowsPerPage={rowsPerPage}
              page={page - 1}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TransactionTablePaginationActions}
              nextIconButtonProps={{ disabled: isNextButtonDisabled }}
              labelDisplayedRows={({ page }) => `Page ${page + 1}`}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default TransactionsTable;