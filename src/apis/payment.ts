import { instance } from './index';

export const getPayment = (matchingId: number) => {
  return instance.get('/payment', {
    params: {
      matchingId: matchingId,
    },
  });
};
