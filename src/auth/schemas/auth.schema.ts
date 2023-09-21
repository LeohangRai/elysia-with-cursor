import { t } from 'elysia';

export const registrationBodySchema = t.Object({
  email: t.String({
    format: 'email',
    default: 'user@example.com'
  }),
  password: t.String(),
  confirmPassword: t.String()
});

export const loginBodySchema = t.Omit(registrationBodySchema, [
  'confirmPassword'
]);
