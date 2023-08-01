import { render } from '@testing-library/react';
import { CryptoAddressWithClipboard } from './CryptoAddressWithClipboard';

const sampleAddress = '0x123456789abcdef';

describe('CryptoAddressWithClipboard', () => {
  test('should render the CryptoAddressWithClipboard component correctly', () => {
    const { getByRole, getByText } = render(
      <CryptoAddressWithClipboard>{sampleAddress}</CryptoAddressWithClipboard>,
    );

    expect(getByText('0x123456789abc')).toBeInTheDocument();
    expect(getByText('def')).toBeInTheDocument();

    const copyAllIcon = getByRole('button');
    expect(copyAllIcon).toBeInTheDocument();
  });
});
