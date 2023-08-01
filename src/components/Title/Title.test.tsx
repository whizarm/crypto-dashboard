import { render } from '@testing-library/react';
import { Title } from './Title';

describe('Title', () => {
  test('should render the title with the correct children', () => {
    const testTitle = 'Test Title';
    const { getByText } = render(<Title>{testTitle}</Title>);
    const titleElement = getByText(testTitle);
    expect(titleElement).toBeInTheDocument();
  });

  test('should render the title with the correct component and variant', () => {
    const testTitle = 'Test Title';
    const { getByText } = render(<Title>{testTitle}</Title>);
    const titleElement = getByText(testTitle);

    expect(titleElement.tagName.toLowerCase()).toBe('h2');
    expect(titleElement).toHaveClass('MuiTypography-h6');
  });
});
