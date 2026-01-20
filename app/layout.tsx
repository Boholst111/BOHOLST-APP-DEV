import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'John Paul Boholst - Full-Stack Developer Portfolio',
  description:
    'Full-Stack Developer specializing in building high-performance web applications with React, Next.js, TypeScript, and Node.js. Available for new opportunities.',
  keywords: [
    'developer',
    'portfolio',
    'full-stack',
    'react',
    'next.js',
    'typescript',
    'tailwind css',
    'framer motion',
    'john paul boholst',
    'web development',
  ],
  authors: [{ name: 'John Paul Boholst' }],
  creator: 'John Paul Boholst',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johnboholst.com',
    siteName: 'John Paul Boholst - Developer Portfolio',
    title: 'John Paul Boholst - Full-Stack Developer',
    description:
      'Building high-performance web applications with clean, scalable code.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
