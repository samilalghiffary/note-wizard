import Notes from '@/pages/notes/Home';
import Trash from '@/pages/notes/Trash';
import Archive from '@/pages/notes/Archive';
import { useToken } from '@/utils/context/Token';
import Collaboration from '@/pages/notes/Collabs';
import MobileIndex from '@/pages/auth/mobile/Index';
import MobileAuth from '@/pages/auth/mobile/MobileAuth';
import DesktopAuth from '@/pages/auth/desktop/DesktopAuth';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

const App = () => {
  const { accessToken } = useToken();

  const router = createBrowserRouter([
    {
      path: '/',
      element: accessToken ? (
        <Navigate to="/notes" />
      ) : isDesktop ? (
        <DesktopAuth isLogin={true} />
      ) : (
        <MobileIndex />
      ),
    },
    {
      path: '/notes',
      element: !accessToken ? <Navigate to="/login" /> : <Notes />,
    },
    {
      path: '/archive',
      element: !accessToken ? <Navigate to="/login" /> : <Archive />,
    },
    {
      path: '/collaboration',
      element: !accessToken ? <Navigate to="/login" /> : <Collaboration />,
    },
    {
      path: '/trash',
      element: !accessToken ? <Navigate to="/login" /> : <Trash />,
    },
    {
      path: '/login',
      element: accessToken ? (
        <Navigate to="/notes" />
      ) : isDesktop ? (
        <DesktopAuth isLogin={true} />
      ) : (
        <MobileAuth isLogin={true} />
      ),
    },
    {
      path: '/register',
      element: accessToken ? (
        <Navigate to="/notes" />
      ) : isDesktop ? (
        <DesktopAuth isLogin={false} />
      ) : (
        <MobileAuth isLogin={false} />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
