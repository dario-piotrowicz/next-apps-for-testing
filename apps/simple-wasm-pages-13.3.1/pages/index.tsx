import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>wasm test app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Wasm Test App</h1>
        <div className='main-links'>
          <Link href="/wasm">Raw rust wasm example</Link>
          <Link href="/api/og">Example of vercel/og usage (which relies on wasm)</Link>
          <Link href="/api/og-custom">Example of vercel/og usage (with a custom font)</Link>
        </div>
      </main>
    </>
  )
}
