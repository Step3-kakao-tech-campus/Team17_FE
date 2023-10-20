import { rest } from 'msw';
import payment from './json/payment.json';
import paymentJson from './json/get-payment.json';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const setPayment = rest.post(
  `${BASE_URL}/api/payment`,
  async (_, res, ctx) => {
    await sleep(200);
    return await res(ctx.status(200), ctx.json(payment));
  },
);

export const getPayment = rest.get(
  `${BASE_URL}/api/payment`,
  async (_, res, ctx) => {
    await sleep(200);
    return await res(ctx.status(200), ctx.json(paymentJson));
  },
);

async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
