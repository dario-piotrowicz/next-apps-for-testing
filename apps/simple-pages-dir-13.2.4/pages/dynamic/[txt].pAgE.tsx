import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { txt } = router.query;

  return <h1>This is a dynamic route, the provided text is: {txt}</h1>;
}
