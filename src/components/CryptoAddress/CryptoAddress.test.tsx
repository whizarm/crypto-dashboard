import { render } from '@testing-library/react';
import { CryptoAddress } from './CryptoAddress';

const sampleAddress = '0x123456789abcdef';

describe('CryptoAddress', () => {
  test('should render the CryptoAddress component correctly', () => {
    const { getByText } = render(
      <CryptoAddress>{sampleAddress}</CryptoAddress>,
    );

    expect(getByText('0x123456789abc')).toBeInTheDocument();
    expect(getByText('def')).toBeInTheDocument();
  });
});
