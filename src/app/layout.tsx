import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/sonner"

import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "推し株診断",
  description: "推し株診断 - あなたの推し株を診断します",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@se4weed_jp" />
        <meta name="twitter:title" content="推し株診断" />
        <meta name="twitter:description" content="あなたの推し株を診断します。株式投資への第一歩を踏み出しましょう！" />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/twitter-card.png`} />
      </Head>
      <body className={inter.className}>
        <main className="h-screen w-screen">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
