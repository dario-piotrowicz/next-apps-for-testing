import * as qs from 'qs';

export const runtime = "edge";

export async function GET(request: Request) {

  const obj = qs.parse('foo[bar]=baz');

  return new Response(
    `
      the object generated by qs.parse('foo[bar]=baz')
      is:
        ${
          JSON.stringify(obj)
        }
    `
  );
}
