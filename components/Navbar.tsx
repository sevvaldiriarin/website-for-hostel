'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG, telUrl, waUrl, mapsUrl } from '@/lib/site';
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from './icons';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/odalar', label: 'Odalarımız' },
    { href: '/galeri', label: 'Galeri' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ÜST BİLGİ */}
      <div className="topbar">
        <div className="container">
          <div className="row">
            <small>Müsaitlik ve fiyat için arayın / WhatsApp.</small>
            <div className="actions">
              <a className="btn accent" href={telUrl}>
                <PhoneIcon />
                <span>{SITE_CONFIG.phone_display}</span>
              </a>
              <a className="btn accent" href={waUrl} target="_blank" rel="noopener">
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
              <a className="btn ghost" style={{color: '#fff', borderColor: 'rgba(255,255,255,.25)'}} href={mapsUrl} target="_blank" rel="noopener">
                <MapPinIcon />
                <span>Harita</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <Link className="brand" href="/" aria-label="Hendek Pansiyon">
              <Image src="/logo.jpg" alt="Hendek Pansiyon logosu" width={44} height={44} />
              <div>
                <div className="title">{SITE_CONFIG.name}</div>
                <div className="sub">{SITE_CONFIG.city}</div>
              </div>
            </Link>

            <div className="menu" aria-label="Menü">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive(link.href) ? 'active' : ''}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
