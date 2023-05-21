import { EventEmitter } from 'node:events';
import { AssertionError, strict as assert } from "node:assert";
import { types } from 'node:util';
import { AsyncLocalStorage } from 'node:async_hooks';
// import { join } from 'node:path'; <--- not allowed by vercel/next itself
// import { StringDecoder } from 'node:string_decoder'; <--- not allowed by vercel/next itself

export const runtime = 'edge';

export default function handler() {
  const eventEmitter = new EventEmitter();
  eventEmitter.addListener('randomEvent', () => {});
  eventEmitter.addListener('anotherRandomEvent', () => {});
  const eventNames = eventEmitter.eventNames();

  let assertStr = "ERROR: ASSERT ISN'T WORKING PROPERLY!";
  try {
    assert(null);
  } catch (e) {
    const isE = e instanceof AssertionError;
    if(isE) {
      assertStr = 'assert(null) correctly throws an assertion error';
    }
  }

  const myAsyncLocalStorage = new AsyncLocalStorage();

  return new Response(
    `
    ===== node:events

      eventNames: ${JSON.stringify(eventNames)}

    ===== node:assert

      ${assertStr}

    ===== node:utils

      types.isAsyncFunction(() => {}) === ${types.isAsyncFunction(() => {})}

      types.isAsyncFunction(async () => {}) === ${types.isAsyncFunction(async () => {})}

    ===== node:async_hooks

      typeof myAsyncLocalStorage.run === ${typeof myAsyncLocalStorage.run}

  `);
}
