import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root'

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
