import Transactions from '../components/Transactions';
import TransactionsIcon from '@mui/icons-material/ReceiptLong';

const transactionRoutes = [
  {
    path: '/transactions',
    element: <Transactions />,
    Icon: <TransactionsIcon />,
    title: 'Transactions',
  },
];

export default transactionRoutes;
