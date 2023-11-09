import { Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getLocalStorage } from '../utils/localStorage';

const AuthRoute = () => {
  const user = getLocalStorage('user');
  // const user = getCookie('user');
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
