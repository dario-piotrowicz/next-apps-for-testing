import { Inter } from "next/font/google";

import './global.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Geolocation & Data Cache",
  description: "Geolocation & Data Cache example app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto h-screen flex flex-col">
          <div className="px-8 bg-accents-0">{children}</div>
        </div>
      </body>
    </html>
  );
}
