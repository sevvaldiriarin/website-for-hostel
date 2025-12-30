import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hendek Pansiyon',
  description: 'Online rezervasyon yoktur. Telefon/WhatsApp ile iletişim.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

