import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

export const config = {
  runtime: "edge",
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const links: { href: string; description: string }[] = [
    { href: "some-page", description: "Should go to /some-page" },
    { href: "some-page?overrideMe", description: "Should rewrite to /somewhere-else" },
    { href: "non-existent", description: "Should rewrite to /contact" },
    { href: "external", description: "Should rewrite to https://my-old-site.com/external-non-existent" },
    { href: "about", description: "Should redirect to /info (with status 307)" },
    { href: "about-permanent", description: "Should redirect to /info (with status 308)" },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>The response for this page (/) should include a &quot;x-hello&quot; header with value &quot;world&quot;</h2>
      </div>

      <div className={styles.grid}>
        {links.map(({ href, description }) => (
          <Link key={href} href={href} className={styles.card}>
            <h2 className={inter.className}>
              {href} <span>-&gt;</span>
            </h2>
            <p className={inter.className}>{description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
