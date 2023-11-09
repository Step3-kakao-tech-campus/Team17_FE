import { instance } from './index';

export const getPayment = (matchingId: number) => {
  return instance.get(`api/payment/${matchingId}`);
};

export const postPayment = (notificationId: number, walkId: any) => {
  return instance.post(`api/payment/${notificationId}/${walkId}`);
};
