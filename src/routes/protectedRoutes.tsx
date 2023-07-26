import dashboardRoutes from 'features/dashboard/routes';
import transactionsRoutes from 'features/transactions/routes';

export const STARTING_ROUTE = '/dashboard';

const protectedRoutes = [...dashboardRoutes, ...transactionsRoutes];

export default protectedRoutes;
