import type { Metadata } from 'next';

import type { SEOConfig } from '@/types';

export const siteConfig: SEOConfig = {
  title: 'Tournament',
  siteName: 'Tournament - Epic Games Made For True Gamers',
  description:
    'Join Tournament esports team for competitive gaming tournaments, news, and community. Epic games made for true gamers.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/assets/images/hero-banner.png',
  twitterHandle: '@Tournament',
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    'esports',
    'gaming',
    'tournament',
    'competitive gaming',
    'valorant',
    'apex legends',
    'league of legends',
    'gaming team',
    'Tournament',
  ],
  authors: [{ name: 'Tournament Team' }],
  creator: 'Tournament',
  publisher: 'Tournament',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: siteConfig.siteName,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.siteName,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
};
