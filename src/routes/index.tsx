import { Navigate } from 'react-router-dom';
import publicRoutes from './publicRoutes';
import protectedRoutes, { STARTING_ROUTE } from './protectedRoutes';
import { LOGIN_ROUTE } from 'features/login/routes';
import { Layout } from 'components/Layout';

const getRoutes = (isAuth: boolean) =>
  !isAuth
    ? [
        {
          path: '/',
          element: <Layout />,
          children: [
            ...publicRoutes,
            {
              path: '/',
              element: <Navigate to={LOGIN_ROUTE} />,
            },
            {
              path: '/*',
              element: <Navigate to={LOGIN_ROUTE} />,
            },
          ],
        },
      ]
    : [
        {
          path: '/',
          element: <Layout />,
          children: [
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
