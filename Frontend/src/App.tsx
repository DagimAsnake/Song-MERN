import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/Home/Home';
import Genre from './components/Genre/Genre';
import Statistics from './components/Statistics/Statistics';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/genres' element={<Genre />} />
          <Route path='/status' element={<Statistics />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
