import React from 'react';
import { Calendar, Tag, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageProps {
  lang: 'ar' | 'en';
}

export const NewsPage: React.FC<PageProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const newsList = [
    {
      titleAr: 'آيسد تي باشن فروت المنعش',
      titleEn: 'Refreshing Passion Fruit Iced Tea',
      categoryAr: 'إطلاق منتجات',
      categoryEn: 'Product Launch',
      date: 'June 16, 2026',
      summaryAr: 'أطلقت مياس كوفي مشروب الآيسد تي الجديد بنكهة الباشن فروت ليكون الخيار الأمثل للانتعاش في أجواء الصيف.',
      summaryEn: 'Mayyas Coffee introduced its latest Passion Fruit Iced Tea for a vibrant summer refresher.',
      img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    },
    {
      titleAr: 'ماتشا فراولة الصيفية',
      titleEn: 'Summer Strawberry Matcha',
      categoryAr: 'إطلاق منتجات',
      categoryEn: 'Product Launch',
      date: 'May 4, 2026',
      summaryAr: 'مزيج الماتشا الفاخرة مع صوص الفراولة الطازجة متوفر الآن في كافة فروع مياس كوفي.',
      summaryEn: 'Premium Japanese matcha paired with real fresh strawberry reduction across all stores.',
      img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    },
    {
      titleAr: 'آيسكريم الورد الطايفي المستوحى من التراث',
      titleEn: 'Heritage Inspired Taif Rose Ice Cream',
      categoryAr: 'إطلاق منتجات',
      categoryEn: 'Product Launch',
      date: 'April 11, 2026',
      summaryAr: 'تجربة آيسكريم مبتكرة بنكهة الورد الطايفي الأصيل تجمع بين الأصالة والنكهة الساحرة.',
      summaryEn: 'Innovative authentic Taif rose ice cream combining rich local roots and exquisite creaminess.',
      img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    },
    {
      titleAr: 'إطلاق الهوية السمعية الرسمية لمياس كوفي',
      titleEn: 'Mayyas Coffee Official Sonic Branding Launch',
      categoryAr: 'إعلانات',
      categoryEn: 'Announcements',
      date: 'September 25, 2025',
      summaryAr: 'تدشين الهوية السمعية التي تعبر عن قيم الأصالة، الابتكار والدفء الإنساني لمياس كوفي.',
      summaryEn: 'Unveiling the official sonic identity encapsulating Mayyas Coffee values and warmth.',
      img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4"
      >
        <span className="text-[#0D9488] font-bold text-sm uppercase tracking-wider bg-[#0D9488]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#0D9488]" />
          {isAr ? 'مركز الأخبار' : 'News Center'}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900">
          {isAr ? 'أخبار وإعلانات مياس كوفي' : 'Mayyas Coffee News'}
        </h1>
        <p className="text-stone-600 max-w-xl mx-auto text-base md:text-lg font-medium">
          {isAr ? 'تابع أحدث الإطلاقات والابتكارات والأخبار الخاصة بنا' : 'Stay updated with our latest product drops & official news'}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsList.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-2xl transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="h-64 overflow-hidden relative">
                <img src={item.img} alt={item.titleAr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 bg-[#0D9488] text-white text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  {isAr ? item.categoryAr : item.categoryEn}
                </span>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-500">
                  <Calendar className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 leading-tight group-hover:text-[#0D9488] transition-colors">
                  {isAr ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {isAr ? item.summaryAr : item.summaryEn}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
