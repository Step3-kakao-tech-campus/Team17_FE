import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import OnBoarding from './pages/OnBoarding';
import Main from './pages/Main';
import MainLayout from './components/layouts/MainLayout';
import ProfilePage from './pages/ProfilePage';
import ChatListPage from './pages/ChatListPage';
import ChatRoomPage from './pages/ChatRoomPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
          </Route>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/onboard" element={<OnBoarding />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chatlist" element={<ChatListPage />} />
          <Route path="/chatroom" element={<ChatRoomPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
