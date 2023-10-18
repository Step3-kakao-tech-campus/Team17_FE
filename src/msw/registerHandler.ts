import {rest} from 'msw';
import register from './json/register.json';
import registerError from './json/register-error.json';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getRegister = rest.get(`${BASE_URL}/api/register`, async (req, res, ctx) => {
  await sleep(200);
  return res(ctx.status(200), ctx.json(register));
});

export const getRegisterError = rest.get(`${BASE_URL}/api/register/error`, async (req, res, ctx) => {
  await sleep(200);
  return res(ctx.status(401), ctx.json(registerError));
});

async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}