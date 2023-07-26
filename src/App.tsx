import { DynamicAuthProvider, RoutingProvider } from 'providers';

const App = () => (
  <DynamicAuthProvider>
    <RoutingProvider />
  </DynamicAuthProvider>
);

export default App;
