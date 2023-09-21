import { Elysia } from 'elysia';
import { loginBodySchema, registrationBodySchema } from './schemas/auth.schema';
import { prismaSetupPlugin } from '../plugins/prisma.plugin';
import { register, login } from './auth.controller';

export const authPlugin = new Elysia()
  .use(prismaSetupPlugin)
  .onError(({ set, error }) => {
    // TODO: implement an error handler that sends different responses based on error status codes
    console.log('error:', error);
    return new Response('Oops! something went wrong!');
  })
  .group('/auth', (auth) => {
    auth.post('/register', register, {
      body: registrationBodySchema,
      detail: {
        summary: 'User registration',
        tags: ['auth']
      }
    });
    auth.post('/login', login, {
      body: loginBodySchema,
      detail: {
        summary: 'User login',
        tags: ['auth']
      }
    });
    return auth;
  });
