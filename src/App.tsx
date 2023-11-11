import { Routes, Route, useLocation } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import OnBoarding from './pages/OnBoarding';
import Main from './pages/Main';
import ProfilePage from './pages/ProfilePage';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';
import MatchList from './pages/MatchList';
import Apply from './pages/Apply';
import ApplyInquiry from './pages/ApplyInquiry';
import Payment from './pages/Payment';
import Review from './pages/Review';
import Submit from './pages/Submit';
import ApplySubmit from './pages/ApplySubmit';
import AuthRoute from './pages/AuthRoute';
import CurrentWalkingMap from './components/organisms/CurrentWalkingMap';
import WriteNotificationPage from './pages/WriteNotificationPage';
import DetailNotificationPage from './pages/DetailNotificationPage';
import { AnimatePresence } from 'framer-motion';
import './styles/templates/animation.css';
import RouteTransition from './components/templates/RouteTransition';
import NotFound from './pages/NotFound';
import { Suspense } from 'react';
import PageLoading from './components/atoms/PageLoading';
import SkeletonList from './components/organisms/SkeletonList';
import { Spinner } from './styles/atoms/PageLoading';

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <RouteTransition location={location}>
        <Routes location={location} key={location.pathname}>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/onboard" element={<OnBoarding />} />
          <Route path="/" element={<Main />} />
          <Route element={<AuthRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/chatlist" element={<ChatList />} />
            <Route path="/chatroom" element={<ChatRoom />} />
            <Route path="/walking" element={<CurrentWalkingMap />} />
            <Route path="/matchlist" element={<MatchList />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/applyinquiry" element={<ApplyInquiry />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/review" element={<Review />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/applysubmit" element={<ApplySubmit />} />
            <Route path="/write" element={<WriteNotificationPage />} />
            <Route
              path="/notification/:id"
              element={<DetailNotificationPage />}
            />
          </Route>
          <Route path={'/*'} element={<NotFound />} />
        </Routes>
      </RouteTransition>
    </AnimatePresence>
  );
};
export default App;
