import { ThemeProvider } from '@mui/material/styles';
import theme from 'config/theme';

type Props = {
  children: React.ReactNode;
};

export const MuiThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
