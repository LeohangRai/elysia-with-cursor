import { Elysia, t } from 'elysia';
import { bearer } from '@elysiajs/bearer';
import { PrismaClient } from '@prisma/client';
import { swagger } from '@elysiajs/swagger';

const registrationSchema = {
  body: t.Object({
    email: t.String(),
    password: t.String(),
    confirmPassword: t.String()
  })
};

const prismaSetupPlugin = (app: Elysia) =>
  app.decorate('db', new PrismaClient());

const app = new Elysia()
  .use(bearer())
  .use(
    swagger({
      path: '/v1/api-docs'
    })
  )
  .use(prismaSetupPlugin);

app.get('/', () => {
  return {
    message: 'Hello from Elysia!'
  };
});

app.post(
  '/register',
  async ({ body, db }) => {
    const { email, password, confirmPassword } = body;
    if (password !== confirmPassword) {
      return {
        error: 'Password and confirmPassword do not match'
      };
    }
    if (!t.String({ format: 'email' })) {
      return {
        error: 'Invalid email format'
      };
    }
    await db.user.create({
      data: {
        email,
        password
      }
    });
    return {
      message: 'User registered successfully'
    };
  },
  registrationSchema
);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
});
