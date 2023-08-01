import { render } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  test('should render the Card component without title', () => {
    const { getByText } = render(<Card>Card content</Card>);

    expect(getByText('Card content')).toBeInTheDocument();
  });

  test('should render the Card component with title', () => {
    const { getByRole, getByText } = render(
      <Card title="Card Title">Card content</Card>,
    );

    expect(getByRole('heading')).toHaveTextContent('Card Title');
    expect(getByText('Card content')).toBeInTheDocument();
  });

  test('should render the Card component with custom height', () => {
    const { getByText } = render(<Card height={100}>Card content</Card>);

    expect(getByText('Card content')).toBeInTheDocument();
    expect(getByText('Card content')).toHaveStyle('height: 100px');
  });

  test('should render the Card component with custom styles', () => {
    const { getByText } = render(
      <Card sx={{ display: 'none' }}>Card content</Card>,
    );

    expect(getByText('Card content')).toBeInTheDocument();
    expect(getByText('Card content')).toHaveStyle('display: none');
  });
});
