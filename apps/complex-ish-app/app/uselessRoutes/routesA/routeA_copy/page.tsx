import Link from "next/link";

export default function RouteA() {
  return (
    <div>
      <h1>Route A</h1>
      <br />
      <Link href="/routeA/routeA1">To route A1</Link>
      <br />
      <Link href="/routeA/dRoute/this%20is%20a%20dynamic%20route">
        To DynamicRoute
      </Link>
    </div>
  );
}
