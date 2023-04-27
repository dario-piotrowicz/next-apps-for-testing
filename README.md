# next-apps-for-testing

very simple nextjs apps used to manually test next-on-pages, until we find a better solution

## simple-src-13.2.4

Simple app using Next.js 13.2.4 using the src directory, it also contains nested and dynamic routes

It also contains a middleware so that if redirects requests to `/m` to `/routeA`

## simple-app-dir-13.0.0

Simple app using Next.js 13.0.0 using the app directory, it also contains nested and dynamic routes

> Note: the app directory dynamic routes params don't work on 13.0.0 (accessing `/routeA/dRoute/name` generates an internal server error)

## simple-app-dir-13.2.4

Simple app using Next.js 13.2.4 using the app directory

> Note: from this version on app dir apps require AsyncLocalStorage so this app relies on that addition (done in PR #115) and on the `nodejs_compat` flag

## simple-app-dir-13.3.1

Simple app using Next.js 13.3.1 using the app directory

> Note: from this version on app dir apps require AsyncLocalStorage so this app relies on that addition (done in PR #115) and on the `nodejs_compat` flag

> To switch things up it uses js and tailwind

## simple-pages-dir-13.2.4

Simple app using Next.js 13.2.4 using the pages directory (no src nor app), it also has a dynamic route

> **Note** The app is static, it does not produce edge functions just static assets (since all pages are static and `api/hello.ts` is ignored since it doesn't end with one of the specified page extensions, to make the app not static add 'ts' to the `pageExtensions` field in `next.config.js`)

It contains next.config.js options:

- generateEtags set to `false` (don't generate Etags for pages)

- httpAgentOptions set to `{ keepAlive: false}` (don't request keepAlive connection in request)

- Ignoring ESLint (and it has a Class component with a deprecated life cycle which fails linting)

- Ignoring TypeScript Errors (and it has some broken ts)

- URL Imports with confetti effect when opening the app

- generateBuildId (generates a build id, not sure if we need it but I think it works)

- pageExtensions (so that all page files need to end with `.pAgE.tsx` or `.mdx`)

- compression set to `false` (don't compress rendered content and assets via gzip) (doesn't work on next-on-pages)

- webpack config (to load mdx files)

## app-playground

[Next.js App Router Playground](https://github.com/vercel/app-playground) from Vercel, tweaked to run with next-on-pages [source](https://github.com/james-elicx/app-playground-edge).

## dynamic-static-app-dir-13.2.4

Simple app using Next.js 13.2.4 using the app directory, it also contains static dynamic routes that get generated at build time.

- Only the API route (`/api/hello`) specifies a runtime (`edge`)
- Non-dynamic static page (`/non-dynamic/slug`).
- Dynamic static page (`/dynamic/[slug]`).
  - Generates with `foo`, `bar`, `baz` params at build time.
  - 404 for any other params.

## simple-wasm-pages-13.3.1

Simple application showing a single page (under the `pages` directory, no `src` nor `app`) which imports a wasm module (built from rust) with a function that adds one to a give number and shows the result on the screen.

Notes:

- it currently fails the build when running next-on-pages (v.0.10.0) since esbuild can't resolve the wasm import.
- `next dev` generated the following runtime error if you specify the edge runtime (haven't tried deploying it):
  ```
  TypeError: addOne is not a function
  ```

## config-rewrites-redirects-headers-13.2.4

Simple app using Next.js 13.2.4 using the app directory, it also contains rewrites, redirects and headers in the next.config.js file.

- Rewrites
  - `beforeFiles`
    - `/some-page` -> `/somewhere-else` if search params `overrideMe` is present.
  - `afterFiles`
    - `/non-existent` -> `/contact`.
  - `fallback`
    - `/:path*` -> `https://my-old-site.com/:path*`.
- Redirects
  - `/about` -> `/home` (non-permanent).
  - `/about-permanent` -> `/home` (permanent).
- Headers
  - `/` applies `x-hello: world` header.
