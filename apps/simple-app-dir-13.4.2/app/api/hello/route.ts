export const runtime = "edge";

export async function GET(request: Request) {
  const a = fetch('https://headers-logger.devdash.workers.dev/');
  return new Response(await (await a).text());
}
