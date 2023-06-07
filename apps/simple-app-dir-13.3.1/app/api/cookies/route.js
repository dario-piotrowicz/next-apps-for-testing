import { cookies } from 'next/headers';

export const runtime = 'edge';

export async function GET() {
	const cookieStore = cookies();
  const allCookies = cookieStore.getAll();

	return new Response(
    `Hello, your request cookies are: ${JSON.stringify({allCookies})}`
  );
}