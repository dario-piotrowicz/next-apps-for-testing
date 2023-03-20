export const config = {
  runtime: "edge",
};

export default async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}
