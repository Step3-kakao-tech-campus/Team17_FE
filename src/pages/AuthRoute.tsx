import { Outlet } from 'react-router-dom';
import { getCookie } from '../utils/cookie';
import Login from './Login';

const AuthRoute = () => {
  const user = getCookie('user'); // Todo: user를 토큰으로 바꿔야 함. (token)

  return user ? <Outlet /> : <Login />;
};

export default AuthRoute;
