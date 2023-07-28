import { Navigate, Outlet } from 'react-router-dom';
import publicRoutes from './publicRoutes';
import protectedRoutes, { STARTING_ROUTE } from './protectedRoutes';
import { LOGIN_ROUTE } from 'features/login/routes';
import { Layout } from 'components/Layout';
import { ErrorBoundary } from 'components/ErrorBoundary';

const getRoutes = (isAuth: boolean) => [
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Layout>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Layout>
      </ErrorBoundary>
    ),
    children: !isAuth
      ? [
          ...publicRoutes,
          {
            path: '/',
            element: <Navigate to={LOGIN_ROUTE} />,
          },
          {
            path: '/*',
            element: <Navigate to={LOGIN_ROUTE} />,
          },
        ]
      : [
          ...protectedRoutes,
          {
            path: '/',
            element: <Navigate to={STARTING_ROUTE} />,
          },
          {
            path: '/*',
            element: <Navigate to={STARTING_ROUTE} />,
          },
        ],
  },
];

export default getRoutes;
