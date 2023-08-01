import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { CryptoAddressWithClipboard } from 'components/CryptoAddress';
import { TransactionsTableRow } from '../utils/transformDataForTable';
import TransactionTablePaginationActions from './TransactionTablePaginationActions';

export type Props = {
  data: TransactionsTableRow[];
  isLoading: boolean;
  page: number | undefined;
  rowsPerPage: number | undefined;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => void;
  handleChangeRowsPerPage: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TransactionsTable = ({
  data,
  isLoading,
  page = 1,
  rowsPerPage = 10,
  handleChangePage,
  handleChangeRowsPerPage,
}: Props) => {
  const isNextButtonDisabled = data?.length < rowsPerPage;
  const hashWidths = { xs: 100, md: 115, lg: 160, xl: 200 };

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
        <TableBody sx={{ position: 'relative' }}>
          {data.map(({ hash, from, fee, time, to, value }) => (
            <TableRow
              key={hash}
              sx={{ flexDirection: 'row', flexWrap: 'nowrap' }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ overflow: 'visible' }}
              >
                <CryptoAddressWithClipboard sx={{ width: hashWidths }}>
                  {hash}
                </CryptoAddressWithClipboard>
              </TableCell>
              <TableCell>{time}</TableCell>
              <TableCell sx={{ overflow: 'visible' }}>
                <CryptoAddressWithClipboard sx={{ width: hashWidths }}>
                  {from}
                </CryptoAddressWithClipboard>
              </TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{value}</TableCell>
              <TableCell sx={{ overflow: 'visible' }}>
                <CryptoAddressWithClipboard sx={{ width: hashWidths }}>
                  {to}
                </CryptoAddressWithClipboard>
              </TableCell>
              <TableCell
                sx={{
                  maxWidth: {
                    xs: 150,
                  },
                  whiteSpace: 'nowrap',
                }}
              >
                {fee}
              </TableCell>
            </TableRow>
          ))}
          {isLoading && (
            <TableRow
              sx={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                background: 'rgba(255,255,255,0.65)',
                top: '0',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '25px',
              }}
            >
              <TableCell sx={{ border: 'none' }}>
                <CircularProgress size={40} />
              </TableCell>
            </TableRow>
          )}
          {!data.length && (
            <TableRow>
              <TableCell
                colSpan={6}
                sx={{
                  py: 6,
                  height: '130px',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  {!isLoading && 'No transactions'}
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              showLastButton={false}
              rowsPerPageOptions={[5, 10, 25, 50]}
              colSpan={6}
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
