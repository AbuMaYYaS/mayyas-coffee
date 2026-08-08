import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  lang: 'ar' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <footer className="relative bg-[#1A110D] text-[#E8DCD4] pt-24 pb-12 overflow-hidden rounded-t-[60px]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0D9488]/50 to-transparent" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#0D9488]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#C49A6C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="bg-[#0D9488] text-white font-extrabold text-2xl w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-[#0D9488]/20"
              >
                <Coffee className="w-7 h-7" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-extrabold text-3xl leading-none text-white">مياس كوفي</span>
                <span className="text-xs tracking-[0.2em] text-[#0D9488] font-bold uppercase mt-1">MAYYAS COFFEE</span>
              </div>
            </Link>
            <p className="text-[#E8DCD4]/70 text-base leading-relaxed max-w-md">
              {isAr
                ? 'مياس كوفي هي علامة تجارية سعودية رائدة في صناعة القهوة المختصة. نمزج الأصالة بالحداثة لنقدم تجربة استثنائية تتجاوز مجرد مشروب، لتصبح أسلوب حياة.'
                : 'Mayyas Coffee is a leading Saudi specialty coffee brand. We blend authenticity with modernity to deliver an exceptional experience that transcends a mere beverage, becoming a lifestyle.'}
            </p>
            <div className="flex gap-3 pt-2">
              {['Twitter', 'Instagram', 'TikTok'].map((social, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0D9488] text-white flex items-center justify-center transition-colors border border-white/10">
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7 space-y-5">
            <h4 className="text-white font-bold text-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
              {isAr ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-3 text-[15px] font-medium">
              {[
                { path: '/', label: isAr ? 'الرئيسية' : 'Home' },
                { path: '/about-us', label: isAr ? 'قصتنا' : 'Our Story' },
                { path: '/branches', label: isAr ? 'الفروع' : 'Branches' },
                { path: '/careers', label: isAr ? 'الوظائف' : 'Careers' },
                { path: '/news', label: isAr ? 'الأخبار' : 'News' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="hover:text-[#0D9488] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49A6C] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-white font-bold text-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
              {isAr ? 'تواصل معنا' : 'Contact Us'}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-[#0D9488]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[#C49A6C]" />
                </div>
                <span className="leading-relaxed pt-1">P.O. Box 0077 Riyadh - AL Aqiq 11411 Saudi Arabia</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-[#0D9488]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#C49A6C]" />
                </div>
                <span dir="ltr" className="font-bold text-lg tracking-wide pt-1">+966 9200 16232</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-[#0D9488]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#C49A6C]" />
                </div>
                <span className="pt-1">customercare@mayyascoffee.sa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#E8DCD4]/50 font-medium">
          <p>© 2026 {isAr ? 'شركة مياس كوفي. جميع الحقوق محفوظة.' : 'MAYYAS COFFEE Company. All rights reserved.'}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}</a>
            <a href="#" className="hover:text-white transition-colors">{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
