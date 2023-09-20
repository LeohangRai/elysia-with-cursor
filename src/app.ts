import { Elysia, t } from 'elysia';
import { bearer } from '@elysiajs/bearer';
import { swagger } from '@elysiajs/swagger';
import { authPlugin } from './auth/auth.plugin';

export const app = new Elysia()
  .use(bearer())
  .use(
    swagger({
      path: '/v1/api-docs'
    })
  )
  .get('/', () => {
    return {
      message: 'Hello from Elysia!'
    };
  })
  .use(authPlugin);
