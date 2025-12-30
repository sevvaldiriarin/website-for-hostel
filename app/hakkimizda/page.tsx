import Link from 'next/link';
import Image from 'next/image';
import { mapsUrl } from '@/lib/site';

export const metadata = {
  title: 'Hakkımızda',
  description: 'Hendek Pansiyon hakkında - Hendek/Sakarya',
};

export default function HakkimizdaPage() {
  return (
    <>
      <main className="page-hero">
        <div className="container">
          <div className="wrap">
            <div className="card pad">
              <span className="badge">Hakkımızda</span>
              <h1>Hendek Pansiyon</h1>
              <p className="lead">
                Hendek/Sakarya'da konforlu ve temiz konaklama sunmayı hedefliyoruz.
                (Bu metin taslaktır; istersen işletmenin hikayesine göre düzenleyelim.)
              </p>
              <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '16px'}}>
                <Link className="btn primary" href="/iletisim">İletişim</Link>
                <a className="btn" href={mapsUrl} target="_blank" rel="noopener">Konumu Gör</a>
              </div>
            </div>
            <div className="hero-photo">
              <Image src="/oda3.jpg" alt="Hakkımızda görsel" width={800} height={600} />
            </div>
          </div>
        </div>
      </main>

      <section className="section">
        <div className="container">
          <div className="grid two-col">
            <div className="card pad">
              <h2 style={{margin: '0 0 10px'}}>Misyonumuz</h2>
              <p className="mini" style={{margin: 0}}>
                Misafirlerimize sıcak, güvenli ve rahat bir ortam sağlamak.
                Temizlik, iletişim ve konfor odaklı hizmet.
              </p>
            </div>
            <div className="card pad">
              <h2 style={{margin: '0 0 10px'}}>Neden Biz?</h2>
              <p className="mini" style={{margin: 0}}>
                Kolay ulaşım • Hızlı iletişim • Rahat konaklama • Hendek'te merkezi konum.
              </p>
            </div>
          </div>

          <div style={{height: '18px'}}></div>

          <div className="card pad">
            <h2 style={{margin: '0 0 10px'}}>Kurallar (taslak)</h2>
            <p className="mini" style={{margin: 0}}>
              Check-in/Check-out saatleri, sigara/evcil hayvan politikası vb. bilgileri buraya ekleyebiliriz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

