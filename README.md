# next-apps-for-testing

very simple nextjs apps used to manually test next-on-pages, until we find a better solution

## simple-src-13.2.4

Simple app using Next.js 13.2.4 using the src directory, it also contains nested and dynamic routes

## simple-app-dir-13.0.0

Simple app using Next.js 13.0.0 using the app directory, it also contains nested and dynamic routes

> Note: the app directory dynamic routes params don't work on 13.0.0 (accessing `/routeA/dRoute/name` generates an internal server error)

## simple-app-dir-13.2.4

Simple app using Next.js 13.2.4 using the app directory

> Note: from this version on app dir apps require AsyncLocalStorage so this app relies on that addition (done in PR #115) and on the `nodejs_compat` flag

## simple-pages-dir-13.2.4

Simple app using Next.js 13.2.4 using the pages directory (no src nor app)

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
