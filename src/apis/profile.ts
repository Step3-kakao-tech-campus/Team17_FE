import { instance } from './index';
import { imageInstance } from './image';

// getProfile 함수 정의
export const getProfile = (userId?: number) => {
  const url = userId !== -1 ? `api/profile/${userId}` : `api/profile`;
  return instance.get(url);
};

export const postProfile = (data: any) => {
  return imageInstance.post('api/profile/user', data);
};
