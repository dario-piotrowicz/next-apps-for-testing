import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

// Make sure the font exists in the specified path:
const font = fetch(new URL('../../assets/TYPEWR__.TTF', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export default async function handler() {
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          fontSize: 100,
          fontFamily: '"Typewriter"',
          paddingTop: '100px',
          paddingLeft: '50px',
        }}
      >
        Hello custom world!
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Typewriter',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  );
}