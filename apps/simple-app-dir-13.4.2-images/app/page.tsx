import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center justify-center">
          <span>Relative Image</span>
          <Image
            alt="/images/1.jpg"
            src="/images/1.jpg"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>Allowed External Image</span>
          <Image
            alt="https://placehold.co/100x100.png"
            src="https://placehold.co/100x100.png"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>Disallowed External Image</span>
          <Image
            alt="https://i.imgur.com/dPrwfg8.png"
            src="https://i.imgur.com/dPrwfg8.png"
            width={200}
            height={200}
          />
        </div>
      </div>
    </main>
  );
}
