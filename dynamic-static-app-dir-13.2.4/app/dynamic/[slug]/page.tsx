type Props = { params: { slug: string } };

export default function Page({ params }: Props): JSX.Element {
	return (
		<div>
			<h1>Dynamic Page</h1>
			<p>slug: {params.slug}</p>
		</div>
	);
}

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
	const slugs = ['foo', 'bar', 'baz'];
	return slugs.map(slug => ({ slug }));
};

// NOTE: It seems that there is a limitation where it is not possible to generate an edge runtime function for catching dynamic routes non generated at build time.
// Therefore, we specify that routes not generated at build time can 404.
export const dynamicParams = false;
