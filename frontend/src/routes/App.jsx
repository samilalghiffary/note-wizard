import Home from '@/pages/notes/Home';
import Trash from '@/pages/notes/Trash';
import Archive from '@/pages/notes/Archive';
import Login from '@/pages/auth/desktop/Login';
import Collaboration from '@/pages/notes/Collabs';
import Register from '@/pages/auth/desktop/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
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
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
