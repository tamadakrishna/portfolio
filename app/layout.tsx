import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/layouts/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-[100vw] h-[55px]">
          <Header/>
        </div>
        <div className="w-[100vw] h-[calc(100vh_-_55px)]">
          {children}
        </div>
      </body>
    </html>
  );
}
