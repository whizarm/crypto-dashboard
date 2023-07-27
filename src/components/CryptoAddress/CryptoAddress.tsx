import { Typography } from '@mui/material';

type Props = {
  children: string;
};

export const CryptoAddress = ({ children }: Props) => {
  const last3 = children.slice(-3);
  const withoutLast3 = children.slice(0, -3);

  return (
    <>
      <Typography
        component="span"
        noWrap
        sx={{ minWidth: '6ch', userSelect: 'none' }}
      >
        {withoutLast3}
      </Typography>
      <Typography component="span" sx={{ userSelect: 'none' }}>
        {last3}
      </Typography>
    </>
  );
};
