import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react';

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: import.meta.env.VITE_DYNAMIC_SDK_KEY,
    }}
  >
    <div>
      <DynamicWidget />
      <div>App</div>
    </div>
  </DynamicContextProvider>
);

export default App;
