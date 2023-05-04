export const runtime = 'edge';

export async function GET(request) {
  process.env['MY_CURRENT_VAR'] = "MY CURRENT_VAR_VALUE";

  const customKey = process.env['customKey'];
  const myVar = process.env['MY_VAR'];
  const myCurrentVar = process.env['MY_CURRENT_VAR'];

  return new Response(`
    Hello, Next.js!

    By the way, my customKey is "${customKey}"
    And my MY_VAR is "${myVar}"
    And my MY_CURRENT_VAR is "${myCurrentVar}"
  `)
}
