import { useRouter } from "next/router";

export const config = { runtime: "experimental-edge" };

export async function getServerSideProps({
  params,
}: {
  params: { routeName: string };
}) {
  return {
    props: {
      routeNameFromServiceSideProps: params.routeName,
    },
  };
}

export default function RouteADynamic({
  routeNameFromServiceSideProps,
}: {
  routeNameFromServiceSideProps: string;
}) {
  const router = useRouter();
  const { routeName } = router.query;

  return (
    <>
      <h1>Route A Dynamic :</h1>
      <h2>routeName: {routeName}</h2>
      <h2>routeNameFromServiceSideProps: {routeNameFromServiceSideProps}</h2>
    </>
  );
}
