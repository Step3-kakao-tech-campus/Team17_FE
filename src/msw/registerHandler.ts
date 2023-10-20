import { rest, RestContext } from 'msw';
import registerJson from './json/register.json';
import registerError from './json/register-error.json';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const register = rest.post(
  `${BASE_URL}/api/member/signup`,
  async (_, res, ctx: RestContext) => {
    await sleep(200);
    return res(ctx.status(200), ctx.json(registerJson));
  },
);

export const getRegisterError = rest.post(
  `${BASE_URL}/api/member/signup/error`,
  async (_, res, ctx: RestContext) => {
    await sleep(200);
    return res(ctx.status(401), ctx.json(registerError));
  },
);

async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
