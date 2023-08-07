import { notFound } from "next/navigation";

export const runtime = "edge";

export default function PageA() {
  notFound();

  return (
    <div className="my-page">
      <div>
        <h1>Page A</h1>
      </div>
    </div>
  );
}
