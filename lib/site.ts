// Site configuration constants
export const SITE_CONFIG = {
  name: "Hendek Pansiyon",
  city: "Hendek • Sakarya",
  address_text: "Zeki Cömert Parkı Yanı, Başpınar, başpınar caddesi Caddesi Şeref KIRVAL pasajı D:1. Kat, 54300 Hendek/Sakarya",
  phone_display: "0537 393 30 79",
  phone_tel: "+905373933079",
  wa_number: "905373933079",
  wa_text: "Merhaba, Hendek Pansiyon için müsaitlik ve fiyat bilgisi alabilir miyim?",
  email: "info@hendekpansiyon.com",
};

// Map coordinates
const mapsLat = "40.79702205737806";
const mapsLng = "30.746117121213928";
const mapsCoords = `${mapsLat},${mapsLng}`;

// Generate URLs
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsCoords}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsCoords}&output=embed`;
export const telUrl = `tel:${SITE_CONFIG.phone_tel}`;
export const waUrl = `https://wa.me/${SITE_CONFIG.wa_number}?text=${encodeURIComponent(SITE_CONFIG.wa_text)}`;

