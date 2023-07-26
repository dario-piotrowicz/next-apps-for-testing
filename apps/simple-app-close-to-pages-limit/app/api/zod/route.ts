import { z } from 'zod';

export const runtime = "edge";

export async function GET(request: Request) {
  return new Response(
    `
      z.string().parse("tuna")
      produces:
        ${
          z.string().parse("tuna")
        }
    `
  );
}
