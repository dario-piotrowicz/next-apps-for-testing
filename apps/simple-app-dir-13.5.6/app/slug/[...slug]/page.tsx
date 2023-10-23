export const runtime = 'edge';

export default function SlugPage({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      <h1>Dynamic Route</h1>
      <h2 style={{display: 'inline'}}>Params.slug: </h2>
      <span>{JSON.stringify(params.slug)}</span>
    </div>
  )
}
