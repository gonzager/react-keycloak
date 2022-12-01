import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import FichaContacto from './features/contactos/FichaContacto';
import Contactos from './features/Contactos';
import PrivateRoute from './app/auth/ProtectedRoute';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      {
        path: 'contactos',
        element: (
          <PrivateRoute>
            <Contactos />
          </PrivateRoute>
        ),
      },
      {
        path: 'contactos/:id',
        element: (
          <PrivateRoute>
            <FichaContacto />{' '}
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
