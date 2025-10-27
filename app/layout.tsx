import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Move2BFit",
  description: "Join Move2BFit - Your fitness journey starts here",
  metadataBase: new URL('https://share-move2bfit.vercel.app'),
  openGraph: {
    title: "Move2BFit",
    description: "Join Move2BFit - Your fitness journey starts here",
    images: [
      {
        url: '/logo_image.png',
        width: 1200,
        height: 630,
        alt: 'Move2BFit Logo',
      }
    ],
    siteName: 'Move2BFit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Move2BFit",
    description: "Join Move2BFit - Your fitness journey starts here",
    images: ['/logo_image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
