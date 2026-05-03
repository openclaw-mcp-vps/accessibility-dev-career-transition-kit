import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Accessibility Dev Career Transition Kit',
  description: 'Career transition toolkit for developers going blind. Comprehensive guides, screen reader tutorials, and resources for software engineers with vision impairments.',
  keywords: 'accessibility, blind developer, screen reader, career transition, vision impairment, software engineering',
  openGraph: {
    title: 'Accessibility Dev Career Transition Kit',
    description: 'Career transition toolkit for developers going blind.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f426696e-9213-4bb1-8bec-1199d663057c"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
