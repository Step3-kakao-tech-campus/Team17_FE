import { instance } from './index';

// member id는 request에 넣어줘야하는지
export const postDog = (data: {
  image: string;
  name: string;
  sex: string;
  breed: string;
  specificity: string;
  age: number;
  size: string;
}) => {
  const { image, name, sex, breed, specificity, age, size } = data;
  //   const { userid, image, name, sex, breed, specificity, age } = data;
  return instance.post(`/profile/dog/`, {
    image,
    name,
    sex,
    breed,
    specificity,
    age,
    size,
  });
};
