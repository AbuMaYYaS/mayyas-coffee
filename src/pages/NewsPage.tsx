import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, Sparkles } from 'lucide-react';

interface PageProps {
  lang: 'ar' | 'en';
}

export const NewsPage: React.FC<PageProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeTag, setActiveTag] = useState('all');

  const newsList = [
    { titleAr: 'آيسد تي باشن فروت', titleEn: 'Passion Fruit Iced Tea', categoryAr: 'إطلاق منتجات', categoryEn: 'Product Launch', tag: 'product', date: 'June 16, 2026', summaryAr: 'مشروب الآيسد تي الجديد بنكهة الباشن فروت — خيار الصيف المنعش.', summaryEn: 'New iced tea with passion fruit — the refreshing summer choice.', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80' },
    { titleAr: 'ماتشا فراولة', titleEn: 'Strawberry Matcha', categoryAr: 'إطلاق منتجات', categoryEn: 'Product Launch', tag: 'product', date: 'May 4, 2026', summaryAr: 'مزيج الماتشا الفاخرة مع صوص الفراولة الطازجة.', summaryEn: 'Premium matcha with fresh strawberry sauce.', img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80' },
    { titleAr: 'آيسكريم الورد الطايفي', titleEn: 'Taif Rose Ice Cream', categoryAr: 'إطلاق منتجات', categoryEn: 'Product Launch', tag: 'product', date: 'April 11, 2026', summaryAr: 'تجربة آيسكريم مبتكرة بنكهة الورد الطايفي الأصيل.', summaryEn: 'Innovative ice cream with authentic Taif rose.', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80' },
    { titleAr: 'الهوية السمعية', titleEn: 'Sonic Branding', categoryAr: 'إعلانات', categoryEn: 'Announcements', tag: 'news', date: 'September 25, 2025', summaryAr: 'تدشين الهوية السمعية الرسمية لمياس كوفي.', summaryEn: 'Unveiling the official Mayyas Coffee sonic identity.', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80' },
  ];

  const tags = [
    { id: 'all', labelAr: 'الكل', labelEn: 'All' },
    { id: 'product', labelAr: 'إطلاق منتجات', labelEn: 'Products' },
    { id: 'news', labelAr: 'إعلانات', labelEn: 'News' },
  ];

  const filtered = activeTag === 'all' ? newsList : newsList.filter((n) => n.tag === activeTag);

  return (
    <div className="pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center space-y-4 mb-16">
        <span className="text-[#0D9488] font-bold text-sm uppercase tracking-[0.2em] bg-[#0D9488]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          {isAr ? 'مركز الأخبار' : 'News Center'}
        </span>
        <h1 className="text-4xl md:text-7xl font-black text-[#2A1E17]">{isAr ? 'آخر أخبارنا' : 'Latest News'}</h1>
        <p className="text-[#2A1E17]/60 max-w-xl mx-auto text-lg font-medium">{isAr ? 'تابع أحدث إطلاقاتنا ومنتجاتنا وأخبارنا' : 'Stay updated with our latest products and news'}</p>
      </motion.div>

      <div className="flex justify-center gap-3 mb-12">
        {tags.map((t) => (
          <button key={t.id} onClick={() => setActiveTag(t.id)} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTag === t.id ? 'bg-[#0D9488] text-white shadow-lg shadow-[#0D9488]/20' : 'bg-white text-[#2A1E17]/70 hover:bg-stone-100 border border-stone-100'}`}>
            {isAr ? t.labelAr : t.labelEn}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -10 }} className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-stone-100 group flex flex-col">
            <div className="relative h-60 overflow-hidden">
              <img src={item.img} alt={item.titleEn} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute top-4 right-4 bg-[#0D9488] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                <Tag className="w-3 h-3" />
                {isAr ? item.categoryAr : item.categoryEn}
              </span>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2A1E17]/50">
                <Calendar className="w-3.5 h-3.5 text-[#0D9488]" />
                {item.date}
              </div>
              <h3 className="text-xl font-black text-[#2A1E17] group-hover:text-[#0D9488] transition-colors leading-tight">{isAr ? item.titleAr : item.titleEn}</h3>
              <p className="text-[#2A1E17]/60 text-sm leading-relaxed flex-1">{isAr ? item.summaryAr : item.summaryEn}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
