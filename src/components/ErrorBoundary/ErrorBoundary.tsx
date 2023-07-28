import { Alert, AlertTitle } from '@mui/material';
import { ErrorBoundary as ErrBoundary } from 'react-error-boundary';

type Props = {
  children: React.ReactNode;
};

export const ErrorBoundary = ({ children }: Props) => (
  <ErrBoundary
    fallbackRender={({ error }) => {
      return (
        <Alert severity="error">
          <AlertTitle>Something went wrong</AlertTitle>
          {error.message}
        </Alert>
      );
    }}
  >
    {children}
  </ErrBoundary>
);
