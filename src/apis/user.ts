import { instance } from './index';

export const register = (data: {
  email: string;
  password: string;
  username: string;
}) => {
  const { email, password, username } = data;
  return instance.post('/join', {
    email,
    password,
    username,
  });
};

export const login = (data: { email: string; password: string }) => {
  const { email, password } = data;
  return instance.post('/login', {
    email,
    password,
  });
};
