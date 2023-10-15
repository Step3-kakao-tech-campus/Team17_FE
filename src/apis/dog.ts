import { instance } from './index';

// member id는 request에 넣어줘야하는지
export const postDog = (data: {
  userid: number;
  image: string;
  name: string;
  sex: string;
  breed: string;
  specificity: string;
  age: number;
}) => {
  const { userid, image, name, sex, breed, specificity, age } = data;
  //   const { userid, image, name, sex, breed, specificity, age } = data;
  return instance.post(`/profile/dog/${userid}`, {
    image,
    name,
    sex,
    breed,
    specificity,
    age,
  });
};
