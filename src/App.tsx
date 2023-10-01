import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import { Reset } from 'styled-reset';
import OnBoarding from './pages/onboarding/OnBoarding';

const App = () => {
  return (
    <>
      <Reset />
      <Router>
        <Routes>
          <Route path="/onBoard" element={<OnBoarding />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/signin" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
