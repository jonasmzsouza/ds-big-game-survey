import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Home from './pages/Home';
import Records from './pages/Records';
import { recordsLoader } from './requests/records';

const router = createBrowserRouter([
  {
    path: '*',
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: 'records',
        Component: Records,
        loader: recordsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
