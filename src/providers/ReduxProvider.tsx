import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit/';
import { transactionsApi } from 'services/transactions';
import { walletInfoApi } from 'services/walletInfo';

export const store = configureStore({
  reducer: {
    [transactionsApi.reducerPath]: transactionsApi.reducer,
    [walletInfoApi.reducerPath]: walletInfoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      transactionsApi.middleware,
      walletInfoApi.middleware,
    ]),
});

type Props = {
  children: React.ReactNode;
};

export const ReduxProvider = ({ children }: Props) => (
  <Provider store={store}>{children}</Provider>
);
