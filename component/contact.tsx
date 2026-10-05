'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    nama: '',
    usia: '',
    program: 'Pelatihan Bahasa Jepang',
  });

  const handleSubmit = () => {
    const message = `Halo, saya ingin mendaftar:%0A%0ANama: ${formData.nama}%0AUsia: ${formData.usia}%0AProgram: ${formData.program}`;
    window.open(`https://wa.me/6289672022977?text=${message}`, '_blank');
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    focus: {
      scale: 1.02,
      boxShadow: '0 4px 12px rgba(197,22,45,0.15)',
    },
  };

  return (
    <section ref={ref} className="w-full py-8 md:py-14 bg-slate-50/50" id="kontak">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title Header */}
        <motion.div
          className="mb-6 md:mb-7"
          variants={titleVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <h2 className="text-lg md:text-xl font-bold text-brand-heading">Kontak & Pendaftaran</h2>
          <p className="text-xs text-slate-500 mt-1">
            Isi formulir singkat dan tekan 'Chat admin' untuk mengirim pesan pendaftaran via WhatsApp dengan data terisi
            otomatis.
          </p>
        </motion.div>

        {/* Two-Column Form & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start" id="daftar">
          {/* Registration Form (Left Column) */}
          <motion.div
            className="space-y-3 md:space-y-4"
            variants={formVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <motion.div variants={inputVariants}>
              <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="nama">
                Nama
              </label>
              <motion.input
                className="w-full px-3 md:px-4 py-2.5 text-xs rounded-full border border-slate-200 bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red shadow-sm transition-all min-h-[44px]"
                id="nama"
                placeholder="Masukkan nama lengkap"
                type="text"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="usia">
                Usia
              </label>
              <motion.input
                className="w-full px-3 md:px-4 py-2.5 text-xs rounded-full border border-slate-200 bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red shadow-sm transition-all min-h-[44px]"
                id="usia"
                placeholder="Usia (tahun)"
                type="text"
                value={formData.usia}
                onChange={(e) => setFormData({ ...formData, usia: e.target.value })}
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="program">
                Program yang diminati
              </label>
              <div className="relative">
                <motion.select
                  className="w-full px-3 md:px-4 py-2.5 text-xs rounded-full border border-slate-200 bg-white text-slate-700 appearance-none focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red shadow-sm cursor-pointer transition-all min-h-[44px]"
                  id="program"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  whileFocus={{ scale: 1.01 }}
                >
                  <option value="Pelatihan Bahasa Jepang">Pelatihan Bahasa Jepang</option>
                  <option value="Program Pemagangan (Kenshusei)">Program Pemagangan (Kenshusei)</option>
                  <option value="Pembinaan Mental & Budaya Kerja">Pembinaan Mental & Budaya Kerja</option>
                </motion.select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 md:px-4 text-slate-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div className="pt-1 md:pt-2" variants={inputVariants}>
              <motion.button
                className="w-full bg-brand-red hover:bg-brand-redHover text-white text-xs md:text-sm font-semibold px-4 md:px-6 py-2.5 md:py-3 rounded-full transition shadow-sm cursor-pointer min-h-[44px]"
                type="button"
                onClick={handleSubmit}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(197,22,45,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Chat admin (kirim pesan)
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact & Social Details (Right Column) */}
          <motion.div
            className="space-y-4"
            variants={infoVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <motion.div
              className="bg-white rounded-lg md:rounded-2xl p-4 md:p-6 border border-slate-100 shadow-sm space-y-4"
              whileHover={{ boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
            >
              <h3 className="text-xs md:text-sm font-bold text-brand-heading">Informasi Kontak</h3>
              <div className="space-y-1 text-xs text-slate-600">
                <p>
                  WhatsApp utama: <span className="font-medium text-slate-800">+62 896-7202-2977</span>
                </p>
                <p>
                  Kontak pendaftaran alternatif: <span className="font-medium text-slate-800">0882003132501</span>
                </p>
              </div>
              <div className="pt-1">
                <motion.div
                  className="inline-block bg-brand-red hover:bg-brand-redHover text-white text-xs font-semibold px-3 md:px-5 py-2 md:py-2.5 rounded-full transition shadow-sm cursor-pointer min-h-[44px] flex items-center"
                  whileHover={{ scale: 1.05, boxShadow: '0 6px 12px rgba(197,22,45,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://wa.me/6289672022977"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Chat WhatsApp
                  </a>
                </motion.div>
              </div>
              <div className="pt-2 md:pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold text-brand-heading mb-2">Akun Media Sosial</h4>
                <div className="flex items-center gap-3 md:gap-4 text-xs font-medium text-slate-700">
                  <motion.a
                    className="hover:text-brand-red transition cursor-pointer"
                    href="#"
                    whileHover={{ scale: 1.1, color: '#C5162D' }}
                  >
                    Instagram
                  </motion.a>
                  <motion.a
                    className="hover:text-brand-red transition cursor-pointer"
                    href="#"
                    whileHover={{ scale: 1.1, color: '#C5162D' }}
                  >
                    TikTok
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
