import { rest } from 'msw';
// import review from './json/review.json';
import walkStart from './json/walk-start.json';
import walkEnd from './json/walk-end.json';
import partTimer from './json/partTimer.json';
import dogOwner from './json/dog-owner.json';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const walkingStart = rest.post(
  `${BASE_URL}/api/walk`,
  async (_, res, ctx) => {
    await sleep(200);
    return res(ctx.status(200), ctx.json(walkStart));
  },
);

export const walkingEnd = rest.post(
  `${BASE_URL}/api/walk/end`,
  async (_, res, ctx) => {
    await sleep(200);
    return res(ctx.status(200), ctx.json(walkEnd));
  },
);

export const partTimeLocationSave = rest.post(
  `${BASE_URL}/api/walk/walkRoad`,
  async (_, res, ctx) => {
    await sleep(200);
    return res(ctx.status(200), ctx.json(partTimer));
  },
);

export const dogOwnerLookMap = rest.get(
  `${BASE_URL}/api/walk/walkRoad`,
  async (_, res, ctx) => {
    await sleep(200);
    return res(ctx.status(200), ctx.json(dogOwner));
  },
);

async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
