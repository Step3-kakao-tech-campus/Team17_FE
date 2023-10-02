import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { Reset } from 'styled-reset';
import OnBoarding from './components/organisms/onBoardingList';

const App = () => {
  return (
    <>
      <Reset />
      <Router>
        <Routes>
          <Route path="/onboard" element={<OnBoarding />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/signin" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
