import { PrismaClient } from '@prisma/client';
import { Context } from 'elysia';

export interface LoginContext extends Context {
  body: {
    email: string;
    password: string;
  };
  db: PrismaClient;
}
