import {
  Box,
  Card,
  CircularProgress,
  Grid,
  SvgIcon,
  Typography,
} from '@mui/material';
import { indigo, grey } from '@mui/material/colors';
import unknownIcon from 'assets/unknownIcon.png';

type Props = {
  Icon: typeof SvgIcon | string;
  isLoading: boolean;
  title: string;
  value: number | string | null;
};

const Statistic = ({ Icon, isLoading, title, value }: Props) => (
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
              <object data={Icon} type="image/svg+xml" height={40} width={40}>
                <img src={unknownIcon} height={40} width={40} />
              </object>
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
          <Typography
            component="div"
            color={grey[800]}
            fontWeight={600}
            fontSize="20px"
          >
            {isLoading && (
              <Box display="flex" pl={1} height={30}>
                <CircularProgress size={25} />
              </Box>
            )}
            {!isLoading && (value !== 0 && !value ? '-' : value)}
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
