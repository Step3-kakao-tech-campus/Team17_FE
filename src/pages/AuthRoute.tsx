import { Outlet, useLocation } from 'react-router-dom';
import { getCookie, setCookie } from '../utils/cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AuthRoute = () => {
  const user = getCookie('user'); // Todo: user를 토큰으로 바꿔야 함. (token)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = location.pathname;

    if (!user) {
      alert('로그인이 필요합니다.');
      navigate('/signin?returnUrl=' + encodeURIComponent(searchParams));
    }
  }, [user]);

  return <>{user ? <Outlet /> : null}</>;
};

export default AuthRoute;
