import { Navigate } from 'react-router-dom';
import protectedRoutes, { STARTING_ROUTE } from './protectedRoutes';
import loginRoutes, { LOGIN_ROUTE } from 'features/login/routes';

const getRoutes = (isAuth: boolean) =>
  !isAuth
    ? [
        ...loginRoutes,
        {
          path: '/*',
          element: <Navigate to={LOGIN_ROUTE} />,
        },
      ]
    : [
        ...protectedRoutes,
        {
          path: '/*',
          element: <Navigate to={STARTING_ROUTE} />,
        },
      ];

export default getRoutes;
