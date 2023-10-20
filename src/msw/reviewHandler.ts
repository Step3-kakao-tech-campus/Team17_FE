import { rest } from 'msw';
import review from './json/review.json';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const setReview = rest.post(
  `${BASE_URL}/api/review`,
  async (_, res, ctx) => {
    await sleep(200);
    return res(ctx.status(200), ctx.json(review));
  },
);

async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
