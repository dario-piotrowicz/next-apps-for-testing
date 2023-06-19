
export const runtime = 'edge';

export default function FailMe() {
  throw new Error('this page should always fail');

  return (
    <div className="p-9">
        <span className="text-red-500">You should never see this message, as this page should always throw!</span>
    </div>
  )
}
