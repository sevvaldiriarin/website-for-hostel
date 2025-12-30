'use client';

import { useEffect, useState, useCallback } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from './icons';

interface LightboxProps {
  images: string[];
}

export default function Lightbox({ images }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightboxImg');
    if (lb && lbImg) {
      lbImg.setAttribute('src', images[index]);
      lb.classList.add('open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }, [images]);

  const close = useCallback(() => {
    setIsOpen(false);
    const lb = document.getElementById('lightbox');
    if (lb) {
      lb.classList.remove('open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }, []);

  const next = useCallback(() => {
    if (!isOpen) return;
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    const lbImg = document.getElementById('lightboxImg');
    if (lbImg) {
      lbImg.setAttribute('src', images[nextIndex]);
    }
  }, [images, currentIndex, isOpen]);

  const prev = useCallback(() => {
    if (!isOpen) return;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    const lbImg = document.getElementById('lightboxImg');
    if (lbImg) {
      lbImg.setAttribute('src', images[prevIndex]);
    }
  }, [images, currentIndex, isOpen]);

  useEffect(() => {
    const handleGalleryClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const galleryItem = target.closest('.g');
      if (!galleryItem) return;

      const indexAttr = galleryItem.getAttribute('data-index');
      const index = indexAttr ? parseInt(indexAttr, 10) : 0;
      open(index);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };

    const handleClickOutside = (e: MouseEvent) => {
      const lb = document.getElementById('lightbox');
      if (lb && e.target === lb) close();
    };

    document.querySelectorAll('.g').forEach((el) => {
      el.addEventListener('click', handleGalleryClick);
    });

    const closeBtn = document.getElementById('lightboxClose');
    const nextBtn = document.getElementById('lightboxNext');
    const prevBtn = document.getElementById('lightboxPrev');
    const lb = document.getElementById('lightbox');

    if (closeBtn) closeBtn.addEventListener('click', close);
    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (lb) lb.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.querySelectorAll('.g').forEach((el) => {
        el.removeEventListener('click', handleGalleryClick);
      });
      if (closeBtn) closeBtn.removeEventListener('click', close);
      if (nextBtn) nextBtn.removeEventListener('click', next);
      if (prevBtn) prevBtn.removeEventListener('click', prev);
      if (lb) lb.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, close, next, prev, isOpen]);

  return (
    <div className="lightbox" id="lightbox" aria-hidden="true">
      <button className="lightbox-close" id="lightboxClose" aria-label="Kapat">
        <CloseIcon />
      </button>
      <button className="lightbox-nav lightbox-prev" id="lightboxPrev" aria-label="Önceki">
        <ArrowLeftIcon />
      </button>
      <button className="lightbox-nav lightbox-next" id="lightboxNext" aria-label="Sonraki">
        <ArrowRightIcon />
      </button>
      <img id="lightboxImg" alt="Büyük görsel" />
    </div>
  );
}
