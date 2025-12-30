import Image from 'next/image';
import Lightbox from '@/components/Lightbox';

export const metadata = {
  title: 'Galeri',
  description: 'Hendek Pansiyon fotoğraf galerisi',
};

export default function GaleriPage() {
  // All images in public folder
  const allImages = [
    'oda1.jpg', 'oda2.jpg', 'oda3.jpg', 'oda4.jpg', 'oda5.jpg', 'oda6.jpg',
    'oda7.jpg', 'oda8.jpg', 'oda9.jpg', 'oda10.jpg', 'oda11.jpg', 'oda12.jpg',
    'oda13.jpg', 'oda14.jpg', 'kantin.jpg'
  ];

  // Determine span class based on index for varied grid layout
  const getSpanClass = (index: number) => {
    if (index === 0) return 'span6';
    if (index >= 1 && index <= 2) return 'span3';
    if (index >= 3 && index <= 5) return 'span4';
    // For remaining images, alternate between span3 and span4
    return index % 2 === 0 ? 'span3' : 'span4';
  };

  return (
    <>
      <main className="page-hero">
        <div className="container">
          <div className="wrap">
            <div className="card pad">
              <span className="badge">Galeri</span>
              <h1>Fotoğraflar</h1>
              <p className="lead">Görsellere tıklayarak büyütebilir ve aralarında gezinebilirsiniz.</p>
            </div>
            <div className="hero-photo">
              <Image src="/oda1.jpg" alt="Galeri kapak" width={800} height={600} />
            </div>
          </div>
        </div>
      </main>

      <section className="section">
        <div className="container">
          <div className="grid gallery">
            {allImages.map((img, i) => (
              <div key={i} className={`g ${getSpanClass(i)}`} data-full={`/${img}`} data-index={i}>
                <Image src={`/${img}`} alt={`Galeri ${i + 1}`} width={800} height={600} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox images={allImages.map(img => `/${img}`)} />
    </>
  );
}
