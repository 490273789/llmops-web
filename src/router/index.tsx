import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, NotFound } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}

export default router;
