const Page = () => {
  return <div>Testing</div>;
};

export const runtime = 'experimental-edge';

export async function getStaticPaths() {
  let paths = [];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}

export default Page;
