import { Playfair_Display, Manrope } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { Nav } from '@/components/site/Nav';
import { Footer } from '@/components/site/Footer';
import { ScrollToTop } from '@/components/site/ScrollToTop';
import { SITE } from '@/lib/site';
import { img } from '@/lib/images';

import '@/styles/tokens.css';
import '@/styles/global.css';
import '@/styles/site.css';
import '@/styles/sections.css';
import '@/styles/forms.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    'Aurelia Dental Studio is a private dental studio offering cosmetic dentistry, implants, clear aligners and preventive care — planned digitally, delivered gently.',
  keywords: [
    'cosmetic dentistry',
    'dental implants',
    'clear aligners',
    'preventive dentistry',
    'private dental studio',
    'London dentist',
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      'Modern dentistry designed around comfort, precision and the natural beauty of your smile.',
    images: [
      {
        url: img({
          id: 38055771,
          alt: '',
        }),
        width: 1200,
        height: 630,
        alt: `${SITE.name} — private dental care, reimagined`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: 'Modern dentistry designed around comfort, precision and natural beauty.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: '#173f3a',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <ScrollToTop />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
