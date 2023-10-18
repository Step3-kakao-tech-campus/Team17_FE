import {rest} from 'msw';
import login from './json/login.json';
import loginError from './json/login-error.json';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getLogin = rest.get(`${BASE_URL}/api/login`, async (req, res, ctx) => {
  await sleep(200);
  return res(ctx.status(200), ctx.json(login));
});

export const getLoginError = rest.get(`${BASE_URL}/api/login/error`, async (req, res, ctx) => {
  await sleep(200);
  return res(ctx.status(401), ctx.json(loginError));
});

async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}