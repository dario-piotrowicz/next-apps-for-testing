# next-apps-for-testing

very simple nextjs apps used to manually test next-on-pages, until we find a better solution

## simple-src-13.2.4

Simple app using Next.js 13.2.4 using the src directory, it also contains nested and dynamic routes

It also contains a middleware so that if redirects requests to `/m` to `/routeA`

## simple-app-dir-13.0.0

Simple app using Next.js 13.0.0 using the app directory, it also contains nested and dynamic routes

## simple-app-dir-13.2.4

Simple app using Next.js 13.2.4 using the app directory

> Note: from this version on app dir apps require AsyncLocalStorage so this app relies on that addition (done in PR #115) and on the `nodejs_compat` flag

## simple-app-dir-13.3.1

Simple app using Next.js 13.3.1 using the app directory

In the `/api/hello` route the app also uses env variables (both static from `next.config.js` and from wrangler)

It also has a `/api/cookies` route that simply lists the Request's cookies

> Note: from this version on app dir apps require AsyncLocalStorage so this app relies on that addition (done in PR #115) and on the `nodejs_compat` flag

> To switch things up it uses js and tailwind

> This app also uses `eslint-plugin-next-on-pages`

## simple-app-dir-13.4.2

Simple app using Next.js 13.4.2 using the app directory

It has a top level error page.

It also tests different next.config.js props:
 - `images` (with a `loaderFile`)
 - `mdxRs` (see the `error-message.mdx` file)
 - `trailingSlash`
 - `typedRoutes`

Additionally it uses the `eslint-plugin-next-on-pages` package

It also has an api route (`/api/inline-assets`) that showcases how different inline asset fetches should behave

It also has an api (`/api/gh-nop`) which returns stats of the next-on-pages repository using the github rest API

## simple-app-dir-13.4.2

Simple app using Next.js 13.4.2 showcasing how the built-in Image component's integration works

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

## simple-pages-dir-13.4.2

Simple app using Next.js 13.4.2 using the pages directory (no src nor app), just to change things it uses js and it doesn't use eslint.

It's `/api/hello` route used `node:events`

It also has a `/api/env` route that shows the used `NODE_ENV`

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

## simple-vercel-og-pages-13.3.1

Simple application showing a handful of examples (under the `pages` directory, no `src` nor `app`) which use @vercel/og to generate images

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

## middleware-13.2.4

Simple app using Next.js 13.2.4 using the app directory, it also contains a middleware that adds headers, does redirects and rewrites, and throws errors.

For a detailed list of what each route does, see the readme in the `middleware-13.2.4` directory.

- `/api/hello` -> applies headers + cookie
- `/api/hello?setHeader` -> applies multiple headers + cookie
- `/api/hello?next` -> return NextResponse.next()
- `/api/hello?redirect` -> performs a redirect
- `/api/hello?rewrite` -> performs a rewrite
- `/api/hello?error` -> throws an error
- `/api/hello?returns` -> returns a response with `return new NextResponse`

## i18n-pages-dir-13.4.1

Basic pages dir application using Next.js 13.4.1 with i18n enabled.

- i18n for locales `en`, `fr`, `nl`, `es`, with `en` being the default locale.
- redirect for `es` locale.
- static pages for each locale.
- dynamic pages for each locale.
- server side rendered pages for each locale.

## i18n-next-translate-13.4.1

Basic pages dir application using Next.js 13.4.1 with next-translate.

Example application from https://github.com/aralroca/next-translate/tree/master/examples/basic

## i18n-next-intl-13.4.1

Basic pages dir application using Next.js 13.4.1 with next-intl.

Example application from https://github.com/amannn/next-intl/tree/main/examples/example

## kv-app-dir-13.4.4

Simple app dir application which uses a Cloudflare KV via server actions

## empty-getstaticpaths-pages-13.4.4

A simple pages dir application which has a dynamic path which uses getStaticPaths to generate
an empty array of paths (reproduction of issue: https://github.com/cloudflare/next-on-pages/issues/274)

## complex-ish-app

An application full of dependencies and that produces a large bundle (so it's only deployable on a paid account).

It doesn't contain any real complex/advanced logic.