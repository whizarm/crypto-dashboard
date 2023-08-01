import { render } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

const TestComponentWithError = () => {
  throw new Error('Test Error');
};

vi.spyOn(console, 'error').mockImplementation(() => {});

describe('ErrorBoundary', () => {
  const renderComponentWithError = () =>
    render(
      <ErrorBoundary>
        <TestComponentWithError />
      </ErrorBoundary>,
    );

  test('should render error when an error is thrown', () => {
    const { getByText } = renderComponentWithError();

    const errorTitle = getByText('Something went wrong');
    expect(errorTitle).toBeInTheDocument();
  });
  test('should render error message when an error is thrown', () => {
    const { getByText } = renderComponentWithError();

    const errorMessage = getByText('Test Error');
    expect(errorMessage).toBeInTheDocument();
  });

  test('should render the children when no error is thrown', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>,
    );

    const childComponent = getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
  });
});
