import { renderHook } from '@testing-library/react';
import * as dynamic from '@dynamic-labs/sdk-react';
import * as router from 'react-router-dom';
import { useCurrentRoute } from '../useCurrentRoute';
import dynamicContext from 'test/_mocks/dynamicContext';
import publicRoutes from 'routes/publicRoutes';
import protectedRoutes from 'routes/protectedRoutes';

const ROUTES = {
  login: {
    pathname: '/login',
    search: '',
    hash: '',
    state: null,
    key: 'l9ymz9f8',
  },
  dashboard: {
    pathname: '/dashboard',
    search: '',
    hash: '',
    state: null,
    key: '8jo5bhl4',
  },
};

const { useLocation } = vi.hoisted(() => ({
  useLocation: vi.fn(),
}));

vi.mock('react-router-dom', async () => {
  const actual: typeof router = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLocation,
  };
});

describe('useCurrentRoute', () => {
  test('should return dashboard route when on dashboard', () => {
    vi.spyOn(router, 'useLocation').mockReturnValueOnce(ROUTES.dashboard);

    const { result } = renderHook(() => useCurrentRoute());

    expect(result.current).toEqual(
      protectedRoutes.find((r) => r.path === '/dashboard'),
    );
  });

  test('should return login route when on login', () => {
    vi.spyOn(router, 'useLocation').mockReturnValueOnce(ROUTES.login);
    vi.spyOn(dynamic, 'useDynamicContext').mockImplementation(() => ({
      ...dynamicContext,
      isAuthenticated: false,
    }));

    const { result } = renderHook(() => useCurrentRoute());

    expect(result.current).toEqual(
      publicRoutes.find((r) => r.path === '/login'),
    );
  });
});
