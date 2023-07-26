import { useDynamicContext } from '@dynamic-labs/sdk-react';
import { matchRoutes, useLocation } from 'react-router-dom';
import publicRoutes from 'routes/publicRoutes';
import protectedRoutes from 'routes/protectedRoutes';

export const useCurrentRoute = () => {
  const location = useLocation();
  const { isAuthenticated } = useDynamicContext();

  const routes = isAuthenticated ? protectedRoutes : publicRoutes;
  const currentRoute = matchRoutes(routes, location)?.find(
    (route) => route.pathname === location.pathname,
  )?.route;

  return currentRoute;
};
