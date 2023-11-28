import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Home from './pages/Home';
import Records from './pages/Records';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { path: '*', Component: Home },
      { path: 'records', Component: Records },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
