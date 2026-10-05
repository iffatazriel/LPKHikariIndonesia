'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
    <motion.footer
      className="w-full bg-slate-50 border-t border-slate-200 mt-auto py-4 md:py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3 text-[10px] md:text-[11px] text-slate-500">
        {/* Left Copyright & Address */}
        <motion.p
          className="text-center md:text-left leading-relaxed"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          © LPK Hikari Indonesia Cilacap — Alamat: Kedungsari, Bumireja, Kec. Kedungreja, Kabupaten Cilacap, Jawa Tengah
          53263
        </motion.p>

        {/* Right Contact & Timings */}
        <motion.p
          className="text-center md:text-right"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Kontak: +62 896-7202-2977 · Senin-Sabtu 08.00-16.00 WIB
        </motion.p>
      </div>
    </motion.footer>
  );
}




