import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage';
import Root from './Components/Root';
import SearchPage from './Pages/SearchPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/search',
        element: <SearchPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
