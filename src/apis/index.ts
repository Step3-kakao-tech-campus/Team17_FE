import axios from 'axios';
import { getCookie } from '../utils/cookie';

// const refreshAccessToken = async () => {
//   try {
//     const refreshToken = getCookie('refreshToken');
//     const res = await axios.post(
//       `${process.env.VITE_APP_BASE_URL}/refresh`,
//       null,
//       {
//         headers: {
//           'Authorization-refresh': refreshToken,
//         },
//       },
//     );
//     // Todo: 확인 필요
//     const newAccessToken = res.data.repsonse.accessToken;
//     setCookie('user', newAccessToken, 1000 * 1440);
//   } catch (error) {
//     console.log('refreshAccessToken error', error);
//   }
// };

export const instance = axios.create({
  baseURL: process.env.VITE_APP_BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const token = getCookie('user');
  if (token) {
    const parsedToken = JSON.parse(token).value;
    config.headers['Authorization'] = `${parsedToken}`;
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
  (error) => {
    // if (error.response.status === 400) {
    //   deleteCookie('user');
    //   refreshAccessToken();
    // }
    return Promise.reject(error.response);
  },
);
