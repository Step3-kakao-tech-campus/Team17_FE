import { useEffect } from 'react';
import LoginForm from '../components/organisms/LoginForm';
import { getCookie } from '../utils/cookie';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Todo: user를 토큰으로 바꿔야 함. (token)
    const user = getCookie('user');
    if (user) {
      navigate('/');
    }
  });

  return <LoginForm />;
};

export default Login;
