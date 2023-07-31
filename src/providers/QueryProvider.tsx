import { QUERY_CACHE_TIMEOUT } from 'config';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: QUERY_CACHE_TIMEOUT,
    },
  },
});

type Props = {
  children: React.ReactNode;
};

export const QueryProvider = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
