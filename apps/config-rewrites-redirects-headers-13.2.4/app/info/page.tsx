import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <div>
      <h1>Info</h1>
      <Link href="/">back to <strong>/</strong></Link>
    </div>
  );
}
