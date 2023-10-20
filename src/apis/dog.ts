import axios from 'axios';
import { instance } from './index';
// 강아지 등록하기 => formData
export const postDogProfile = (data: FormData) => {
  return axios.post('/profile/dog/', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getDog = () => {
  return instance.get('/notification');
};
