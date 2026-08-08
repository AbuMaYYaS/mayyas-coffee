import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Share2 } from 'lucide-react';

interface FooterProps {
  lang: 'ar' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <footer className="bg-[#111111] text-stone-300 pt-16 pb-12 rounded-t-[50px] mt-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#0D9488] text-white font-extrabold text-2xl px-4 py-2 rounded-2xl">
              M
            </div>
            <div className="flex flex-col text-white">
              <span className="font-extrabold text-2xl leading-none">مياس كوفي</span>
              <span className="text-xs tracking-widest text-stone-400 font-bold uppercase">MAYYAS COFFEE</span>
            </div>
          </div>
          <p className="text-stone-400 text-sm leading-relaxed">
            {isAr
              ? 'مياس كوفي هي علامة تجارية سعودية رائدة في صناعة المواد الغذائية والمشروبات. تأسست في عام 2018 وأطلقت فرعها الأول في الرياض. تسعى إلى تقديم تجربة استثنائية لعملائها بأسعار معقولة.'
              : 'Mayyas Coffee is a leading Saudi brand in food and beverages founded in 2018. Delivering an extraordinary coffee experience at fair prices.'}
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-white font-bold text-lg mb-4 border-b border-[#0D9488]/40 pb-2 inline-block">
            {isAr ? 'روابط سريعة' : 'Quick Links'}
          </h4>
          <ul className="space-y-2.5 text-sm font-medium">
            <li><Link to="/" className="hover:text-[#0D9488] transition-colors">{isAr ? 'الرئيسية' : 'Home'}</Link></li>
            <li><Link to="/about-us" className="hover:text-[#0D9488] transition-colors">{isAr ? 'من نحن' : 'About Us'}</Link></li>
            <li><Link to="/partners" className="hover:text-[#0D9488] transition-colors">{isAr ? 'الأعمال والشركاء' : 'Partners'}</Link></li>
            <li><Link to="/branches" className="hover:text-[#0D9488] transition-colors">{isAr ? 'الفروع' : 'Branches'}</Link></li>
            <li><Link to="/careers" className="hover:text-[#0D9488] transition-colors">{isAr ? 'الوظائف' : 'Careers'}</Link></li>
            <li><Link to="/news" className="hover:text-[#0D9488] transition-colors">{isAr ? 'الأخبار' : 'News'}</Link></li>
            <li><Link to="/contact-us" className="hover:text-[#0D9488] transition-colors">{isAr ? 'اتصل بنا' : 'Contact Us'}</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-white font-bold text-lg mb-4 border-b border-[#0D9488]/40 pb-2 inline-block">
            {isAr ? 'معلومات الاتصال' : 'Contact Details'}
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#0D9488] shrink-0" />
              <span>P.O. Box 0077 Riyadh - AL Aqiq 11411 Saudi Arabia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#0D9488] shrink-0" />
              <span dir="ltr">+966 9200 16232</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#0D9488] shrink-0" />
              <span>customercare@mayyascoffee.sa</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-lg mb-4 border-b border-[#0D9488]/40 pb-2 inline-block">
            {isAr ? 'تابعنا وحمّل التطبيق' : 'Follow & App'}
          </h4>
          <p className="text-xs text-stone-400">
            {isAr ? 'حمل تطبيق مياس كوفي واستمتع بتجربة طلب وحصول على مكافآت الولاء' : 'Download Mayyas Coffee app for instant orders & rewards.'}
          </p>
          <div className="flex gap-3">
            <a href="#" className="p-2.5 rounded-full bg-stone-800 hover:bg-[#0D9488] text-white transition-colors" aria-label="Website">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-stone-800 hover:bg-[#0D9488] text-white transition-colors" aria-label="Social Share">
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-stone-800/80 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 gap-4">
        <p>© 2026 {isAr ? 'شركة مياس كوفي. جميع الحقوق محفوظة.' : 'MAYYAS COFFEE Company. All rights reserved.'}</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">{isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}</a>
          <a href="#" className="hover:underline">{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
        </div>
      </div>
    </footer>
  );
};
