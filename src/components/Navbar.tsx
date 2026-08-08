import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { path: '/', labelAr: 'الرئيسية', labelEn: 'Home' },
    { path: '/about-us', labelAr: 'من نحن', labelEn: 'About Us' },
    { path: '/partners', labelAr: 'الأعمال', labelEn: 'Partners' },
    { path: '/branches', labelAr: 'الفروع', labelEn: 'Branches' },
    { path: '/careers', labelAr: 'الوظائف', labelEn: 'Careers' },
    { path: '/news', labelAr: 'الأخبار', labelEn: 'News' },
    { path: '/contact-us', labelAr: 'اتصل بنا', labelEn: 'Contact Us' },
  ];

  return (
    <header className={`py-5 px-4 md:px-10 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHome ? 'bg-black/30 backdrop-blur-md text-white' : 'bg-[#FBF9F5]/90 backdrop-blur-md border-b border-stone-200 text-stone-900'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-[#0D9488] text-white font-extrabold text-xl px-3.5 py-1.5 rounded-2xl tracking-tighter shadow-md group-hover:scale-105 transition-transform">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl md:text-2xl leading-none tracking-tight">
              مياس كوفي
            </span>
            <span className="text-[10px] tracking-widest uppercase opacity-80 font-bold">
              MAYYAS COFFEE
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-base font-semibold">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 transition-colors hover:text-[#0D9488] ${isActive ? 'text-[#0D9488] font-bold' : isHome ? 'text-white/90' : 'text-stone-700'}`}
              >
                {lang === 'ar' ? link.labelAr : link.labelEn}
                {isActive && (
                  <span className="absolute bottom-0 right-0 left-0 h-[3px] bg-[#0D9488] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-stone-500/20 backdrop-blur-sm p-1 rounded-full text-sm font-bold">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full transition-all ${lang === 'en' ? 'bg-[#0D9488] text-white shadow' : isHome ? 'text-white/80' : 'text-stone-700'}`}
            >
              En
            </button>
            <button
              onClick={() => setLang('ar')}
              className={`px-2.5 py-1 rounded-full transition-all ${lang === 'ar' ? 'bg-[#0D9488] text-white shadow' : isHome ? 'text-white/80' : 'text-stone-700'}`}
            >
              ع
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-stone-500/20 hover:bg-stone-500/30 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-[#FBF9F5] z-40 p-6 flex flex-col justify-between border-t border-stone-200 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl font-bold p-3 rounded-xl transition-colors ${location.pathname === link.path ? 'bg-[#0D9488]/10 text-[#0D9488]' : 'text-stone-800 hover:bg-stone-100'}`}
              >
                {lang === 'ar' ? link.labelAr : link.labelEn}
              </Link>
            ))}
          </nav>
          
          <div className="pt-6 border-t border-stone-200 flex flex-col gap-3 text-stone-600 text-sm">
            <p className="font-semibold">مياس كوفي - MAYYAS COFFEE</p>
            <p>customercare@mayyascoffee.sa</p>
            <p>+966 9200 16232</p>
          </div>
        </div>
      )}
    </header>
  );
};
