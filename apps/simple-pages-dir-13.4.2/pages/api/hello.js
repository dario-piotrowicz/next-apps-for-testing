import { EventEmitter } from 'node:events';

export const runtime = 'edge';

export default function handler() {
  const eventEmitter = new EventEmitter();
  eventEmitter.addListener('randomEvent', () => {});
  eventEmitter.addListener('anotherRandomEvent', () => {});
  const eventNames = eventEmitter.eventNames();
  return new Response(`hello! eventNames: ${JSON.stringify(eventNames)}`);
}
