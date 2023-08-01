import React from 'react';
import { render } from '@testing-library/react';
import { transformDataForTable } from '../../utils/transformDataForTable';
import etherscanData from 'test/_mocks/etherscan';
import TransactionsTable, { Props } from '../TransactionsTable';

const data = transformDataForTable(etherscanData);
const handleChangePageMock = vi.fn();
const handleChangeRowsPerPageMock = vi.fn();

const defaultProps = {
  data,
  isLoading: false,
  page: 1,
  rowsPerPage: 10,
  handleChangePage: handleChangePageMock,
  handleChangeRowsPerPage: handleChangeRowsPerPageMock,
};

describe('TransactionsTable', () => {
  const renderComponent = (props?: Partial<Props>) =>
    render(<TransactionsTable {...defaultProps} {...props} />);

  test('should render table with data', () => {
    const { getByText, getAllByText } = renderComponent();
    const getAllByTextHash = (hash: string) =>
      getAllByText(
        (_, element: Element | null) => element?.textContent === hash,
      );

    expect(getByText('Tx Hash')).toBeInTheDocument();
    expect(getByText('Time')).toBeInTheDocument();
    expect(getByText('From')).toBeInTheDocument();
    expect(getByText('Value')).toBeInTheDocument();
    expect(getByText('To')).toBeInTheDocument();
    expect(getByText('Fee')).toBeInTheDocument();

    for (const dataItem of data) {
      expect(getAllByTextHash(dataItem.hash).length).toBeGreaterThan(0);
      expect(getByText(dataItem.time)).toBeInTheDocument();
      expect(getAllByTextHash(dataItem.from).length).toBeGreaterThan(0);
      expect(getByText(dataItem.value)).toBeInTheDocument();
      expect(getAllByTextHash(dataItem.to).length).toBeGreaterThan(0);
      expect(getByText(dataItem.fee)).toBeInTheDocument();
    }
  });

  test('should render loading spinner when isLoading is true', () => {
    const { getByRole } = renderComponent({ isLoading: true });

    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  test('should show "No transactions" message when there is no data', () => {
    const { getByText } = renderComponent({ data: [] });

    expect(getByText('No transactions')).toBeInTheDocument();
  });

  test('should disable next page button when there is not enough data for the next page', () => {
    const { getByLabelText } = renderComponent({ data: [data[0]] });

    expect(getByLabelText('next page')).toBeDisabled();
  });
});
