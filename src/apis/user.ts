import { instance } from './index';

export const register = (data: {
  email: string;
  password: string;
  nickname: string;
}) => {
  const { email, password, nickname } = data;
  return instance.post('api/member/signup', {
    email,
    password,
    nickname,
  });
};

export const login = (data: { email: string; password: string }) => {
  const { email, password } = data;
  return instance.post('api/member/login', {
    email,
    password,
  });
};
