import { render, fireEvent } from '@testing-library/react';
import * as hooks from 'hooks';
import dashboardRoutes from 'features/dashboard/routes';
import { Layout } from '../Layout';

vi.spyOn(hooks, 'useCurrentRoute').mockImplementation(() =>
  dashboardRoutes.find((r) => r.path === '/dashboard'),
);
vi.mock('../MenuItem.tsx', () => ({
  default: ({ children }: { children: JSX.Element }) => <a>{children}</a>,
}));

describe('Layout', () => {
  test('should render children content', () => {
    const contentText = 'Test Content';
    const { getByText } = render(
      <Layout>
        <div>{contentText}</div>
      </Layout>,
    );

    const contentElement = getByText(contentText);
    expect(contentElement).toBeInTheDocument();
  });

  test('should toggle the menu drawer when the app bar button is clicked', () => {
    const { getByLabelText, getByTestId } = render(
      <Layout>sampleAppContent</Layout>,
    );

    const menuButton = getByLabelText('open drawer');
    const toggleChevron = getByTestId('ChevronLeftIcon');

    expect(toggleChevron).toBeVisible();

    fireEvent.click(menuButton);

    expect(toggleChevron).toHaveAttribute('aria-hidden', 'true');
  });
});
