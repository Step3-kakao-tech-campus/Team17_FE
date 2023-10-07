import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { Reset } from 'styled-reset';
import OnBoardingPage from './pages/OnBoardingPage';
import HomePage from './pages/MainPage';
import MainLayout from './components/layouts/MainLayout';

const App = () => {
  return (
    <>
      <Reset />
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/onboard" element={<OnBoardingPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
