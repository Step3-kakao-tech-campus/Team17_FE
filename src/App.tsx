import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import OnBoarding from './pages/OnBoarding';
import Main from './pages/Main';
import ProfilePage from './pages/ProfilePage';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';
import MatchList from './pages/MatchList';
import Apply from './pages/Apply';
import Payment from './pages/Payment';
import Review from './pages/Review';
import Submit from './pages/Submit';
import ApplySubmit from './pages/ApplySubmit';
import AuthRoute from './pages/AuthRoute';
import CurrentWalkingMap from './components/organisms/CurrentWalkingMap';
import DetailNotification from './pages/DetailNotificationPage';
import { Map } from './pages/TestPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/onboard" element={<OnBoarding />} />
        <Route path="/" element={<Main />} />
        <Route element={<AuthRoute />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/walking" element={<CurrentWalkingMap />} />
        <Route path="/matchlist" element={<MatchList />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/review" element={<Review />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/applysubmit" element={<ApplySubmit />} />
        <Route path="/test" element={<Map />} />
        <Route path="/notification" element={<DetailNotification />} />
      </Routes>
    </Router>
  );
};

export default App;
