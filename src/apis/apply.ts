import { instance } from './index';

export const PostApply = (
  notificationId: number,
  title: string,
  aboutMe: string,
  certification: string,
  experience: string,
) => {
  console.log('c', certification);

  return instance.post(`api/application`, {
    notificationId: notificationId,
    title: title,
    aboutMe: aboutMe,
    certification: certification,
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

export const GetApplyUser = () => {
  return instance.get(`api/application`);
};
