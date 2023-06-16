export const runtime = 'edge';

export default function handler() {
  return new Response(
    `the current NODE_ENV is: ${(() => process.env.NODE_ENV)()}`);
}
