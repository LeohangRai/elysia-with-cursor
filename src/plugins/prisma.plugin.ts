import { Elysia } from 'elysia';
import { PrismaClient } from '@prisma/client';

export const prismaSetupPlugin = (app: Elysia) =>
  app.decorate('db', new PrismaClient());
