import { PrismaClient } from '@prisma/client';
import { Context } from 'elysia';

export type LoginContext = {
  body: {
    email: string;
    password: string;
  };
  db: PrismaClient;
} & Context;
