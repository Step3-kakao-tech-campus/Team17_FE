import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import OnBoarding from './pages/OnBoarding';
import Main from './pages/Main';
import ProfilePage from './pages/ProfilePage';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';
import Payment from './pages/Payment';
import Review from './pages/Review';
import Submit from './pages/Submit';
import AuthRoute from './pages/AuthRoute';
import CurrentWalkingMap from './components/organisms/CurrentWalkingMap';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/onboard" element={<OnBoarding />} />
        <Route path="/" element={<Main />} />
        <Route element={<AuthRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/walking" element={<CurrentWalkingMap />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/review" element={<Review />} />
          <Route path="/submit" element={<Submit />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
