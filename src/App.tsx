import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import { Reset } from 'styled-reset';
import OnBoarding from './pages/OnBoarding';
import Main from './pages/Main';
import MainLayout from './components/layouts/MainLayout';

const App = () => {
  return (
    <>
      <Reset />
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
          </Route>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/onboard" element={<OnBoarding />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
