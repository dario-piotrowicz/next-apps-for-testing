- /api/hello
  - status 200
  - headers
    - [ 'set-cookie', 'x-hello-from-middleware2=hello; Path=/' ],
    - [ 'x-hello-from-middleware2', 'hello' ],
    - [ 'x-middleware-next', '1' ]
  - request headers:
    - [ 'x-real-ip', '127.0.0.1' ],
    - [ '...', '...' ]
- /api/hello?setHeader
  - status 200
  - headers
    - [ 'set-cookie', 'x-hello-from-middleware2=hello; Path=/' ],
    - [ 'x-hello-from-middleware2', 'hello' ],
    - [ 'x-middleware-next', '1' ],
    - [ 'x-middleware-override-headers', '...' ],
    - [ 'x-middleware-request-...', '...']
  - request headers:
    - [ 'x-real-ip', '127.0.0.1' ],
    - [ '...', '...' ]
- /api/hello?next
  - status 200
  - headers
    - [ 'x-middleware-next', '1' ]
  - request headers:
    - [ 'x-real-ip', '127.0.0.1' ],
    - [ '...', '...' ]
- /api/hello?redirect
  - status 307
  - headers
    - [ 'location', 'http://localhost:8788/somewhere-else' ]
  - request headers:
    - [ 'x-real-ip', '127.0.0.1' ],
    - [ '...', '...' ]
- /api/hello?rewrite
  - status 200
  - headers
    - [ 'x-middleware-rewrite', 'http://localhost:8788/some-page' ]
  - request headers:
    - [ 'x-real-ip', '127.0.0.1' ],
    - [ '...', '...' ]
- /api/hello?throw
  - throws error that needs catching
- /throw
  - status 200
  - nextjs catches error and shows message

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
