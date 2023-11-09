import { instance } from './index';

export const PostApply = (
  notificationId: number,
  title: string,
  aboutMe: string,
  certificate: string,
  experience: string,
) => {
  console.log('api 요청');
  return instance.post(`api/application`, {
    notificationId: notificationId,
    title: title,
    aboutMe: aboutMe,
    certificate: certificate,
    experience: experience,
  });
};

export const GetApply = (applicationId: number) => {
  return instance.get(`api/application/${applicationId}`);
  // return instance.get(`api/application/${memberId}`);
};

export const GetMatch = (notificationId: number) => {
  return instance.get(`api/notification/${notificationId}/match`);
};
