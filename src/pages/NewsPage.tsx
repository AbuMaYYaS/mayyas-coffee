import React from 'react';
import { Calendar, Tag } from 'lucide-react';

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
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/news/e26014fe-5b96-4783-84c5-3ed4f3d3b619-passionfruit_under_10mb.jpg',
    },
    {
      titleAr: 'ماتشا فراولة الصيفية',
      titleEn: 'Summer Strawberry Matcha',
      categoryAr: 'إطلاق منتجات',
      categoryEn: 'Product Launch',
      date: 'May 4, 2026',
      summaryAr: 'مزيج الماتشا الفاخرة مع صوص الفراولة الطازجة متوفر الآن في كافة فروع مياس كوفي.',
      summaryEn: 'Premium Japanese matcha paired with real fresh strawberry reduction across all stores.',
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/news/9a7722ad-12bb-4880-989d-321bc70536e3-Dine-in%20%281%29.png',
    },
    {
      titleAr: 'آيسكريم الورد الطايفي المستوحى من التراث',
      titleEn: 'Heritage Inspired Taif Rose Ice Cream',
      categoryAr: 'إطلاق منتجات',
      categoryEn: 'Product Launch',
      date: 'April 11, 2026',
      summaryAr: 'تجربة آيسكريم مبتكرة بنكهة الورد الطايفي الأصيل تجمع بين الأصالة والنكهة الساحرة.',
      summaryEn: 'Innovative authentic Taif rose ice cream combining rich local roots and exquisite creaminess.',
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/news/ff41dca9-2165-493e-9fd0-df4a482604f7-IMG_0515.JPEG',
    },
    {
      titleAr: 'إطلاق الهوية السمعية الرسمية لمياس كوفي',
      titleEn: 'Mayyas Coffee Official Sonic Branding Launch',
      categoryAr: 'إعلانات',
      categoryEn: 'Announcements',
      date: 'September 25, 2025',
      summaryAr: 'تدشين الهوية السمعية التي تعبر عن قيم الأصالة، الابتكار والدفء الإنساني لمياس كوفي.',
      summaryEn: 'Unveiling the official sonic identity encapsulating Mayyas Coffee values and warmth.',
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/pages/news-main.webp',
    },
  ];

  return (
    <div className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <span className="text-[#0D9488] font-bold text-sm uppercase tracking-wider bg-[#0D9488]/10 px-4 py-1.5 rounded-full inline-block">
          {isAr ? 'مركز الأخبار' : 'News Center'}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900">
          {isAr ? 'أخبار وإعلانات مياس كوفي' : 'Mayyas Coffee News'}
        </h1>
        <p className="text-stone-600 max-w-xl mx-auto text-base md:text-lg font-medium">
          {isAr ? 'تابع أحدث الإطلاقات والابتكارات والأخبار الخاصة بنا' : 'Stay updated with our latest product drops & official news'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsList.map((item, index) => (
          <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <img src={item.img} alt={item.titleAr} className="w-full h-64 object-cover" />
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-stone-500">
                  <span className="flex items-center gap-1 text-[#0D9488] bg-[#0D9488]/10 px-3 py-1 rounded-full">
                    <Tag className="w-3.5 h-3.5" />
                    {isAr ? item.categoryAr : item.categoryEn}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 leading-tight">
                  {isAr ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {isAr ? item.summaryAr : item.summaryEn}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
