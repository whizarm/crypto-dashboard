import Paper from '@mui/material/Paper';
import { Title } from 'components/Title';

type Props = {
  height?: number;
  title: string;
  children: React.ReactNode;
};

export const Card = ({ children, height, title }: Props) => (
  <Paper
    sx={{
      p: 2,
      rowGap: 1.5,
      display: 'flex',
      flexDirection: 'column',
      height,
    }}
  >
    <Title>{title}</Title>
    {children}
  </Paper>
);
