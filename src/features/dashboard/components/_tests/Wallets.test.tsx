import { render, fireEvent } from '@testing-library/react';
import * as dynamic from '@dynamic-labs/sdk-react';
import dynamicContext from 'test/_mocks/dynamicContext';
import Wallets from '../Wallets';

describe('Wallets', () => {
  test('should render connected wallets', () => {
    const { getAllByText } = render(<Wallets />);
    const getAllByTextHash = (hash: string) =>
      getAllByText(
        (_, element: Element | null) => element?.textContent === hash,
      );

    expect(
      getAllByTextHash('0x62eA30cFe51b1D1E7F0a8d3244Af46B3A91332f1').length,
    ).toBeGreaterThan(0);
    expect(
      getAllByTextHash('0x62eA30cFe51b1D1E7F0a8d3244Af46B3A91332f2').length,
    ).toBeGreaterThan(0);

    expect(getAllByText('EVM').length).toBeGreaterThan(0);
  });

  test('should render link another wallet button', () => {
    const { getByText } = render(<Wallets />);

    expect(getByText('Link another wallet')).toBeInTheDocument();
  });

  test('should open Dynamic modal when "Link another wallet" button is clicked', () => {
    const setShowDynamicUserProfileMock = vi.fn();
    vi.spyOn(dynamic, 'useDynamicContext').mockImplementation(() => ({
      ...dynamicContext,
      setShowDynamicUserProfile: setShowDynamicUserProfileMock,
    }));

    const { getByText } = render(<Wallets />);

    fireEvent.click(getByText('Link another wallet'));

    expect(setShowDynamicUserProfileMock).toHaveBeenCalledWith(true);
  });
});
