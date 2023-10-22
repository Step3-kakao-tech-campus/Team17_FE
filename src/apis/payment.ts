import { instance } from './index';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getPayment = (matchingId: number) => {
  return instance.get(`${BASE_URL}/api/payment`, {
    params: {
      matchingId: matchingId,
    },
  });
};
