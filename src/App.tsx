import {
  DynamicAuthProvider,
  MuiThemeProvider,
  RoutingProvider,
} from 'providers';

const App = () => (
  <DynamicAuthProvider>
    <MuiThemeProvider>
      <RoutingProvider />
    </MuiThemeProvider>
  </DynamicAuthProvider>
);

export default App;
