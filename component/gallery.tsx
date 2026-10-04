'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { galleryData, GalleryItem } from '@/data/gallery';
import { Lightbox } from './Lightbox';

type FilterCategory = 'semua' | 'kegiatan-belajar' | 'pembinaan' | 'keberangkatan';

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('semua');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filters = [
    { value: 'semua' as FilterCategory, label: 'Semua' },
    { value: 'kegiatan-belajar' as FilterCategory, label: 'Kegiatan Belajar' },
    { value: 'pembinaan' as FilterCategory, label: 'Pembinaan' },
    { value: 'keberangkatan' as FilterCategory, label: 'Keberangkatan' },
  ];

  const filteredGallery =
    activeFilter === 'semua'
      ? galleryData
      : galleryData.filter((item) => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section ref={ref} id="galeri" className="w-full py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold text-brand-heading">Galeri Kegiatan</h2>
          <p className="text-xs text-slate-500 mt-1">Lihat berbagai kegiatan dan momen di LPK Hikari Indonesia.</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all min-h-[44px] focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                activeFilter === filter.value
                  ? 'bg-brand-red text-white shadow-md focus:ring-brand-red'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-brand-red'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {filteredGallery.map((item) => (
            <motion.button
              key={item.id}
              variants={itemVariants}
              onClick={() => setSelectedImage(item)}
              className="relative overflow-hidden rounded-xl bg-slate-200 aspect-video group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
              whileHover={{ scale: 1.02 }}
            >
              {/* Placeholder with camera icon */}
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-300 to-slate-400">
                <svg className="w-12 h-12 text-slate-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-xs text-slate-600 font-medium text-center px-2">
                  Foto akan ditambahkan setelah izin LPK
                </p>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0-2C6.48 6 2 9.58 2 14s4.48 8 10 8 10-3.58 10-8-4.48-8-10-8z" />
                </svg>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-xs text-white font-medium line-clamp-2">{item.caption}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Note */}
        <motion.p
          className="text-xs text-slate-500 mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          Foto dipublikasikan atas izin LPK dan peserta.
        </motion.p>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          item={selectedImage}
          allItems={filteredGallery}
          onClose={() => setSelectedImage(null)}
          onNext={() => {
            const currentIndex = filteredGallery.findIndex((item) => item.id === selectedImage.id);
            if (currentIndex < filteredGallery.length - 1) {
              setSelectedImage(filteredGallery[currentIndex + 1]);
            }
          }}
          onPrev={() => {
            const currentIndex = filteredGallery.findIndex((item) => item.id === selectedImage.id);
            if (currentIndex > 0) {
              setSelectedImage(filteredGallery[currentIndex - 1]);
            }
          }}
        />
      )}
    </section>
  );
}
