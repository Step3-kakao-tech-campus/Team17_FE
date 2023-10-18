import {rest} from 'msw';
import payment from './json/payment.json';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getPayment = rest.get(`${BASE_URL}/api/payment`, async (req, res, ctx) => {
  await sleep(200);
  return res(ctx.status(200), ctx.json(payment));
});

async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}