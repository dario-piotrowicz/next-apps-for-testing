import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <Link href="/routeA" className={styles.card}>
          <h2>
            Route A <span>-&gt;</span>
          </h2>
          <p>Test nested and dynamic routes.</p>
        </Link>
        <Link href="/api/qs" className={styles.card}>
          <h2>
            QS <span>-&gt;</span>
          </h2>
          <p>Testing the qs npm package</p>
        </Link>
        <Link href="/api/pretty-print-json" className={styles.card}>
          <h2>
            Pretty-Print-Json <span>-&gt;</span>
          </h2>
          <p>Testing the pretty-print-json npm package</p>
        </Link>
        <Link href="/api/lorem-ipsum" className={styles.card}>
          <h2>
            Lorem-Ipsum <span>-&gt;</span>
          </h2>
          <p>Lorem ipsum dynamic text</p>
        </Link>
        <Link href="/api/lorem-ipsum?static=0" className={styles.card}>
          <h2>
            Lorem-Ipsum <span>-&gt;</span>
          </h2>
          <p>Lorem ipsum static text</p>
        </Link>
        <Link href="/api/zod" className={styles.card}>
          <h2>
            Zod <span>-&gt;</span>
          </h2>
          <p>testing zod</p>
        </Link>
      </div>
    </main>
  );
}
