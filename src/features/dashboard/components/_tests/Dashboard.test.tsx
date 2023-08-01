import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

vi.mock('../../hooks/useWalletInfo', () => ({
  useWalletInfo: vi.fn(),
}));
vi.mock('../Statistics', () => ({
  default: () => <div>Statistics</div>,
}));
vi.mock('../Wallets.tsx', () => ({
  default: () => <div>Wallets</div>,
}));

describe('Dashboard', () => {
  test('should render Statistics component', () => {
    const { getByText } = render(<Dashboard />);

    expect(getByText('Statistics')).toBeInTheDocument();
  });

  test('should render Wallets component', () => {
    const { getByText } = render(<Dashboard />);

    expect(getByText('Wallets')).toBeInTheDocument();
  });
});
