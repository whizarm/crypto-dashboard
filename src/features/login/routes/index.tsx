import Login from '../components/Login';

export const LOGIN_ROUTE = '/login';

const loginRoutes = [
  {
    path: LOGIN_ROUTE,
    element: <Login />,
    title: 'Crypto Dashboard',
  },
];

export default loginRoutes;
