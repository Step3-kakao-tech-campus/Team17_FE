import { instance } from './index';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const register = (data: {
  email: string;
  password: string;
  nickname: string;
}) => {
  console.log(data);
  const { email, password, nickname } = data;
  return instance.post('api/member/signup', {
    email: email,
    password: password,
    nickname: nickname,
  });
};

export const login = (data: { email: string; password: string }) => {
  const { email, password } = data;
  return instance.post('api/member/login', {
    email: email,
    password: password,
  });
};
