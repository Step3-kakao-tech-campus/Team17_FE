import axios from 'axios';
import { getLocalStorage } from '../utils/localStorage';

export const imageInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

imageInstance.interceptors.request.use((config) => {
  const token = getLocalStorage('user');
  // const token = getCookie('user');
  if (token) {
    config.headers['Authorization'] = `${token}`;
  }
  return config;
});
