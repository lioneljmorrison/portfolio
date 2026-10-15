import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { siteMeta } from './data';

// Runs before first paint: applies a stored colour choice so there is no flash. Keep it tiny and dependency-free.
const themeScript =
  'try{var m=localStorage.getItem("theme-mode");if(m==="light"||m==="dark")document.documentElement.dataset.mode=m;}catch(e){}';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.siteUrl),
  openGraph: {
    type: 'website',
    title: siteMeta.title,
    description: siteMeta.description,
    images: [{ url: siteMeta.ogImage, width: 1200, height: 630, alt: siteMeta.ogImageAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
