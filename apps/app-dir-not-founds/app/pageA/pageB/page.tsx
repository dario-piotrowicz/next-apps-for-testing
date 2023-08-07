import { notFound } from "next/navigation";

export const runtime = "edge";

export default function PageB() {
  notFound();

  return (
    <div className="my-page">
      <div>
        <h1>Page B</h1>
      </div>
    </div>
  );
}
