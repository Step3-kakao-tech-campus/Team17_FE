import axios, { AxiosResponse } from 'axios'; // AxiosResponse 타입을 import
import { instance } from './index';
import { getCookie } from '../utils/cookie';
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
// Axios 응답 데이터의 타입을 정의
interface ProfileResponse {
  // success: boolean;
  response: ProfileData;
  // error: string | null;
}

// 프로필 데이터의 타입을 정의
interface ProfileData {
  id: number;
  nickname: string;
  profile_img: string;
  profileContent: string;
  dogBowl: number;
  coin: number;
  dogs: Dog[];
  notifications: NotificationProps[];
  applications: ApplicationProps[];
  reviews: ReviewProps[];
}

// 개 데이터의 타입을 정의
interface Dog {
  id: number;
  image: string;
}
interface notiDog {
  breed: string;
  age: number;
  image: string;
}

interface NotificationProps {
  id: number;
  title: string;
  start: string;
  end: string;
  dog: notiDog[];
}
interface ApplicationProps {
  id: number;
  aboutMe: string;
  certification: string;
  experience: string;
}
interface ReviewProps {
  id: number;
  reviewContent: string;
  reviewTime: string;
  writerImg: string;
}

// getProfile 함수 정의
export const getProfile = (userId: number | null) => {
  const url = userId ? `api/profile/${userId}` : `api/profile`;
  return instance.get(url);
};

export const getDogProfile = (id: number) => {
  return instance.get(`/profile/dog/${id}`);
};

// type FormData = {
//   profileContent?: string;
//   profileImage?: File;
// };

// 프로필 등록하기 => formData

// // prettier-ignore
// export const postProfile = (
//   data:Formd
// ): Promise<AxiosResponse<any, any>> => {
//   const token = getCookie('user');
//   if (token) {
//     return axios.post(`${BASE_URL}/api/profile/user`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         'Authorization': `Bearer ${token}`
//       },
//     });
//   }
//   throw new Error('사용자 토큰이 없습니다.'); // 혹은 에러 처리 방식에 맞게 변경 가능
// };
// export const isOwnerProfile = ()
export const postProfile = (data: FormData) => {
  return instance.post('api/profile/user', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
