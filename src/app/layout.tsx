/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from 'next';

import Layout from '@/components/Layout';
import { defaultMetadata } from '@/config/seo';
import '@/styles/globals.scss';

export const metadata: Metadata = defaultMetadata;

// Get the base path from environment variable
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;500;600;700&family=Work+Sans:wght@600&display=swap"
          rel="stylesheet"
        />

        {/* PWA Manifest with basePath */}
        <link rel="manifest" href={`${basePath}/manifest.json`} />

        {/* Favicon fallback */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.svg" />

        {/* Ionicons */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          async
        />
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          async
        />
      </head>
      <body
        suppressHydrationWarning
        style={{ backgroundImage: 'url(assets/images/body-bg.jpg)' }}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
