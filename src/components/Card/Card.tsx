import { SxProps } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Title } from 'components/Title';

type Props = {
  height?: number;
  title: string;
  children?: React.ReactNode;
  sx?: SxProps;
};

export const Card = ({ children, height, title, sx }: Props) => (
  <Paper
    sx={{
      p: 2,
      rowGap: 1.5,
      display: 'flex',
      flexDirection: 'column',
      height,
      ...sx,
    }}
  >
    <Title>{title}</Title>
    {children}
  </Paper>
);
