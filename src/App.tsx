import { DynamicWidget } from '@dynamic-labs/sdk-react';
import { DynamicAuthProvider } from 'providers';

const App = () => (
  <DynamicAuthProvider>
    <div>
      <DynamicWidget />
      <div>App</div>
    </div>
  </DynamicAuthProvider>
);

export default App;
