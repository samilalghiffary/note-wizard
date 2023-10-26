import Home from '@/pages/notes/Home';
import Trash from '@/pages/notes/Trash';
import Archive from '@/pages/notes/Archive';
import Collaboration from '@/pages/notes/Collabs';
import MobileIndex from '@/pages/auth/mobile/Index';
import MobileAuth from '@/pages/auth/mobile/MobileAuth';
import DesktopAuth from '@/pages/auth/desktop/DesktopAuth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const isDesktop = window.matchMedia('(min-width: 768px)').matches;

const router = createBrowserRouter([
  {
    path: '/',
    element: isDesktop ? <DesktopAuth isLogin={true} /> : <MobileIndex />,
  },
  {
    path: '/notes',
    element: <Home />,
  },
  {
    path: '/archive',
    element: <Archive />,
  },
  {
    path: '/collaboration',
    element: <Collaboration />,
  },
  {
    path: '/trash',
    element: <Trash />,
  },
  {
    path: '/login',
    element: isDesktop ? <DesktopAuth isLogin={true} /> : <MobileAuth isLogin={true} />,
  },
  {
    path: '/register',
    element: isDesktop ? <DesktopAuth isLogin={false} /> : <MobileAuth isLogin={false} />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
