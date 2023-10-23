import { Outlet, useLocation } from 'react-router-dom';
import { getCookie, setCookie } from '../utils/cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getLocalStorage } from '../utils/localStorage';

const AuthRoute = () => {
  const user = getCookie('user'); // Todo: user를 토큰으로 바꿔야 함. (token)
  const navigate = useNavigate();
  const location = useLocation();
  let localStorageUser = getLocalStorage('user');

  useEffect(() => {
    const searchParams = location.pathname;

    if (!user && localStorageUser === null) {
      alert('로그인이 필요합니다.');
      navigate('/signin?returnUrl=' + encodeURIComponent(searchParams));
    } else if (localStorageUser !== null) {
      setCookie('user', localStorageUser, 1000 * 1440);
    }
  });

  return <>{localStorageUser ? <Outlet /> : null}</>;
};

export default AuthRoute;
