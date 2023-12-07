import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Charts from '../pages/Charts';
import Home from '../pages/Home';
import Records from '../pages/Records';

function Root() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={'records'} element={<Records />} />
        <Route path={'charts'} element={<Charts />} />
      </Route>
    </Routes>
  );
}

export default Root;
