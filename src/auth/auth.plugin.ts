import { Elysia } from 'elysia';
import { loginSchema, registrationSchema } from './schemas/auth.schema';
import { prismaSetupPlugin } from '../plugins/prisma.plugin';
import { register, login } from './auth.controller';

export const authPlugin = new Elysia()
  .use(prismaSetupPlugin)
  .group('/auth', (auth) => {
    auth.post('/register', register, registrationSchema);
    auth.post('/login', login, loginSchema);
    return auth;
  });
