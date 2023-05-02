// Next.js Edge API routes: https://nextjs.org/docs/api-routes/edge-api-routes

export const config = {
  runtime: "edge",
};

export default function handler() {
  return new Response("Hello world!");
}
