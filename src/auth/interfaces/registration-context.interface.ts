import { PrismaClient } from '@prisma/client';
import { Context } from 'elysia';

export type RegistrationContext = {
  body: {
    email: string;
    password: string;
    confirmPassword: string;
  };
  db: PrismaClient;
} & Context;
