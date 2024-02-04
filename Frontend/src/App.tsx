import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Genre from './components/Genre/Genre';
import Statistics from './components/Statistics/Statistics';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/genre/:id' element={<Genre />} />
          <Route path='/status' element={<Statistics />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
