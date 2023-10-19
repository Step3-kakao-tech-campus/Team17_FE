import { instance } from './index';

export const register = (data: {
  email: string;
  password: string;
  nickname: string;
}) => {
  const { email, password, nickname } = data;
  return instance.post('/api/member/signup', {
    email: email,
    password: password,
    nickname: nickname,
  });
};

export const login = (data: { email: string; password: string }) => {
  const { email, password } = data;
  return instance.post('/login', {
    email: email,
    password: password,
  });
};
