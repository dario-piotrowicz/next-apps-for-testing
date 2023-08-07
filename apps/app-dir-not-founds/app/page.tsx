import Image from 'next/image'
import styles from './page.module.css'

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
            By{' '}
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
      </div>

      <div>
        <a
          href="./fdhdfhjfdh"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Not Found <span>-&gt;</span>
          </h2>
          <p>Go to a random page resulting in a not-found</p>
        </a>

        <a
          href="./pageA"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Page A - Not Found <span>-&gt;</span>
          </h2>
          <p>Go to page A which results in a not-found</p>
        </a>

        <a
          href="./pageA/pageB"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Page B - Not Found <span>-&gt;</span>
          </h2>
          <p>Go to page B results in a not-found</p>
        </a>
      </div>
    </main>
  )
}
