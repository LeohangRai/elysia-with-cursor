# Elysia Web Server with Bun runtime

## Getting Started
To install the dependencies, run:
```bash
bun install
```
To run the database migrations, run: <em>(NOTE: Make sure to add your Database connection URL in the <strong>.env</strong> file first.)</em>
```
bunx prisma migrate dev
```

## Development
To start the development server run:
```bash
bun run dev
```

## API Documentation
To see the API documentation, start your server and open the URL:
```
<SERVER_HOSTNAME>:<PORT>/v1/api-docs
```