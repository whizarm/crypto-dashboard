import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MenuItem, { Props } from '../MenuItem';

const defaultProps = {
  Icon: <svg data-testid="test-icon" />,
  isSelected: true,
  path: '/dashboard',
  title: 'Dashboard',
};

describe('MenuItem', () => {
  const renderComponent = (props?: Partial<Props>) =>
    render(
      <BrowserRouter>
        <MenuItem {...defaultProps} {...props} />
      </BrowserRouter>,
    );

  test('should render the menu item with correct title and icon', () => {
    const { getByText, getByTestId } = renderComponent();

    const menuItemText = getByText(defaultProps.title);
    const menuItemIcon = getByTestId('test-icon');
    expect(menuItemText).toBeInTheDocument();
    expect(menuItemIcon).toBeInTheDocument();
  });

  test('should have the correct path in the Link component', () => {
    const { getByRole } = renderComponent();

    const menuItemLink = getByRole('link');
    expect(menuItemLink).toHaveAttribute('href', defaultProps.path);
  });

  test('should correctly display as selected when is selected', () => {
    const { getByRole } = renderComponent();

    const menuItemLink = getByRole('link');
    expect(menuItemLink).toHaveClass('Mui-selected');
  });

  test('should correctly display as not selected when it is not selected', () => {
    const { getByRole } = renderComponent({ isSelected: false });

    const menuItemLink = getByRole('link');
    expect(menuItemLink).not.toHaveClass('Mui-selected');
  });
});
