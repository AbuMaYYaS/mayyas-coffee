import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpLeft, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', labelAr: 'الرئيسية', labelEn: 'Home' },
    { path: '/about-us', labelAr: 'قصتنا', labelEn: 'Our Story' },
    { path: '/partners', labelAr: 'الأعمال', labelEn: 'Partners' },
    { path: '/branches', labelAr: 'الفروع', labelEn: 'Branches' },
    { path: '/careers', labelAr: 'الوظائف', labelEn: 'Careers' },
    { path: '/news', labelAr: 'الأخبار', labelEn: 'News' },
    { path: '/contact-us', labelAr: 'تواصل معنا', labelEn: 'Contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex justify-between items-center rounded-full px-6 py-3 transition-all duration-500 ${scrolled || !isHome ? 'glass-card shadow-lg text-[#2A1E17]' : 'bg-black/20 backdrop-blur-md border border-white/10 text-white'}`}
          >
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-10">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="bg-[#0D9488] text-white font-extrabold text-xl px-3 py-2 rounded-2xl tracking-tighter shadow-md flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Coffee className="w-5 h-5 relative z-10" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl md:text-2xl leading-none tracking-tight">
                  مياس كوفي
                </span>
                <span className={`text-[9px] tracking-[0.2em] uppercase font-bold transition-colors ${scrolled || !isHome ? 'text-[#0D9488]' : 'text-white/80'}`}>
                  MAYYAS
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <nav className="hidden lg:flex items-center gap-6 text-[15px] font-bold">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative py-1.5 transition-colors hover:text-[#0D9488] ${isActive ? 'text-[#0D9488]' : scrolled || !isHome ? 'text-stone-700' : 'text-white/90'}`}
                  >
                    {lang === 'ar' ? link.labelAr : link.labelEn}
                    {isActive && (
                      <motion.span 
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 right-0 left-0 h-[3px] bg-[#0D9488] rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Language & Mobile Menu */}
            <div className="flex items-center gap-4 relative z-10">
              <div className={`flex items-center gap-1 p-1 rounded-full text-sm font-bold transition-colors ${scrolled || !isHome ? 'bg-stone-100' : 'bg-white/10 backdrop-blur-sm'}`}>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 rounded-full transition-all ${lang === 'en' ? 'bg-[#0D9488] text-white shadow-md' : scrolled || !isHome ? 'text-stone-700 hover:bg-stone-200' : 'text-white/80 hover:text-white'}`}
                >
                  En
                </button>
                <button
                  onClick={() => setLang('ar')}
                  className={`px-3 py-1.5 rounded-full transition-all ${lang === 'ar' ? 'bg-[#0D9488] text-white shadow-md' : scrolled || !isHome ? 'text-stone-700 hover:bg-stone-200' : 'text-white/80 hover:text-white'}`}
                >
                  ع
                </button>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2.5 rounded-full transition-colors ${scrolled || !isHome ? 'bg-stone-100 hover:bg-stone-200 text-stone-800' : 'bg-white/10 hover:bg-white/20 text-white'}`}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-[80px] bg-[#FAF8F5]/95 backdrop-blur-xl z-40 p-6 flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-extrabold p-4 rounded-2xl transition-all flex items-center justify-between ${location.pathname === link.path ? 'bg-[#0D9488] text-white shadow-lg' : 'text-stone-800 hover:bg-stone-100'}`}
                  >
                    {lang === 'ar' ? link.labelAr : link.labelEn}
                    <ArrowUpLeft className={`w-6 h-6 ${location.pathname === link.path ? 'text-white' : 'text-[#0D9488]'}`} />
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="pt-8 border-t border-stone-200 text-center space-y-2">
              <p className="font-extrabold text-stone-900 text-lg">مياس كوفي - MAYYAS COFFEE</p>
              <p className="text-[#0D9488] font-bold">customercare@mayyascoffee.sa</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
