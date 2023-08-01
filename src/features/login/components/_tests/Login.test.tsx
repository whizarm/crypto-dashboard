import { render } from '@testing-library/react';
import Login from '../Login';

describe('Login', () => {
  test('should render welcome message', () => {
    const { getByText } = render(<Login />);

    expect(
      getByText(/To use this app you need to sign in using a web3 wallet./),
    ).toBeInTheDocument();
    expect(
      getByText(
        /Then, you'll be able to use your wallet to add multiple addresses \(even from different blockchains\) to this app and see up-to-date information about them anytime you login./,
      ),
    ).toBeInTheDocument();
  });

  test('should render "Welcome!" title in Card component', () => {
    const { getByText } = render(<Login />);

    expect(getByText('Welcome!')).toBeInTheDocument();
  });

  test('should render DynamicWidget', () => {
    const { getByText } = render(<Login />);

    expect(getByText('Connect your wallet')).toBeInTheDocument();
  });
});
