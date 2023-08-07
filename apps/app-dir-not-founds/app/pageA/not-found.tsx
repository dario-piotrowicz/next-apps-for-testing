export const runtime = "edge";

export default function NotFound() {
  return (
    <div className="my-page">
      <div>
        <h1>404</h1>
        <h2>This is a custom 404 page</h2>
        <h3>
          (at <span>/app/pageA</span>)
        </h3>
      </div>
    </div>
  );
}
