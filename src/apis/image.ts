import axios from 'axios';
import { getCookie } from '../utils/cookie';

export const imageInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 2000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

imageInstance.interceptors.request.use((config) => {
  const token = getCookie('user');
  if (token) {
    config.headers['Authorization'] = `${token}`;
  }
  return config;
});
