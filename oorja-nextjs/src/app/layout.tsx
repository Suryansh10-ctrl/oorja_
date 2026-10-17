import type { Metadata } from 'next';
import './globals.css';
import { FestProvider } from '../context/FestContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://oorjafest.in'),
  title: 'OORJA 2026 — Where Energy Meets Celebration | Annual College Fest',
  description:
    'OORJA 2026 — Scintillating The Aura. Three days of music, culture, competition, creativity and memories. Annual College Fest at Main Ground, North Campus.',
  keywords: [
    'OORJA',
    'OORJA 2026',
    'Scintillating The Aura',
    'College Fest',
    'North Campus',
    'DU Fest',
    'Bhangra Night',
    'DJ Night',
    'Star Night',
    'Battle of Bands',
    'HackOORJA',
  ],
  authors: [{ name: 'OORJA Fest Committee' }],
  openGraph: {
    type: 'website',
    url: 'https://oorjafest.in/',
    title: 'OORJA 2026 — Scintillating The Aura',
    description:
      'OORJA 2026 — Where Energy Meets Celebration. Join us for 3 days of music, dance, competitions and star nights at North Campus!',
    siteName: 'OORJA 2026',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OORJA — Scintillating The Aura',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OORJA 2026 — Scintillating The Aura',
    description:
      'ZION 2026 — Where Energy Meets Celebration. Join us for 3 days of music, dance, competitions and star nights at North Campus!',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/og-image.jpg' },
      { url: '/og-image.jpg', type: 'image/jpeg' },
    ],
    shortcut: '/og-image.jpg',
    apple: '/og-image.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <FestProvider>{children}</FestProvider>
      </body>
    </html>
  );
}
