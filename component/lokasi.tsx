'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Lokasi() {
  const { ref, isVisible } = useScrollAnimation();

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} className="w-full py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Location Details */}
        <motion.div
          className="lg:col-span-6 space-y-4"
          variants={leftVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <h2 className="text-xl font-bold text-brand-heading">Lokasi & Jam Layanan</h2>
          <p className="text-xs text-slate-600 leading-relaxed max-w-md">
            Kedungsari, Bumireja, Kec. Kedungreja, Kabupaten Cilacap, Jawa Tengah 53263 (jalur JLS
            Kedungreja-Gandrungmangu)
          </p>
          <motion.div variants={itemVariants}>
            <span className="block text-xs font-bold text-slate-800">Jam layanan</span>
            <span className="text-xs text-slate-500">Senin-Sabtu, 08.00-16.00 WIB</span>
          </motion.div>
          <motion.div className="pt-1" variants={itemVariants}>
            <motion.a
              className="inline-block bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-semibold px-5 py-2 rounded-full transition shadow-sm cursor-pointer"
              href="https://maps.google.com"
              rel="noopener noreferrer"
              target="_blank"
              whileHover={{ scale: 1.05, boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Buka di Google Maps
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Quick Contact Box */}
        <motion.div
          className="lg:col-span-6"
          variants={rightVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.div
            className="bg-slate-50/70 border border-slate-100 rounded-2xl p-6"
            whileHover={{ boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
          >
            <h3 className="text-xs font-bold text-brand-heading mb-4">Kontak Cepat</h3>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <motion.a
                className="bg-brand-red hover:bg-brand-redHover text-white text-xs font-semibold px-5 py-2.5 rounded-full transition shadow-sm cursor-pointer"
                href="https://wa.me/6289672022977"
                rel="noopener noreferrer"
                target="_blank"
                whileHover={{ scale: 1.05, boxShadow: '0 6px 12px rgba(197,22,45,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Chat WhatsApp +62 896-7202-2977
              </motion.a>
              <motion.a
                className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-semibold px-5 py-2.5 rounded-full transition shadow-sm cursor-pointer"
                href="https://wa.me/62882003132501"
                rel="noopener noreferrer"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kontak alternatif 0882003132501
              </motion.a>
            </div>
            <p className="text-[11px] text-slate-500">
              Ikuti kami:{' '}
              <motion.a
                className="hover:underline font-medium text-slate-600 cursor-pointer"
                href="#"
                whileHover={{ color: '#C5162D' }}
              >
                Instagram @lpk_hikari_sidareja
              </motion.a>{' '}
              ·{' '}
              <motion.a
                className="hover:underline font-medium text-slate-600 cursor-pointer"
                href="#"
                whileHover={{ color: '#C5162D' }}
              >
                TikTok @lpkhikariindonesiaclcp
              </motion.a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

