import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arovis - Accelerate Your Growth',
  description: 'Seamless Digital Connections: AI-Driven Marketing, Data Intelligence & Premium Traffic',
  openGraph: {
    images: ['https://bolt.new/static/og_default.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://bolt.new/static/og_default.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
