import { render, fireEvent } from '@testing-library/react';
import { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions';
import TransactionTablePaginationActions from '../TransactionTablePaginationActions';

const onPageChangeMock = vi.fn();
const defaultProps = {
  page: 1,
  onPageChange: onPageChangeMock,
  className: 'MuiTablePagination-actions',
  count: -1,
  rowsPerPage: 10,
  showFirstButton: false,
  showLastButton: false,
  getItemAriaLabel: vi.fn(),
};

describe('TransactionsTablePaginationActions', () => {
  const renderComponent = (props?: Partial<TablePaginationActionsProps>) =>
    render(<TransactionTablePaginationActions {...defaultProps} {...props} />);

  test('should call onPageChange with 0 when clicking on the first page button', () => {
    const { getByLabelText } = renderComponent({ page: 2 });

    const firstPageButton = getByLabelText('first page');
    fireEvent.click(firstPageButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(expect.anything(), 0);
  });

  test('should call onPageChange with previous page number when clicking on the previous page button', () => {
    const { getByLabelText } = renderComponent({ page: 3 });

    const previousPageButton = getByLabelText('previous page');
    fireEvent.click(previousPageButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(expect.anything(), 2);
  });

  test('should call onPageChange with next page number when clicking on the next page button', () => {
    const { getByLabelText } = renderComponent();

    const nextPageButton = getByLabelText('next page');
    fireEvent.click(nextPageButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(expect.anything(), 2);
  });

  test('should disable previous page button when on the first page', () => {
    const { getByLabelText } = renderComponent({ page: 0 });

    const previousPageButton = getByLabelText('previous page');
    expect(previousPageButton).toBeDisabled();
  });

  test('should not disable previous page button when on a page other than the first page', () => {
    const { getByLabelText } = renderComponent({ page: 2 });

    const previousPageButton = getByLabelText('previous page');
    expect(previousPageButton).not.toBeDisabled();
  });
});
