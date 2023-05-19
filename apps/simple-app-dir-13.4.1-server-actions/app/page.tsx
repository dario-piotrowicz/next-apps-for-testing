import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Link from 'next/link';
import { getRequestCfProperties } from '@cloudflare/next-on-pages/utils';

export const runtime = 'edge';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const cf = getRequestCfProperties();

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>Cloudflare Request Info</h2>
        <ul>
          <li>
            colo: {cf?.colo ?? 'N/A'}
          </li>
          <li>
            city: {cf?.city ?? 'N/A'}
          </li>
          <li>
            country: {cf?.country ?? 'N/A'}
          </li>
          <li>
            timezone: {cf?.timezone ?? 'N/A'}
          </li>
        </ul>
      </div>

      <div className={styles.grid}>
        <Link href="/action" className={styles.card}>
          <h2 className={inter.className}>
            Server Action <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Call function on server to set / get cookies.
          </p>
        </Link>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
