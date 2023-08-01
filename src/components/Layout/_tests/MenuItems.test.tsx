import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as hooks from 'hooks';
import routes from 'routes/protectedRoutes';
import MenuItems from '../MenuItems';

vi.spyOn(hooks, 'useCurrentRoute').mockImplementation(() =>
  routes.find((r) => r.path === '/dashboard'),
);

describe('MenuItems', () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <MenuItems />
      </BrowserRouter>,
    );

  test('should render menu items with correct titles and icons', () => {
    const { getByText, getByTestId } = renderComponent();

    const dashboardMenuItemText = getByText('Dashboard');
    const dashboardMenuItemIcon = getByTestId('DashboardIcon');
    expect(dashboardMenuItemText).toBeInTheDocument();
    expect(dashboardMenuItemIcon).toBeInTheDocument();

    const transactionsMenuItemText = getByText('Transactions');
    const transactionsMenuItemIcon = getByTestId('ReceiptLongIcon');
    expect(transactionsMenuItemText).toBeInTheDocument();
    expect(transactionsMenuItemIcon).toBeInTheDocument();
  });

  test('should set "isSelected" prop correctly for the active menu item', () => {
    const { getByRole } = renderComponent();

    const dashboardMenuItem = getByRole('link', { name: 'Dashboard' });
    expect(dashboardMenuItem).toHaveClass('Mui-selected');

    const transactionsMenuItem = getByRole('link', { name: 'Transactions' });
    expect(transactionsMenuItem).not.toHaveClass('Mui-selected');
  });
});
