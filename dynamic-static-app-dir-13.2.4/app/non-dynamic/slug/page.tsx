type Props = { params: { slug: string } };

export default function Page({ params }: Props): JSX.Element {
	return (
		<div>
			<h1>Dynamic Page</h1>
			<p>slug: {params?.slug}</p>
		</div>
	);
}
