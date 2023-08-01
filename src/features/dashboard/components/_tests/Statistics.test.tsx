import { render } from '@testing-library/react';
import Statistics from '../Statistics';

const { useWalletInfoMock } = vi.hoisted(() => ({
  useWalletInfoMock: vi.fn(),
}));

vi.mock('../../hooks/useWalletInfo', () => ({
  useWalletInfo: useWalletInfoMock,
}));

describe('Statistics', () => {
  const renderComponent = () => {
    return render(<Statistics />);
  };

  test('should render network overview card', () => {
    useWalletInfoMock.mockReturnValue({
      isLoading: false,
      balances: {
        usd: 1000,
        nativeToken: 100,
        totalIn: 500,
        totalOut: 300,
        totalTxs: 50,
      },
      network: {
        nativeCurrency: {
          symbol: 'ETH',
        },
        iconUrls: ['network_icon_url'],
        vanityName: 'Ethereum',
        name: 'ethereum',
      },
    });

    const { getByText } = renderComponent();

    expect(getByText('Ethereum overview')).toBeInTheDocument();
  });

  test('should render all statistics', () => {
    useWalletInfoMock.mockReturnValue({
      isLoading: false,
      balances: {
        usd: 1000,
        nativeToken: 200.0003143434322,
        totalIn: 500.0003143434322,
        totalOut: 300,
        totalTxs: 50,
      },
      network: {
        nativeCurrency: {
          symbol: 'ETH',
        },
        iconUrls: ['network_icon_url'],
        vanityName: 'Ethereum',
        name: 'ethereum',
      },
    });

    const { getByText } = renderComponent();

    expect(getByText('300 ETH')).toBeInTheDocument();
    expect(getByText('$1,000.00')).toBeInTheDocument();
    expect(getByText('500.000314343 ETH')).toBeInTheDocument();
    expect(getByText('200.000314343 ETH')).toBeInTheDocument();
    expect(getByText('50')).toBeInTheDocument();
  });

  test('should render loading spinners when data is loading', () => {
    useWalletInfoMock.mockReturnValue({
      isLoading: true,
      balances: {
        usd: null,
        nativeToken: null,
        totalIn: null,
        totalOut: null,
        totalTxs: null,
      },
      network: null,
    });

    const { getAllByRole } = renderComponent();

    expect(getAllByRole('progressbar')).toHaveLength(5);
  });
});
