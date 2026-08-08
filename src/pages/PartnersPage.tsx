import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Handshake, X, ArrowUpLeft } from 'lucide-react';

interface PageProps {
  lang: 'ar' | 'en';
}

export const PartnersPage: React.FC<PageProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selected, setSelected] = useState<number | null>(null);

  const partners = [
    { id: 1, nameAr: 'باور كلان', nameEn: 'POWR Clan', tagAr: 'الألعاب الإلكترونية', tagEn: 'E-Sports', descAr: 'شراكة استراتيجية بدأت في مارس 2023 لتعزيز الحضور في مجال الألعاب الإلكترونية والوصول لشريحة الشباب.', descEn: 'Strategic partnership since March 2023 enhancing e-sports presence and youth engagement.', color: 'from-purple-500 to-pink-500', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80' },
    { id: 2, nameAr: 'جمعية إنسان', nameEn: 'Ensan Charity', tagAr: 'المسؤولية الاجتماعية', tagEn: 'Social Responsibility', descAr: 'شراكة إنسانية منذ 2018 لدعم ورعاية الأيتام، أثمرت عن كفالة أكثر من 28,000 يتيم.', descEn: 'Humanitarian partnership since 2018 sponsoring 28,000+ orphans.', color: 'from-emerald-500 to-teal-500', img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80' },
    { id: 3, nameAr: 'نادي الشباب', nameEn: 'Al Shabab FC', tagAr: 'القطاع الرياضي', tagEn: 'Sports', descAr: 'شراكة رياضية ممتدة لثلاثة مواسم لتعزيز التفاعل مع الجمهور الرياضي.', descEn: 'Sports partnership across three seasons enhancing sports fan engagement.', color: 'from-orange-500 to-red-500', img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=800&q=80' },
    { id: 4, nameAr: 'جمعية السرطان السعودية', nameEn: 'Saudi Cancer Foundation', tagAr: 'التوعية الصحية', tagEn: 'Health Awareness', descAr: 'تعاون لدعم المبادرات المجتمعية والتوعية بالفحص المبكر عن سرطان الثدي.', descEn: 'Collaboration supporting community health and early breast cancer detection awareness.', color: 'from-pink-500 to-rose-500', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center space-y-4 mb-16">
        <span className="text-[#0D9488] font-bold text-sm uppercase tracking-[0.2em] bg-[#0D9488]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
          <Handshake className="w-4 h-4" />
          {isAr ? 'شركاؤنا' : 'Our Partners'}
        </span>
        <h1 className="text-4xl md:text-7xl font-black text-[#2A1E17]">{isAr ? 'شركاء النجاح' : 'Success Partners'}</h1>
        <p className="text-[#2A1E17]/60 max-w-2xl mx-auto text-lg font-medium">{isAr ? 'نبني شراكات استراتيجية تصنع أثراً إيجابياً ومستداماً في المجتمع' : 'Building strategic partnerships creating positive sustainable social impact'}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {partners.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -8 }} onClick={() => setSelected(p.id)} className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-stone-100 group cursor-pointer">
            <div className="relative h-56 overflow-hidden">
              <img src={p.img} alt={p.nameEn} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className={`absolute inset-0 bg-gradient-to-t ${p.color} opacity-30 group-hover:opacity-40 transition-opacity`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A110D]/80 to-transparent" />
              <span className="absolute top-4 right-4 glass-dark text-white text-xs font-bold px-3 py-1.5 rounded-full">{isAr ? p.tagAr : p.tagEn}</span>
              <h3 className="absolute bottom-4 right-6 text-3xl font-black text-white drop-shadow-lg">{isAr ? p.nameAr : p.nameEn}</h3>
            </div>
            <div className="p-6 flex items-center justify-between">
              <p className="text-[#2A1E17]/60 text-sm leading-relaxed line-clamp-2">{isAr ? p.descAr : p.descEn}</p>
              <ArrowUpLeft className="w-5 h-5 text-[#0D9488] shrink-0 group-hover:-translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} className="fixed inset-0 bg-[#1A110D]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-white rounded-[40px] p-8 md:p-10 max-w-lg w-full shadow-2xl relative">
              <button onClick={() => setSelected(null)} className="absolute top-4 left-4 bg-stone-100 hover:bg-stone-200 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <X className="w-5 h-5" />
              </button>
              <div className="space-y-4">
                <span className={`inline-block bg-gradient-to-r ${partners.find(p => p.id === selected)?.color} text-white text-xs font-bold px-4 py-1.5 rounded-full`}>{isAr ? partners.find(p => p.id === selected)?.tagAr : partners.find(p => p.id === selected)?.tagEn}</span>
                <h3 className="text-3xl font-black text-[#2A1E17]">{isAr ? partners.find(p => p.id === selected)?.nameAr : partners.find(p => p.id === selected)?.nameEn}</h3>
                <div className="w-16 h-1.5 bg-[#0D9488] rounded-full" />
                <p className="text-[#2A1E17]/70 text-lg leading-relaxed">{isAr ? partners.find(p => p.id === selected)?.descAr : partners.find(p => p.id === selected)?.descEn}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
