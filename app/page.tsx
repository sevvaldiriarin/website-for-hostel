import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, mapsUrl } from '@/lib/site';

export const metadata = {
  title: 'Hendek Pansiyon',
  description: 'Telefon/WhatsApp ile iletişim.',
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <main className="page-hero">
        <div className="container">
          <div className="wrap">
            <div className="card pad">
              <span className="badge">Hendek • Sakarya • 54300</span>
              <h1>Konforlu ve sakin konaklama</h1>
              <p className="lead">
                Hendek Pansiyon'da temiz ve rahat bir konaklama deneyimi. Müsaitlik ve fiyat için lütfen iletişime geçin.
              </p>

              <div style={{marginTop: '16px'}} className="mini">
                Adres: <a href={mapsUrl} target="_blank" rel="noopener" style={{fontWeight: 900, color: 'var(--primary)'}}>Hendek, Sakarya, Turkey, 54300</a>
              </div>
            </div>

            <div className="hero-photo">
              <Image src="/oda1.jpg" alt="Hendek Pansiyon görsel" width={800} height={600} />
            </div>
          </div>
        </div>
      </main>

      {/* ÖZELLİKLER */}
      <section className="section">
        <div className="container">
          <div className="grid features">
            <div className="card pad feature">
              <b>Temizlik & Konfor</b>
              <p>Konforlu konaklama için düzenli temizlik ve rahat bir ortam.</p>
            </div>
            <div className="card pad feature">
              <b>Kolay İletişim</b>
              <p>Telefon veya WhatsApp üzerinden hızlı dönüş.</p>
            </div>
            <div className="card pad feature">
              <b>Konum</b>
              <p>Hendek merkezine kolay erişim. Haritadan yol tarifi alın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ODALARA KISA BAKIŞ */}
      <section className="section">
        <div className="container">
          <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px', marginBottom: '16px', flexWrap: 'wrap'}}>
            <div>
              <h2 style={{margin: 0, letterSpacing: '-.3px'}}>Odalarımız</h2>
              <div className="mini">Farklı oda seçeneklerimiz mevcut.</div>
            </div>
            <Link className="btn primary" href="/odalar">Tüm Odaları Gör</Link>
          </div>

          <div className="grid rooms" style={{gridTemplateColumns: '1fr'}}>
            <article className="card room">
              <div className="thumb"><Image src="/oda1.jpg" alt="Oda örneği" width={400} height={300} /></div>
              <div className="body">
                <h3>Farklı Oda Seçenekleri</h3>
                <div className="tags"><span className="tag">Konforlu</span><span className="tag">Temiz</span></div>
                <div className="mini">Detaylı fotoğraflar için galerimizi ziyaret edin.</div>
              </div>
              <div className="actions">
                <Link className="btn primary" href="/galeri">Galeriye Git</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* KONUM KISA */}
      <section className="section">
        <div className="container">
          <div className="grid two-col">
            <div className="card pad">
              <h2 style={{margin: '0 0 10px'}}>Konum</h2>
              <p className="mini" style={{margin: '0 0 14px'}}>
                Adrese tıklayınca Google Haritalar açılır.
              </p>
              <a className="btn" href={mapsUrl} target="_blank" rel="noopener" style={{width: '100%', justifyContent: 'flex-start'}}>
                {SITE_CONFIG.address_text} (Haritada Aç)
              </a>

              <div style={{marginTop: '12px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                <Link className="btn primary" href="/iletisim">İletişim</Link>
                <a className="btn accent" href={mapsUrl} target="_blank" rel="noopener">Yol Tarifi</a>
              </div>
            </div>

            <div className="card pad">
              <h2 style={{margin: '0 0 10px'}}>Hakkında</h2>
              <p className="mini" style={{margin: '0 0 14px'}}>
                Hendek Pansiyon hakkında daha fazla bilgi edinmek için sayfamızı ziyaret edin.
              </p>
              <div style={{display: 'grid', gap: '10px'}}>
                <Link className="btn primary" href="/hakkimizda">Hakkımızda</Link>
                <Link className="btn accent" href="/galeri">Galeri</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
