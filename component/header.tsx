'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Program', href: '#program' },
    { label: 'Alur', href: '#alur' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <motion.header
      className="w-full border-b border-slate-100 bg-white sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        boxShadow: isScrolled ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.a
            className="flex items-center gap-2.5 cursor-pointer"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.svg
              className="w-6 h-6 text-brand-red flex-shrink-0 fill-current"
              viewBox="0 0 24 24"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5v1.2a7.002 7.002 0 0 1 4.3 2.484l.85-.85a1.5 1.5 0 0 1 2.12 2.122l-.848.848A7.002 7.002 0 0 1 22.4 13.5h-1.2a1.5 1.5 0 0 1 0-3h1.2a7.002 7.002 0 0 1-2.478 4.3l.848.848a1.5 1.5 0 0 1-2.12 2.122l-.85-.85A7.002 7.002 0 0 1 13.5 19.3v1.2a1.5 1.5 0 0 1-3 0v-1.2a7.002 7.002 0 0 1-4.3-2.48l-.85.85a1.5 1.5 0 0 1-2.12-2.122l.848-.848A7.002 7.002 0 0 1 1.6 10.5h1.2a1.5 1.5 0 0 1 0 3H1.6a7.002 7.002 0 0 1 2.478-4.3l-.848-.848a1.5 1.5 0 0 1 2.12-2.122l.85.85A7.002 7.002 0 0 1 10.5 4.7V3.5A1.5 1.5 0 0 1 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
            </motion.svg>
            <span className="font-bold text-brand-heading text-lg tracking-tight">
              LPK Hikari Indonesia
            </span>
          </motion.a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-sm font-medium text-slate-700 hover:text-brand-red transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded px-2 py-1"
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <motion.a
            className="hidden md:inline-block bg-brand-red hover:bg-brand-redHover text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm cursor-pointer min-h-[44px] flex items-center"
            href="#daftar"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#daftar');
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(197,22,45,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Daftar (Chat WhatsApp)
          </motion.a>

          {/* Hamburger Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-20 right-0 bottom-0 w-64 bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <nav className="flex flex-col p-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-base font-medium text-slate-700 hover:text-brand-red transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-3 py-2 min-h-[44px] flex items-center"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#daftar"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#daftar');
                  }}
                  className="bg-brand-red hover:bg-brand-redHover text-white text-sm font-semibold px-5 py-3 rounded-full transition shadow-sm cursor-pointer min-h-[44px] flex items-center justify-center mt-4"
                >
                  Daftar (Chat WhatsApp)
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
