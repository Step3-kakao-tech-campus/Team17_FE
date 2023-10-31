import RegisterForm from '../components/organisms/RegisterForm';
import { useEffect } from 'react';
import { getCookie } from '../utils/cookie';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = getCookie('user');
    if (user) {
      navigate('/');
    }
  });
  return <RegisterForm />;
};

export default Register;
