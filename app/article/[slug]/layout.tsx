import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Move2BFit Article",
    description: "Read this article on Move2BFit",
    openGraph: {
      title: "Move2BFit Article",
      description: "Read this article on Move2BFit",
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
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Move2BFit Article",
      description: "Read this article on Move2BFit",
      images: ['https://share-move2bfit.vercel.app/logo_image.png'],
    },
  };
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

