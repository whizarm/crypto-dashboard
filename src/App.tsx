import {
  DynamicAuthProvider,
  MuiThemeProvider,
  QueryProvider,
  RoutingProvider,
} from 'providers';

const App = () => (
  <DynamicAuthProvider>
    <MuiThemeProvider>
      <QueryProvider>
        <RoutingProvider />
      </QueryProvider>
    </MuiThemeProvider>
  </DynamicAuthProvider>
);

export default App;
