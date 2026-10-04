'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Why() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -8,
      boxShadow: '0 12px 28px rgba(197,22,45,0.12)',
      backgroundColor: 'rgba(197, 22, 45, 0.02)',
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const benefits = [
    {
      title: 'Lokasi Strategis',
      desc: 'Berlokasi di Kedungsari, Bumireja, akses melalui jalur JLS Kedungreja–Gandrungmangu memudahkan peserta dari Cilacap Barat dan sekitarnya.',
    },
    {
      title: 'Pembinaan Lengkap',
      desc: 'Pembinaan mental, fisik, disiplin, dan budaya kerja Jepang agar peserta siap dan tidak kaget budaya.',
    },
    {
      title: 'Jalur Resmi',
      desc: 'Program pemagangan diselenggarakan lewat jalur kemitraan resmi untuk memastikan administrasi dan proses keberangkatan yang sesuai aturan.',
    },
  ];

  return (
    <section ref={ref} className="w-full py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.h2
          className="text-xl font-bold text-brand-heading mb-6"
          variants={titleVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          Kenapa belajar di LPK Hikari?
        </motion.h2>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-5 border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <h3 className="font-bold text-xs text-brand-heading mb-2">{benefit.title}</h3>
              <p className="text-[11.5px] leading-relaxed text-slate-500">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
