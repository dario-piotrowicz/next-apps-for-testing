import type { KVNamespace } from '@cloudflare/workers-types';

export function getMyKv(): KVNamespace {
    const myKv = (process.env as unknown as { MY_KV: KVNamespace }).MY_KV;
    return myKv;
}