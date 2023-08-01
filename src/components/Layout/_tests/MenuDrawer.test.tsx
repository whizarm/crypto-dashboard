import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as hooks from 'hooks';
import dashboardRoutes from 'features/dashboard/routes';
import MenuDrawer from '../MenuDrawer';

vi.spyOn(hooks, 'useCurrentRoute').mockImplementation(() =>
  dashboardRoutes.find((r) => r.path === '/dashboard'),
);

describe('MenuDrawer', () => {
  const renderComponent = (props: {
    isOpen: boolean;
    toggleDrawer: () => void;
  }) =>
    render(
      <BrowserRouter>
        <MenuDrawer {...props} />
      </BrowserRouter>,
    );

  test('should render the menu drawer when open is true', () => {
    const { getByRole } = renderComponent({
      isOpen: true,
      toggleDrawer: () => {},
    });

    const menuDrawer = getByRole('complementary', { hidden: true });
    expect(menuDrawer).toBeVisible();
  });

  test('should not render the menu drawer when open is false', () => {
    const { getByTestId } = renderComponent({
      isOpen: false,
      toggleDrawer: () => {},
    });

    const toggleChevron = getByTestId('ChevronLeftIcon');
    expect(toggleChevron).toHaveAttribute('aria-hidden', 'true');
  });

  test('should call toggleDrawer when the close icon button is clicked', () => {
    const toggleDrawerMock = vi.fn();
    const { getByTestId } = renderComponent({
      isOpen: true,
      toggleDrawer: toggleDrawerMock,
    });

    const toggleChevron = getByTestId('ChevronLeftIcon');
    fireEvent.click(toggleChevron);

    expect(toggleDrawerMock).toHaveBeenCalledTimes(1);
  });
});
