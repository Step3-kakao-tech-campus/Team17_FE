import axios from 'axios';
import { instance } from './index';
// 강아지 등록하기 => formData
/**
 * 강아지의 프로필을 수정하는 api
 * @param data
 * @returns formData
 */
export const postDogProfile = (data: FormData) => {
  return axios.post('/profile/dog/', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
/**
 * 상세 공고글에서, 본인이 가진 강아지를 가져오는 api
 * @returns dogs
 */
export const getDog = () => {
  return instance.get('/notification');
};

/**
 * 강아지의 상세 프로필을 가져오는 api
 * @param dogId
 * @returns Dog Profile
 */
export const getDogProfile = (dogId: number | null) => {
  return instance.get(`/profile/dog${dogId}`);
};
