import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { Reset } from 'styled-reset';
import OnBoarding from './pages/onboarding/OnBoarding';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <>
      <Reset />
      <Router>
        <Routes>
          <Route path="/onBoard" element={<OnBoarding />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
