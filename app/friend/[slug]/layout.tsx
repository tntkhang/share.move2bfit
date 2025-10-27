import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Move2BFit - Connect with Friends",
    description: "Join your friends on Move2BFit",
    openGraph: {
      title: "Move2BFit - Connect with Friends",
      description: "Join your friends on Move2BFit",
      url: 'https://share-move2bfit.vercel.app',
      images: [
        {
          url: 'https://share-move2bfit.vercel.app/logo_image.png',
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
      title: "Move2BFit - Connect with Friends",
      description: "Join your friends on Move2BFit",
      images: ['https://share-move2bfit.vercel.app/logo_image.png'],
    },
  };
}

export default function FriendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

