import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  title: 'J&G Exports',
  description: 'Premium Coffee, Plants, and Cacao from Costa Rica',
  openGraph: {
    title: 'J&G Exports',
    description: 'Premium Coffee, Plants, and Cacao from Costa Rica',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Premium exports from Costa Rica',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
