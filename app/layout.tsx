import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Runs before first paint: applies a stored colour choice so there is no flash. Keep it tiny and dependency-free.
const themeScript =
  'try{var m=localStorage.getItem("theme-mode");if(m==="light"||m==="dark")document.documentElement.dataset.mode=m;}catch(e){}';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Lionel Morrison - Portfolio',
  description: 'Portfolio of work created in NextJS',
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
