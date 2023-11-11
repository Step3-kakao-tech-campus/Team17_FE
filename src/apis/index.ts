import axios from 'axios';
import {
  getLocalStorage,
  removeLocalStorageItem,
  setLocalStorageWithExp,
} from '../utils/localStorage';
const refreshAccessToken = async () => {
  try {
    // const refreshToken = getCookie('refreshToken');
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
    window.location.href = '/signin';
  }
};

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
instance.interceptors.request.use((config) => {
  let token = getLocalStorage('user');
  if (token) {
    token = JSON.parse(token).value;
  }
  // const token = getCookie('user');
  if (token) {
    // const parsedToken = JSON.parse(token).value;
    config.headers['Authorization'] = `${token}`;
  }
  return config;
});
//middleware
/**
 * 사용자 토큰이 만료되었을 때, refresh token을 이용하여 재발급
 * refresh token 및 access token을 모두 새로 발급받고 쿠키에 저장
 * 사용 페이지에서 반환 된 값이 error.response.status === 400인 경우 로그인 api 재요청 필요.
 *
 * refresh token이 만료된 경우에는 사용자 로그아웃 처리, 재로그인 필요, 쿠키 삭제 로직 추가 필요
 */
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      if (error.response.data.error.message === '토큰 기한이 만료되었습니다.') {
        removeLocalStorageItem('user');
        // deleteCookie('user');
        const res = await refreshAccessToken();
        if (res === 'success') {
          const customError = new Error('refresh');
          customError.message = 'refresh';
          throw customError;
        }
      }
    }
    return Promise.reject(error.response);
  },
);
