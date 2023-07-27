import { Box, Card, Grid, Typography, SvgIcon } from '@mui/material';
import { indigo, grey } from '@mui/material/colors';

type Props = {
  title: string;
  value: number | string | null;
  Icon: typeof SvgIcon | string;
};

const Statistic = ({ title, value, Icon }: Props) => (
  <Grid item xs={12} sm={6} md={12}>
    <Card sx={{ p: 1 }}>
      <Grid container columnSpacing={1}>
        <Grid
          item
          xs={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={0.5}
        >
          <Box
            sx={{
              p: 1.3,
              display: 'flex',
              background: indigo['50'],
              borderRadius: '4px',
            }}
          >
            {typeof Icon === 'string' ? (
              <img src={Icon} height={40} width={40} />
            ) : (
              <Icon sx={{ fontSize: 40 }} color="primary" />
            )}
          </Box>
        </Grid>
        <Grid
          item
          xs={9}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography color={grey[800]} fontWeight={600} fontSize="20px">
            {value !== 0 && !value ? '-' : value}
          </Typography>
          <Typography variant="h6" color={grey[500]} fontSize="16px">
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  </Grid>
);

export default Statistic;
