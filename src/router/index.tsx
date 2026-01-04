import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Suspense, lazy, type ReactNode } from 'react';
import { Loading } from '../components';

// 懒加载布局组件
const MainLayout = lazy(() => import('../layouts/MainLayout'));
const AuthLayout = lazy(() => import('../layouts/AuthLayout'));
const Layout = lazy(() => import('../layouts/Layout'));

// 懒加载页面组件
const Dashboard = lazy(() => import('../pages/dashboard'));
const Apps = lazy(() => import('../pages/apps'));
const AppCreate = lazy(() => import('../pages/apps/create'));
const AppDetail = lazy(() => import('../pages/apps/detail'));
const Login = lazy(() => import('../pages/auth/login'));
const Settings = lazy(() => import('../pages/settings'));
const Configs = lazy(() => import('@pages/configs/configs'));
const NotFound = lazy(() => import('../pages/error/NotFound'));

// 懒加载包装器
function LazyLoad({ children }: { children: ReactNode }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <LazyLoad>
        <MainLayout />
      </LazyLoad>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: (
          <LazyLoad>
            <Dashboard />
          </LazyLoad>
        ),
      },
      {
        path: 'apps',
        children: [
          {
            index: true,
            element: (
              <LazyLoad>
                <Apps />
              </LazyLoad>
            ),
          },
          {
            path: 'create',
            element: (
              <LazyLoad>
                <AppCreate />
              </LazyLoad>
            ),
          },
          {
            path: ':id',
            element: (
              <LazyLoad>
                <AppDetail />
              </LazyLoad>
            ),
          },
        ],
      },
      {
        path: 'settings',
        element: (
          <LazyLoad>
            <Settings />
          </LazyLoad>
        ),
      },
    ],
  },
  {
    path: '/auth',
    element: (
      <LazyLoad>
        <AuthLayout />
      </LazyLoad>
    ),
    children: [
      {
        path: 'login',
        element: (
          <LazyLoad>
            <Login />
          </LazyLoad>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Navigate to="/auth/login" replace />,
  },
  {
    path: '/space',
    element: (
      <LazyLoad>
        <Layout />
      </LazyLoad>
    ),
    children: [
      {
        path: 'configs',
        element: (
          <LazyLoad>
            <Configs />
          </LazyLoad>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <LazyLoad>
        <NotFound />
      </LazyLoad>
    ),
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}

export default router;
