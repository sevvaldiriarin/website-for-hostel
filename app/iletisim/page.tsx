import Image from 'next/image';
import { SITE_CONFIG, telUrl, waUrl, mapsUrl, mapsEmbedUrl } from '@/lib/site';
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from '@/components/icons';

export const metadata = {
  title: 'İletişim',
  description: 'Hendek Pansiyon iletişim bilgileri',
};

export default function IletisimPage() {
  return (
    <>
      <main className="page-hero">
        <div className="container">
          <div className="wrap">
            <div className="card pad">
              <span className="badge">İletişim</span>
              <h1>Bize ulaşın</h1>
              <p className="lead">
                <b>Şimdilik sadece grup rezervasyonu kabul ediyoruz.</b> Müsaitlik ve fiyat bilgisi için telefon veya WhatsApp'tan iletişime geçebilirsiniz.
              </p>
              <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '16px'}}>
                <a className="btn primary" href={telUrl}>
                  <PhoneIcon />
                  <span>{SITE_CONFIG.phone_display}</span>
                </a>
                <a className="btn accent" href={waUrl} target="_blank" rel="noopener">
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="hero-photo">
              <Image src="/oda4.jpg" alt="İletişim görsel" width={800} height={600} />
            </div>
          </div>
        </div>
      </main>

      <section className="section">
        <div className="container">
          <div className="grid two-col">
            <div className="card pad">
              <h2 style={{margin: '0 0 10px'}}>Adres</h2>

              <a className="btn" href={mapsUrl} target="_blank" rel="noopener"
                 style={{width: '100%', justifyContent: 'flex-start', marginBottom: '12px'}}>
                <MapPinIcon />
                <span>{SITE_CONFIG.address_text} (Google Maps'te aç)</span>
              </a>

              {/* INTERACTIVE MAP */}
              <div className="map-wrap" style={{marginTop: '12px'}}>
                <iframe
                  src={mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Hendek Pansiyon Konum"
                  style={{pointerEvents: 'auto'}}
                ></iframe>
              </div>

              <div className="mini" style={{marginTop: '10px'}}>
                Haritayı içeride gezinebilir ve yakınlaştırabilirsiniz.
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
