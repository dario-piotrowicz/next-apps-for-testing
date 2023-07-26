export const runtime = "experimental-edge" ;

export default function RouteADynamic({
  params = {},
}: {
  params?: Record<string, string>;
}) {
  return (
    <>
      <h1>Route A Dynamic :</h1>
      <h2>{JSON.stringify({ params })}</h2>
    </>
  );
}
