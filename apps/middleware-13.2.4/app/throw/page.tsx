export default function Page(): JSX.Element {
  throw new Error('This is a test error');
  return (
    <div>
      <h1>Somewhere Else</h1>
    </div>
  );
}

export const runtime = 'edge';
