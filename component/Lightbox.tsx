'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { GalleryItem } from '@/data/gallery';

interface LightboxProps {
  item: GalleryItem;
  allItems: GalleryItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({ item, allItems, onClose, onNext, onPrev }: LightboxProps) {
  const currentIndex = allItems.findIndex((i) => i.id === item.id);
  const hasNext = currentIndex < allItems.length - 1;
  const hasPrev = currentIndex > 0;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [hasNext, hasPrev, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Main content */}
        <motion.div
          className="relative max-w-4xl w-full flex flex-col"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image placeholder */}
          <div className="bg-slate-300 aspect-video rounded-lg overflow-hidden flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <svg className="w-16 h-16 text-slate-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm text-slate-600 font-medium text-center px-4">
                Foto akan ditambahkan setelah izin LPK
              </p>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <p className="text-white text-sm font-medium">{item.caption}</p>
            <p className="text-slate-400 text-xs mt-2">
              {currentIndex + 1} dari {allItems.length}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-6 gap-4">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Foto sebelumnya"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Tutup"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={onNext}
              disabled={!hasNext}
              className="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Foto berikutnya"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Close hint */}
          <p className="text-center text-xs text-slate-400 mt-4">Tekan ESC untuk tutup</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
