import { render, fireEvent, queryByAttribute } from '@testing-library/react';
import Transactions from '../Transactions';
import etherscanData from 'test/_mocks/etherscan';

const { useTransactionsDataMock } = vi.hoisted(() => ({
  useTransactionsDataMock: vi.fn(),
}));

vi.mock('../../hooks/useTransactionsData', () => ({
  useTransactionsData: useTransactionsDataMock,
}));

const defaultApiValues = {
  data: etherscanData,
  isLoading: false,
  isError: false,
};

describe('Transactions', () => {
  const renderComponent = (apiValues?: Partial<typeof defaultApiValues>) => {
    useTransactionsDataMock.mockReturnValue({
      ...defaultApiValues,
      ...apiValues,
    });
    return render(<Transactions />);
  };

  test('should render blockchain selection and wallet selection components', () => {
    const { getByText, getByLabelText } = renderComponent();

    expect(getByText('Blockchain selection')).toBeInTheDocument();
    expect(getByLabelText('Pick Ethereum')).toBeInTheDocument();
    expect(getByLabelText('Pick BNB Smart Chain')).toBeInTheDocument();

    expect(getByText('Wallet selection')).toBeInTheDocument();
  });

  test('should handle blockchain selection change', () => {
    const { getByLabelText } = renderComponent();

    expect(getByLabelText('Pick BNB Smart Chain')).toHaveAttribute(
      'aria-pressed',
      'false',
    );

    fireEvent.click(getByLabelText('Pick BNB Smart Chain'));

    expect(getByLabelText('Pick BNB Smart Chain')).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  test('should handle wallet selection change', () => {
    const { getByLabelText, getByRole, container } = renderComponent();

    fireEvent.mouseDown(getByLabelText('Wallet'));

    const getByTextHash = (hash: string) =>
      queryByAttribute('data-value', container, hash);

    const listItem = getByTextHash(
      '0x62eA30cFe51b1D1E7F0a8d3244Af46B3A91332f2',
    );
    if (listItem) {
      fireEvent.click(listItem);
    }

    expect(getByRole('listbox')).toHaveTextContent(
      '0x62eA30cFe51b1D1E7F0a8d3244Af46B3A91332f2',
    );
  });

  test('should render TransactionsTable when there is data', () => {
    const { getByText } = renderComponent();

    expect(getByText('Tx Hash')).toBeInTheDocument();
    expect(getByText('Fee')).toBeInTheDocument();
  });

  test('should render loading spinner when data is loading', () => {
    const { getByRole } = renderComponent({ isLoading: true });

    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  test('should render error message when there is an error', () => {
    const { getByText } = renderComponent({ isError: true });

    expect(
      getByText('An error occurred while getting data from the server'),
    ).toBeInTheDocument();
  });
});
