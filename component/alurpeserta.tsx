'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AlurPeserta() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.2, ease: 'easeInOut' },
    },
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.8 },
    },
  };

  const steps = [
    {
      title: 'Daftar',
      desc: 'Hubungi admin lewat WhatsApp atau isi formulir untuk memulai proses seleksi.',
    },
    {
      title: 'Belajar Bahasa & Pembinaan',
      desc: 'Mengikuti kelas bahasa Jepang dan pembinaan mental, fisik, serta budaya kerja Jepang.',
    },
    {
      title: 'Seleksi',
      desc: 'Seleksi administrasi dan kemampuan sesuai syarat program',
    },
    {
      title: 'Pemberkasan',
      desc: 'Persiapan dokumen, visa, dan administrasi keberangkatan melalui jalur',
    },
    {
      title: 'Berangkat',
      desc: 'Keberangkatan ke Jepang melalui jalur kemitraan resmi setelah seluruh proses selesai.',
    },
  ];

  return (
    <section ref={ref} id="alur" className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          className="mb-6 md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg md:text-xl font-bold text-brand-heading">Alur Peserta</h2>
          <p className="text-xs text-slate-500 mt-1">Langkah berurutan dari pendaftaran hingga berangkat.</p>
        </motion.div>

        {/* Main Step Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Steps Timeline (Left) */}
          <div className="lg:col-span-8 relative">
            {/* Vertical connecting line */}
            <motion.div
              className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-red via-rose-300 to-emerald-200 origin-top"
              variants={lineVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
            />

            <motion.div
              className="space-y-4 md:space-y-6 relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
            >
              {steps.map((step, idx) => (
                <motion.div key={idx} variants={stepVariants} className="flex gap-3 md:gap-4 items-start">
                  {/* Number badge */}
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-bold shadow-md"
                    variants={numberVariants}
                  >
                    {idx + 1}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs md:text-sm font-bold text-brand-heading">{step.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action Box (Right) */}
          <motion.div
            className="lg:col-span-4"
            variants={ctaVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <motion.div
              className="bg-slate-50/70 border border-slate-100 rounded-xl md:rounded-2xl p-4 md:p-6"
              whileHover={{ scale: 1.02, boxShadow: '0 8px 16px rgba(0,0,0,0.08)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xs md:text-sm font-bold text-brand-heading mb-1.5">Siap memulai?</h3>
              <p className="text-[11px] leading-relaxed text-slate-500 mb-4 md:mb-5">
                Hubungi admin untuk info jalur program dan jadwal pendaftaran.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 md:gap-2.5">
                <motion.a
                  className="bg-brand-red hover:bg-brand-redHover text-white text-xs font-semibold px-4 md:px-5 py-2.5 rounded-full transition shadow-sm cursor-pointer min-h-[44px] flex items-center justify-center"
                  href="#kontak"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#kontak');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 6px 12px rgba(197,22,45,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Chat admin
                </motion.a>
                <motion.a
                  className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-semibold px-3 md:px-4 py-2.5 rounded-full transition shadow-sm cursor-pointer min-h-[44px] flex items-center justify-center"
                  href="#daftar"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#daftar');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Isi Formulir
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
