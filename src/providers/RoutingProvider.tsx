import getRoutes from 'routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDynamicContext } from '@dynamic-labs/sdk-react';

export const RoutingProvider = () => {
  const { isAuthenticated } = useDynamicContext();
  const router = createBrowserRouter(getRoutes(isAuthenticated));

  return <RouterProvider router={router} />;
};
