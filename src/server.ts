const PORT = process.env.PORT ?? 3000;
import { app } from './app';

app.listen(PORT, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
});
