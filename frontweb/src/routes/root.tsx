import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Records from '../pages/Records';

function Root() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={'records'} element={<Records />} />
      </Route>
    </Routes>
  );
}

export default Root;
