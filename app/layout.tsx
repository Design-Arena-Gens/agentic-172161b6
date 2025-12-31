import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Victory with Ash • Mobile Experience',
  description:
    'Victory with Ash mobile-first experience: elevate your mindset, monetize your skills, and join a global mentorship community designed for growth.',
  keywords: [
    'Victory with Ash',
    'Ash Mufareh',
    'personal growth',
    'mentorship',
    'community',
    'android app',
    'mobile learning'
  ],
  applicationName: 'Victory with Ash Mobile',
  authors: [{ name: 'Victory with Ash' }],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
