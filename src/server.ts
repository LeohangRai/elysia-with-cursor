import { swagger } from '@elysiajs/swagger';
import { app } from './app';

const PORT = process.env.PORT ?? 3000;

app.use(
  swagger({
    path: '/v1/api-docs',
    exclude: new RegExp('/api-docs'),
    documentation: {
      info: {
        title: 'API Documentation',
        version: '1.0.0'
      }
    }
  })
);

app.listen(PORT, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
});
