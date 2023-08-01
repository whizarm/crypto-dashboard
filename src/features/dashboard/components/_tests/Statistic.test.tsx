import { render } from '@testing-library/react';
import Statistic, { Props } from '../Statistic';

const defaultProps = {
  Icon: 'sampleIconUrl',
  isLoading: false,
  title: 'Total Transactions',
  value: 12345,
};

describe('Statistic', () => {
  const renderComponent = (props?: Partial<Props>) =>
    render(<Statistic {...defaultProps} {...props} />);

  test('should render icon, title, and value', () => {
    const { getByText, getByAltText } = renderComponent();

    expect(getByAltText('blockchain icon')).toBeInTheDocument();
    expect(getByText('Total Transactions')).toBeInTheDocument();
    expect(getByText('12345')).toBeInTheDocument();
  });

  test('should render "-" when value is null', () => {
    const { getByText } = renderComponent({ value: null });
    expect(getByText('-')).toBeInTheDocument();
  });

  test('should render 0 when value is 0', () => {
    const { getByText } = renderComponent({ value: 0 });
    expect(getByText(0)).toBeInTheDocument();
  });

  test('should render CircularProgress when isLoading is true', () => {
    const { getByRole } = renderComponent({ isLoading: true });
    expect(getByRole('progressbar')).toBeInTheDocument();
  });
});
