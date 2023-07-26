import { DynamicContextProvider } from '@dynamic-labs/sdk-react';

type Props = {
  children: React.ReactNode;
};

export const DynamicAuthProvider = ({ children }: Props) => (
  <DynamicContextProvider
    settings={{
      environmentId: import.meta.env.VITE_DYNAMIC_SDK_KEY,
    }}
  >
    {children}
  </DynamicContextProvider>
);
