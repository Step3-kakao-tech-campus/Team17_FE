import {rest} from 'msw';
import review from './json/review.json';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getReview = rest.get(`${BASE_URL}/api/review`, async (req, res, ctx) => {
  await sleep(200);
  return res(ctx.status(200), ctx.json(review));
});

async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
