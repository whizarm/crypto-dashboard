import { render } from '@testing-library/react';
import * as dynamic from '@dynamic-labs/sdk-react';
import * as mui from '@mui/material';
import * as hooks from 'hooks';
import dynamicContext from 'test/_mocks/dynamicContext';
import dashboardRoutes from 'features/dashboard/routes';
import AppBar, { Props } from '../AppBar';

const dashboardRoute = dashboardRoutes.find((r) => r.path === '/dashboard');
vi.spyOn(hooks, 'useCurrentRoute').mockImplementation(() =>
  dashboardRoutes.find((r) => r.path === '/dashboard'),
);

const mockUseMediaQuery = vi.hoisted(() => vi.fn());
vi.mock('@mui/material', async () => {
  const actual: typeof mui = await vi.importActual('@mui/material');
  return {
    ...actual,
    useMediaQuery: mockUseMediaQuery,
  };
});

const defaultProps = {
  isOpen: false,
  toggleDrawer: () => {},
};

describe('AppBar', () => {
  const renderComponent = (props?: Partial<Props>) =>
    render(<AppBar {...defaultProps} {...props} />);

  test('should render the title correctly', () => {
    const title = dashboardRoute!.title;
    const { getByText } = renderComponent();

    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test('should render the dynamic widget button', () => {
    const { getByText } = renderComponent();

    const dynamicWidgetButton = getByText('Connect your wallet');
    expect(dynamicWidgetButton).toBeInTheDocument();
  });

  test('should render the account circle button when authenticated and on small screen', () => {
    mockUseMediaQuery.mockReturnValue(true);

    const { getByLabelText } = renderComponent();

    const accountCircleButton = getByLabelText('open login modal');
    expect(accountCircleButton).toBeInTheDocument();
  });

  test('should not render the account circle button when authenticated and not on small screen', () => {
    mockUseMediaQuery.mockReturnValue(false);

    const { queryByLabelText } = renderComponent();

    const accountCircleButton = queryByLabelText('open login modal');
    expect(accountCircleButton).toBeNull();
  });

  test('should not render the account circle button when not authenticated', () => {
    vi.spyOn(dynamic, 'useDynamicContext').mockImplementation(() => ({
      ...dynamicContext,
      isAuthenticated: false,
    }));

    const { queryByLabelText } = renderComponent();

    const accountCircleButton = queryByLabelText('open login modal');
    expect(accountCircleButton).toBeNull();
  });
});
