import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div style={{ display: "none" }}>
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

      <div className={styles.center} style={{ display: "none" }}>
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
        {links.map(({ href, title, description }) => (
          <Link key={href} href={href} className={styles.card}>
            <h2>
              {title}
              <span>-&gt;</span>
            </h2>
            <p>{description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

const links: { href: string; title: string; description: string }[] = [
  {
    href: "/routeA",
    title: "Route A",
    description: "Test nested and dynamic routes.",
  },
  { href: "/api/qs", title: "QS", description: "Testing the qs npm package" },
  {
    href: "/api/pretty-print-json",
    title: "Pretty-Print-Json",
    description: "Testing the pretty-print-json npm package",
  },
  {
    href: "/api/lorem-ipsum",
    title: "Lorem-Ipsum",
    description: "Lorem ipsum dynamic text",
  },
  {
    href: "/api/lorem-ipsum?static=0",
    title: "Lorem-Ipsum",
    description: "Lorem ipsum static text",
  },
  { href: "/api/zod", title: "Zod", description: "testing zod" },
  { href: "/api/moment", title: "moment", description: "testing moment" },
  {
    href: "/wasms/wasm",
    title: "Wasm",
    description: "a simple page using wasm",
  },
  {
    href: "/material-ui",
    title: "Material U",
    description: "a simple page implemented using Material UI",
  },
  {
    href: "/nextui",
    title: "NextU",
    description: "a simple page implemented using NextUI",
  },
  {
    href: "/antd",
    title: "Ant Desig",
    description: "a simple page implemented using Ant Design",
  },
  {
    href: "/chakra-ui",
    title: "Chakra UI",
    description: "a simple page implemented using Chakra UI",
  },
  {
    href: "/react-bootstrap",
    title: "React Bootstrap",
    description: "a simple page implemented using React Bootstrap",
  },
  {
    href: "/font-awesome-icons",
    title: "FA Icons",
    description: "a simple page showing some Font Awesome Icons",
  },
  {
    href: "/api/marked",
    title: "marked",
    description: "Testing the marked npm package",
  },
  {
    href: "/api/og",
    title: "og",
    description: "Hello world printed with vercel/og",
  },
];
