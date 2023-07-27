import {
  DynamicAuthProvider,
  MuiThemeProvider,
  ReduxProvider,
  RoutingProvider,
} from 'providers';

const App = () => (
  <DynamicAuthProvider>
    <MuiThemeProvider>
      <ReduxProvider>
        <RoutingProvider />
      </ReduxProvider>
    </MuiThemeProvider>
  </DynamicAuthProvider>
);

export default App;
