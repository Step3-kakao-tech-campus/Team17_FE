import { AxiosResponse } from 'axios'; // AxiosResponse 타입을 import
import { instance } from './index';
// Axios 응답 데이터의 타입을 정의
interface ProfileResponse {
  success: boolean;
  response: ProfileData;
  error: string | null;
}

// 프로필 데이터의 타입을 정의
interface ProfileData {
  id: number;
  nickname: string;
  profile_img: string;
  profileContent: string;
  dog_bowl: number;
  dogCoin: number;
  dogs: Dog[];
}

// 개 데이터의 타입을 정의
interface Dog {
  id: number;
  image: string;
}

// getProfile 함수 정의
export const getProfile = (): Promise<AxiosResponse<ProfileResponse>> => {
  return instance.get('/profile');
};
