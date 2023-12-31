import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Charts from './pages/Charts';
import Home from './pages/Home';
import Records from './pages/Records';
import { recordsLoader } from './requests/records';
import { chartsLoader } from './requests/charts';
import { PageContext, PageContextData } from './PageContext';
import { useState } from 'react';

const App = () => {
  const [pageContextData, setPageContextData] = useState<PageContextData>({
    page: 0,
  });

  const router = createBrowserRouter([
    {
      path: '*',
      Component: Root,
      children: [
        { index: true, Component: Home },
        {
          path: 'records',
          Component: Records,
          loader: recordsLoader(pageContextData.page),
        },
        { path: 'charts', Component: Charts, loader: chartsLoader },
      ],
    },
  ]);

  return (
    <PageContext.Provider value={{ pageContextData, setPageContextData }}>
      <RouterProvider router={router} />
    </PageContext.Provider>
  );
};

export default App;
