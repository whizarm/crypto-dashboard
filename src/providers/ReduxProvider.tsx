import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit/';
import { transactionsApi } from 'services/transactions';

export const store = configureStore({
  reducer: {
    [transactionsApi.reducerPath]: transactionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([transactionsApi.middleware]),
});

type Props = {
  children: React.ReactNode;
};

export const ReduxProvider = ({ children }: Props) => (
  <Provider store={store}>{children}</Provider>
);
