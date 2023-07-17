'use server';

import { cookies } from 'next/headers';
// import { getRequestCfProperties, getRequestExecutionContext } from '@cloudflare/next-on-pages/utils';

export async function setCookie(data: any) {
  // const cf = getRequestCfProperties();
  // const ctx = getRequestExecutionContext();

  (cookies() as Record<string, any>).set(
    'from-action',
    'hello world',
    // `hello world from ${cf?.city ?? 'Nowhere'} (btw, typeof ctx.waitUntil is "${typeof ctx?.waitUntil}")`,
  );
  return { status: 'success', data };
}

export async function getCookie(data: any) {
  return {
    status: 'success',
    data: { ...data, cookie: { 'from-action': cookies().get('from-action') } },
  };
}
