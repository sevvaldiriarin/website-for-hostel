import { SITE_CONFIG } from '@/lib/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-row">
          <div><b>{SITE_CONFIG.name}</b> • {SITE_CONFIG.city}</div>
          <div>© {currentYear}</div>
        </div>
      </div>
    </footer>
  );
}

