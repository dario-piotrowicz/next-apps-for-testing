'use server';

import { cookies } from 'next/headers';

export async function setCookie(data: any) {
  (cookies() as Record<string, any>).set(
    'from-action',
    `hello world at ${new Date().toLocaleString()}`,
  );
  return { status: 'success', data };
}

export async function getCookie(data: any) {
  return {
    status: 'success',
    data: { ...data, cookie: { 'from-action': cookies().get('from-action') } },
  };
}
