import { PrismaClient } from '@prisma/client';
import { Context } from 'elysia';

export interface RegistrationContext extends Context {
  body: {
    email: string;
    password: string;
    confirmPassword: string;
  };
  db: PrismaClient;
}
