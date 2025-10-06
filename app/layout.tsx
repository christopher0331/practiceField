import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import MegaMenu from '../components/MegaMenu';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Leiomyosarcoma Portal',
  description: 'Educational content hub with mega menu and structured pages about leiomyosarcoma.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container megamenu">
            <Link href="/" className="brand">Leiomyosarcoma Portal</Link>
            <MegaMenu />
            <div className="search">
              <input type="search" placeholder="Search (UI only)" aria-label="Search" />
            </div>
          </div>
        </header>
        <main className="container" style={{ paddingTop: '1.25rem' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
