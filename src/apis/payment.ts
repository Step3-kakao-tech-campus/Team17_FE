import { instance } from './index';

export const setPayment = (notificationId: number, walkId: number) => {
  return instance.post('/payment', {
    params: {
      notificationId: notificationId,
      walkId: walkId,
    },
  });
};

export const getPayment = (matchingId: number) => {
  return instance.get('/payment', {
    params: {
      matchingId: matchingId,
    },
  });
};
