import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.searchParams.has('rewrite')) {
    return NextResponse.rewrite(new URL('/some-page', request.url));
  }

  if (request.nextUrl.searchParams.has('redirect')) {
    return NextResponse.redirect(new URL('/somewhere-else', request.url));
  }

  if (request.nextUrl.searchParams.has('next')) {
    return NextResponse.next();
  }

  let response = NextResponse.next();

  if (request.nextUrl.searchParams.has('setHeader')) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-hello-from-middleware1', 'hello');
    response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  if (request.nextUrl.searchParams.has('throw')) {
    throw new Error('Error from middleware');
  }

  if (request.nextUrl.searchParams.has('returns')) {
    const content = `
      <head>
          <meta charset="UTF-8" />
      </head>
      <body>
          <h1>Hello from middleware</h1>
      </body>
    `;

    return new NextResponse(content, {
      status: 401,
      headers: {
        'content-type': 'text/html',
      },
    });
  }

  if (request.nextUrl.searchParams.has('returns200')) {
    return new NextResponse('Hello, world', {
      status: 200,
      headers: {
        'content-type': 'text/html',
      },
    });
  }

  response.cookies.set('x-hello-from-middleware2', 'hello');
  response.headers.set('x-hello-from-middleware2', 'hello');

  return response;
}

export const config = {
  matcher: ['/api/:path*', '/test/:path*'],
};
