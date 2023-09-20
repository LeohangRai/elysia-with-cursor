import { PrismaClient } from '@prisma/client';
import { t } from 'elysia';

export const registrationSchema = {
  body: t.Object({
    email: t.String(),
    password: t.String(),
    confirmPassword: t.String()
  })
};

export const loginSchema = {
  body: t.Object({
    email: t.String(),
    password: t.String()
  })
};
