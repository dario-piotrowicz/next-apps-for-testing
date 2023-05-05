import { getCookie, setCookie } from './action';
import { Data } from './client';

export default function Page() {
  return (
    <>
      <h1>Set Cookie</h1>
      <Data action={setCookie} />

      <h1>Get Cookie</h1>
      <Data action={getCookie} />
    </>
  );
}

export const runtime = 'edge';
