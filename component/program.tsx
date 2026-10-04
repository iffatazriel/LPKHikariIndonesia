'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

interface ProgramDetail {
  id: string;
  title: string;
  subtitle: string;
  icon: JSX.Element;
  points: string[];
  forWhom: string;
  whatToLearn: string;
  expectedResult: string;
  toAsk: string[];
}

export default function Program() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedProgram, setSelectedProgram] = useState<ProgramDetail | null>(null);

  useEffect(() => {
    if (selectedProgram) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedProgram(null);
      };
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = '';
      };
    }
  }, [selectedProgram]);

  const programs: ProgramDetail[] = [
    {
      id: 'bahasa',
      title: 'Pelatihan Bahasa Jepang',
      subtitle: 'Mulai dari nol, sampai siap bicara.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>
      ),
      points: [
        'Belajar dari tingkat dasar',
        'Fokus percakapan kerja dan harian',
        'Persiapan ujian dasar',
      ],
      forWhom: 'Calon peserta program pemagangan yang belum pernah belajar bahasa Jepang atau ingin meningkatkan kemampuan bahasa untuk keperluan kerja.',
      whatToLearn: 'Peserta akan belajar huruf dasar (hiragana, katakana), tata bahasa dasar, percakapan sehari-hari dan di tempat kerja, serta kosakata yang sering digunakan dalam industri.',
      expectedResult: 'Peserta mampu berkomunikasi dasar dalam bahasa Jepang, memahami instruksi kerja sederhana, dan siap menghadapi ujian bahasa tingkat dasar.',
      toAsk: ['Durasi program [ISI DATA ASLI]', 'Biaya program [ISI DATA ASLI]', 'Jadwal kelas [ISI DATA ASLI]', 'Syarat peserta [ISI DATA ASLI]'],
    },
    {
      id: 'pemagangan',
      title: 'Program Pemagangan (Kenshusei)',
      subtitle: 'Berangkat lewat jalur resmi.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
          <rect height="14" rx="2" ry="2" width="20" x="2" y="7" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      points: [
        'Penyaluran ke beberapa sektor industri di Jepang',
        'Melalui kemitraan resmi',
        'Pendampingan administrasi',
      ],
      forWhom: 'Calon pekerja yang ingin bekerja di Jepang melalui program magang resmi (Technical Intern Training Program) dengan jaminan legalitas dan pendampingan penuh.',
      whatToLearn: 'Peserta mendapatkan pelatihan bahasa, budaya kerja, pemahaman sistem magang Jepang, dan persiapan dokumen keberangkatan lengkap.',
      expectedResult: 'Peserta berangkat ke Jepang dengan visa magang resmi, ditempatkan di perusahaan mitra, dan mendapatkan pendampingan selama masa kerja.',
      toAsk: ['Sektor industri yang tersedia [ISI DATA ASLI]', 'Durasi magang [ISI DATA ASLI]', 'Biaya program [ISI DATA ASLI]', 'Persyaratan lengkap [ISI DATA ASLI]'],
    },
    {
      id: 'pembinaan',
      title: 'Pembinaan Mental & Budaya Kerja',
      subtitle: 'Siap secara mental dan budaya.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      points: [
        'Pembinaan mental dan fisik',
        'Pembiasaan disiplin',
        'Pengenalan budaya kerja Jepang agar tidak kaget budaya',
      ],
      forWhom: 'Peserta program pemagangan yang akan berangkat ke Jepang dan membutuhkan persiapan mental, fisik, serta pemahaman budaya kerja Jepang.',
      whatToLearn: 'Peserta mendapatkan pembinaan disiplin, etika kerja Jepang, latihan fisik ringan, simulasi lingkungan kerja, dan pengenalan adat istiadat serta aturan sosial di Jepang.',
      expectedResult: 'Peserta siap secara mental dan fisik, memahami budaya kerja Jepang, mampu beradaptasi dengan lingkungan baru, dan menghindari culture shock saat tiba di Jepang.',
      toAsk: ['Durasi pembinaan [ISI DATA ASLI]', 'Biaya program [ISI DATA ASLI]', 'Materi pembinaan [ISI DATA ASLI]', 'Jadwal kegiatan [ISI DATA ASLI]'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -10,
      boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
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

  return (
    <>
      <section ref={ref} id="program" className="w-full py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div className="mb-7" initial="hidden" animate={isVisible ? 'visible' : 'hidden'} variants={containerVariants}>
            <motion.h2 variants={titleVariants} className="text-xl font-bold text-brand-heading">
              Program Kami
            </motion.h2>
            <motion.p variants={titleVariants} className="text-xs text-slate-500 mt-1">
              Tiga program inti yang disusun agar peserta siap bahasa, mental, dan jalur resmi ke Jepang.
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5" variants={containerVariants} initial="hidden" animate={isVisible ? 'visible' : 'hidden'}>
            {programs.map((program) => (
              <motion.div
                key={program.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-xl p-6 border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mb-4">
                  {program.icon}
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-bold text-base text-brand-heading mb-1">{program.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{program.subtitle}</p>

                {/* Points */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {program.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <svg className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <motion.button
                  onClick={() => setSelectedProgram(program)}
                  className="w-full bg-slate-100 hover:bg-brand-red hover:text-white text-slate-700 text-sm font-semibold py-3 rounded-full transition min-h-[44px] focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Lihat detail
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                    {selectedProgram.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-heading">{selectedProgram.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{selectedProgram.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="p-2 hover:bg-slate-100 rounded-full transition min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-red"
                  aria-label="Tutup"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-base text-brand-heading mb-2">Untuk siapa?</h4>
                  <p className="text-[15px] leading-relaxed text-slate-600">{selectedProgram.forWhom}</p>
                </div>

                <div>
                  <h4 className="font-bold text-base text-brand-heading mb-2">Apa yang dipelajari?</h4>
                  <p className="text-[15px] leading-relaxed text-slate-600">{selectedProgram.whatToLearn}</p>
                </div>

                <div>
                  <h4 className="font-bold text-base text-brand-heading mb-2">Hasil akhir</h4>
                  <p className="text-[15px] leading-relaxed text-slate-600">{selectedProgram.expectedResult}</p>
                </div>

                <div>
                  <h4 className="font-bold text-base text-brand-heading mb-3">Informasi yang perlu ditanyakan</h4>
                  <ul className="space-y-2">
                    {selectedProgram.toAsk.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[15px] text-slate-600">
                        <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <motion.a
                  href={`https://wa.me/6289672022977?text=Halo,%20saya%20ingin%20bertanya%20tentang%20program%20${encodeURIComponent(selectedProgram.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-red hover:bg-brand-redHover text-white text-base font-semibold py-3 rounded-full transition flex items-center justify-center gap-2 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Tanya program ini via WhatsApp
                </motion.a>
              </div>

              <p className="text-xs text-slate-500 text-center mt-4">Hubungi admin untuk informasi lengkap dan terbaru.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
