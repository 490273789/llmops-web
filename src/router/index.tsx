import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { NotFound } from '@/pages';
import { Suspense, type ReactNode } from 'react';
import { Loading } from '../components';
import { AuthLayout, MainLayout, Layout } from '../layouts';
import Dashboard from '../pages/dashboard';
import Apps from '../pages/apps';
import AppCreate from '../pages/apps/create';
import AppDetail from '../pages/apps/detail';

import Login from '../pages/auth/login';
import Settings from '../pages/settings';
import Configs from '@pages/configs/configs';

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
