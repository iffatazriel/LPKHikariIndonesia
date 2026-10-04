'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation();
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY * 0.05);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' },
  };

  return (
    <section ref={ref} className="w-full pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left: Typography & CTAs */}
        <motion.div
          className="lg:col-span-7"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-brand-heading leading-[1.18] tracking-tight mb-6"
          >
            Wujudkan Karir Impian Ke Jepang
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl"
          >
            LPK Hikari membantu mempersiapkan calon pekerja melalui pelatihan bahasa, pemagangan resmi (Kenshusei), dan
            pembinaan budaya kerja Jepang agar siap berangkat dan beradaptasi.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3.5 mb-6"
          >
            <motion.a
              variants={buttonVariants}
              whileHover="hover"
              className="bg-brand-red hover:bg-brand-redHover text-white text-xs font-semibold px-6 py-2.5 rounded-full transition shadow-sm cursor-pointer"
              href="#kontak"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#kontak');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Chat admin
            </motion.a>
            <motion.a
              variants={buttonVariants}
              whileHover="hover"
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-semibold px-6 py-2.5 rounded-full transition shadow-sm cursor-pointer"
              href="#daftar"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#daftar');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Isi Formulir Registrasi
            </motion.a>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xs text-slate-500 font-normal"
          >
            Jam layanan: Senin-Sabtu, 08.00-16.00 WIB
          </motion.p>
        </motion.div>

        {/* Hero Right: Abstract Japanese Graphic with Parallax */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative py-6"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ y: mouseY }}
        >
          <div className="relative w-72 h-72 flex items-center justify-center">
            {/* Light Red / Pink Circle with Kanji Hikari (光) */}
            <motion.div
              className="w-56 h-56 rounded-full bg-red-200/75 flex items-center justify-center shadow-inner overflow-hidden relative"
              animate={{ y: mouseY * 0.5 }}
              transition={{ type: 'spring', stiffness: 50 }}
            >
              <motion.span
                className="text-white text-8xl font-bold opacity-90 kanji-watermark select-none pointer-events-none"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                光
              </motion.span>
            </motion.div>

            {/* Rounded Light Green Horizontal Bars */}
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-3.5 z-10">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-full max-w-[340px] h-3.5 bg-emerald-100/90 rounded-full shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
