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
