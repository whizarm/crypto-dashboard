import { render, fireEvent, waitFor } from '@testing-library/react';
import { CopyToClipboard } from './CopyToClipboard';

Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: vi.fn(),
  },
  writable: true,
});

const sampleValue = 'Sample value';

describe('CopyToClipboard', () => {
  test('should copy value to clipboard and show snackbar message', async () => {
    const { getByRole } = render(<CopyToClipboard value={sampleValue} />);

    const copyButton = getByRole('button');
    fireEvent.click(copyButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(sampleValue);
  });

  test('should show snackbar message', async () => {
    const { getByRole, getByText } = render(
      <CopyToClipboard value={sampleValue} />,
    );

    const copyButton = getByRole('button');
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(getByText('Copied to clipboard')).toBeInTheDocument();
    });
  });
});
