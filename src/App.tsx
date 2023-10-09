import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import OnBoarding from './pages/OnBoarding';
import Main from './pages/Main';
// import MainLayout from './components/layouts/MainLayout';
import ProfilePage from './pages/ProfilePage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SetStateAction } from 'react';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/onboard" element={<OnBoarding />} />
          {/* <Route element={<MainLayout />}> */}
          <Route path="/" element={<Main />} />
          {/* </Route> */}
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
