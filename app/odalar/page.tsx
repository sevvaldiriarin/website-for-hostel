import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Odalarımız',
  description: 'Hendek Pansiyon odaları',
};

export default function OdalarPage() {
  return (
    <>
      <main className="page-hero">
        <div className="container">
          <div className="wrap">
            <div className="card pad">
              <span className="badge">Odalarımız</span>
              <h1>Farklı Oda Seçeneklerimiz</h1>
              <p className="lead">
                Farklı oda seçeneklerimiz mevcut. Detaylı fotoğraflar ve daha fazla bilgi için galerimizi ziyaret edebilirsiniz.
                Detay ve fiyat için lütfen iletişime geçin.
              </p>
            </div>
            <div className="hero-photo">
              <Image src="/oda1.jpg" alt="Oda görseli" width={800} height={600} />
            </div>
          </div>
        </div>
      </main>

      <section className="section">
        <div className="container">
          <div className="card pad" style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto'}}>
            <h2 style={{margin: '0 0 16px'}}>Oda Çeşitlerimiz</h2>
            <p className="mini" style={{margin: '0 0 24px'}}>
              Pansiyonumuzda farklı oda tipleri bulunmaktadır. Tüm odalarımızın detaylı fotoğraflarını galerimizde görebilirsiniz.
            </p>
            <Link className="btn primary" href="/galeri" style={{fontSize: '16px', padding: '14px 24px'}}>
              Galeriyi Görüntüle
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
