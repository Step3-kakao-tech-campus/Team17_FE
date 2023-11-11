import { useEffect } from 'react';
import LoginForm from '../components/organisms/LoginForm';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../utils/localStorage';
const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let user = getLocalStorage('user');
    if (user) {
      user = JSON.parse(user).value;
    }
    // const user = getCookie('user');
    if (user) {
      navigate('/');
    }
  });

  return <LoginForm />;
};

export default Login;
