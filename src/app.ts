import { Elysia } from 'elysia';
import { bearer } from '@elysiajs/bearer';
import { authPlugin } from './auth/auth.plugin';

export const app = new Elysia()
  .use(bearer())
  .get('/', () => {
    return {
      message: 'Hello from Elysia!'
    };
  })
  .use(authPlugin);
