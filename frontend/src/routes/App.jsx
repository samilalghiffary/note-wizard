import Home from '@/pages/notes/Home';
import Trash from '@/pages/notes/Trash';
import Archive from '@/pages/notes/Archive';
import Collaboration from '@/pages/notes/Collabs';
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
