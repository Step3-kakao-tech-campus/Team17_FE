import axios from 'axios';
import {
  getLocalStorage,
  removeLocalStorageItem,
  setLocalStorageWithExp,
} from '../utils/localStorage';

const refreshAccessToken = async () => {
  try {
    // const refreshToken = getCookie('refreshToken');
    console.log('시도중 !');
    let refreshToken = getLocalStorage('refresh');
    if (refreshToken) {
      refreshToken = JSON.parse(refreshToken).value;
    }
    const res = await axios.get(
      `${import.meta.env.VITE_APP_BASE_URL}/api/refresh`,
      {
        headers: {
          'Authorization-refresh': refreshToken,
        },
      },
    );
    const newAccessToken = res.data.response.accessToken;
    // setCookieWithExp('user', newAccessToken);
    setLocalStorageWithExp('user', newAccessToken);
    // 토큰 재발급 후, api 재요청을 위한 error throw
    return 'success';
    // Todo: 확인 필요
  } catch (error) {
    //  리프레시 토큰 만료, 로그인 페이지로 이동
    alert('로그인 만료로 재로그인이 필요합니다.');
  }
};

export const imageInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

imageInstance.interceptors.request.use((config) => {
  let token = getLocalStorage('user');
  if (token) {
    token = JSON.parse(token).value;
  }
  // const token = getCookie('user');
  if (token) {
    config.headers['Authorization'] = `${token}`;
  }
  return config;
});

imageInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      if (error.response.data.error.message === '토큰 기한이 만료되었습니다.') {
        removeLocalStorageItem('user');
        // deleteCookie('user');
        const res = refreshAccessToken();
        if ((await res) === 'success') {
          const customError = new Error('refresh');
          customError.message = 'refresh';
          throw customError;
        }
      }
    }
    return Promise.reject(error.response);
  },
);
