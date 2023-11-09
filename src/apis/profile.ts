import { instance } from './index';
import { imageInstance } from './image';
// Axios 응답 데이터의 타입을 정의
// interface ProfileResponse {
//   // success: boolean;
//   response: ProfileData;
//   // error: string | null;
// }

// 프로필 데이터의 타입을 정의
// interface ProfileData {
//   id: number;
//   nickname: string;
//   profileImage: string;
//   profileContent: string;
//   dogBowl: number;
//   coin: number;
//   dogs: Dog[];
//   notifications: NotificationProps[];
//   applications: ApplicationProps[];
//   reviews: ReviewProps[];
// }

// 개 데이터의 타입을 정의
// interface Dog {
//   id: number;
//   image: string;
// }
// interface notiDog {
//   breed: string;
//   age: number;
//   image: string;
// }

// interface NotificationProps {
//   id: number;
//   title: string;
//   start: string;
//   end: string;
//   dog: notiDog[];
//   walkStatus: string;
// }
// interface ApplicationProps {
//   id: number;
//   aboutMe: string;
//   certification: string;
//   experience: string;
//   title: string;
// }
// interface ReviewProps {
//   id: number;
//   reviewContent: string;
//   reviewTime: string;
//   writerImg: string;
// }

// getProfile 함수 정의
export const getProfile = (userId?: number) => {
  const url = userId !== -1 ? `api/profile/${userId}` : `api/profile`;
  return instance.get(url);
};

export const postProfile = (data: any) => {
  return imageInstance.post('api/profile/user', data);
};
