import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpLeft, ArrowUpRight, Smartphone, ChevronDown } from 'lucide-react';

interface HomePageProps {
  lang: 'ar' | 'en';
}

export const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const regions = [
    {
      id: 'central',
      nameAr: 'المنطقة الوسطى',
      nameEn: 'Central Region',
      count: 53,
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/regions/central.webp',
    },
    {
      id: 'western',
      nameAr: 'المنطقة الغربية',
      nameEn: 'Western Region',
      count: 22,
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/regions/western.webp',
    },
    {
      id: 'southern',
      nameAr: 'المنطقة الجنوبية',
      nameEn: 'Southern Region',
      count: 9,
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/regions/southern.webp',
    },
    {
      id: 'eastern',
      nameAr: 'المنطقة الشرقية',
      nameEn: 'Eastern Region',
      count: 6,
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/regions/eastern.webp',
    },
    {
      id: 'northern',
      nameAr: 'المنطقة الشمالية',
      nameEn: 'Northern Region',
      count: 3,
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/regions/northern.webp',
    },
  ];

  const newsList = [
    {
      titleAr: 'آيسد تي باشن فروت',
      titleEn: 'Iced Tea Passion Fruit',
      tagAr: 'إطلاق منتجات',
      tagEn: 'Product Launch',
      date: 'June 16, 2026',
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/news/e26014fe-5b96-4783-84c5-3ed4f3d3b619-passionfruit_under_10mb.jpg',
    },
    {
      titleAr: 'ماتشا فراولة',
      titleEn: 'Strawberry Matcha',
      tagAr: 'إطلاق منتجات',
      tagEn: 'Product Launch',
      date: 'May 4, 2026',
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/news/9a7722ad-12bb-4880-989d-321bc70536e3-Dine-in%20%281%29.png',
    },
    {
      titleAr: 'آيسكريم الورد الطايفي',
      titleEn: 'Taif Rose Ice Cream',
      tagAr: 'إطلاق منتجات',
      tagEn: 'Product Launch',
      date: 'April 11, 2026',
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/news/ff41dca9-2165-493e-9fd0-df4a482604f7-IMG_0515.JPEG',
    },
  ];

  return (
    <div className="space-y-0">
      <section className="relative h-screen flex flex-col justify-between pb-12 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105"
          autoPlay
          loop
          muted
          playsInline
          src="https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/pages/hero-video.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white mt-16">
          <span className="inline-block bg-[#0D9488]/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase mb-4 animate-bounce">
            {isAr ? 'تجربة قهوة فاخرة بأسعار مناسبة' : 'Premium Coffee Experience'}
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4">
            {isAr ? 'مياس كوفي' : 'MAYYAS COFFEE'}
          </h1>
          <p className="max-w-2xl text-lg md:text-2xl text-stone-200 font-medium leading-relaxed">
            {isAr
              ? 'علامة تجارية سعودية تسعى لتقديم تجربة تعكس جودة القهوة والشغف الحقيقي'
              : 'A proud Saudi brand driven by passion and supreme coffee craftsmanship'}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/branches"
              className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-all flex items-center gap-2"
            >
              <span>{isAr ? 'استكشف فروعنا' : 'Explore Branches'}</span>
              {isAr ? <ArrowUpLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
            </Link>
            <Link
              to="/about-us"
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/40 font-bold px-8 py-3.5 rounded-full transition-all"
            >
              {isAr ? 'قصتنا' : 'Our Story'}
            </Link>
          </div>
        </div>
        <div className="relative z-10 flex justify-center pb-6 text-white/70">
          <ChevronDown className="w-8 h-8 animate-pulse" />
        </div>
      </section>

      <section className="bg-[#FBF9F5] py-20 px-6 md:px-16 -mt-12 rounded-t-[50px] relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="bg-[#0D9488] w-24 h-48 lg:w-40 lg:h-80 rounded-r-full shadow-xl" />
          </div>
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
              {isAr ? 'قصتنا' : 'Our Story'}
            </h2>
            <p className="text-base md:text-xl text-stone-700 leading-relaxed font-normal">
              <span className="font-bold text-[#0D9488]">{isAr ? 'مياس كوفي' : 'Mayyas Coffee'}</span>{' '}
              {isAr
                ? 'علامة تجارية سعودية رائدة تأسست عام 2018، تسعى إلى التوسع محليًا وإقليميًا، وترسيخ مكانتها كخيار مفضل لعشاق القهوة في المملكة وخارجها متخصصة في صناعة القهوة، وانطلقت برؤية تهدف إلى تقديم تجربة قهوة تعكس جودة المنتج والسعر المناسب.'
                : 'a leading Saudi brand founded in 2018, expanding locally & regionally to be the top choice for coffee lovers, launched with a vision to deliver exceptional quality at fair prices.'}
            </p>
            <div className="pt-4">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-3 border-2 border-stone-900 rounded-full px-6 py-3 font-bold text-stone-900 hover:bg-stone-900 hover:text-white transition-all group"
              >
                <span>{isAr ? 'اعرف المزيد' : 'Learn More'}</span>
                <span className="bg-[#0D9488] text-white p-2 rounded-full group-hover:scale-110 transition-transform">
                  {isAr ? <ArrowUpLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/60 space-y-3 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-stone-900">{isAr ? 'هدفنا' : 'Our Goal'}</h3>
            <div className="w-12 h-2 bg-[#D4B38B] rounded-full" />
            <p className="text-stone-600 font-medium">
              {isAr ? 'نسعى لتبسيط المفاهيم لنكون أقرب للناس' : 'Simplifying coffee concepts to be closer to everyone.'}
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/60 space-y-3 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-stone-900">{isAr ? 'رسالتنا' : 'Our Mission'}</h3>
            <div className="w-12 h-2 bg-[#D4B38B] rounded-full" />
            <p className="text-stone-600 font-medium">
              {isAr ? 'التركيز على التوسع مع الحفاظ على تمحورنا حول العميل، وضمان جودة عالية بأسعار مناسبة' : 'Expanding with customer-centric focus, ensuring high quality at accessible prices.'}
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/60 space-y-3 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-stone-900">{isAr ? 'رؤيتنا' : 'Our Vision'}</h3>
            <div className="w-12 h-2 bg-[#D4B38B] rounded-full" />
            <p className="text-stone-600 font-medium">
              {isAr ? 'أن يكون مياس كوفي رائدًا في مجال القهوة والمشروبات' : 'To position Mayyas Coffee as an industry leader in coffee & beverages.'}
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/60 space-y-3 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-stone-900">{isAr ? 'ركائزنا' : 'Our Pillars'}</h3>
            <div className="w-12 h-2 bg-[#D4B38B] rounded-full" />
            <p className="text-stone-600 font-medium">
              {isAr ? 'سعودي - إنساني - متمحور حول العميل - مرن - طموح' : 'Saudi - Human - Customer-Centric - Flexible - Ambitious'}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F5EFE6] py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <h3 className="text-3xl md:text-5xl font-extrabold text-stone-900 leading-tight">
              {isAr ? 'نطمح أن يكون مياس كوفي متواجد حيث يتواجد الناس' : 'We aim for Mayyas Coffee to be wherever people are'}
            </h3>
            <div className="w-20 h-2.5 bg-[#D4B38B] rounded-full" />
            <p className="text-lg text-stone-700 font-medium">
              {isAr ? 'ووصلنا اليوم إلى أكثر من' : 'Today we reached over'}
            </p>
            <div className="flex items-baseline gap-2 text-[#0D9488]">
              <span className="text-7xl lg:text-9xl font-black">90</span>
              <span className="text-5xl lg:text-7xl font-bold">+</span>
            </div>
            <p className="text-stone-800 font-bold text-xl">{isAr ? 'فرع نشط' : 'Active Branches'}</p>
            <Link
              to="/branches"
              className="inline-flex items-center gap-3 bg-[#0D9488] text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:bg-[#0D9488]/90 transition-colors"
            >
              <span>{isAr ? 'عرض جميع الفروع' : 'View All Branches'}</span>
              {isAr ? <ArrowUpLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
            </Link>
          </div>
          <div className="lg:col-span-7 space-y-5">
            {regions.map((reg) => (
              <div
                key={reg.id}
                className="bg-[#FBF9F5] p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center gap-6"
              >
                <img
                  src={reg.img}
                  alt={reg.nameAr}
                  className="w-full sm:w-44 h-32 object-cover rounded-xl shadow"
                />
                <div className="flex-1 flex justify-between items-center w-full">
                  <h4 className="text-xl md:text-2xl font-bold text-stone-900">
                    {isAr ? reg.nameAr : reg.nameEn}
                  </h4>
                  <div className="text-center">
                    <div className="text-3xl font-black text-[#0D9488]">
                      {reg.count}+
                    </div>
                    <span className="text-xs text-stone-500 font-bold">
                      {isAr ? 'فروع' : 'Branches'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#111111] text-white py-20 px-6 md:px-16 rounded-3xl max-w-7xl mx-auto shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-[#0D9488] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {isAr ? 'حيّــــــاك!' : 'Welcome!'}
            </span>
            <h3 className="text-3xl md:text-5xl font-extrabold leading-tight">
              {isAr ? 'تطبيق مياس كوفي' : 'Mayyas Coffee App'}
            </h3>
            <p className="text-stone-300 text-lg leading-relaxed font-normal">
              {isAr
                ? 'تجربة سلسة ومليئة بالمزايا يقدمها تطبيق مياس كوفي، تتيح للعملاء الطلب المسبق من الفروع باختيار الفرع المفضل وتجربة فريدة واستثنائية بالاستفادة من برنامج الولاء ومن خلال طلب مقتنيات وتوصيلها من خلال المتجر الإلكتروني.'
                : 'A seamless experience packed with benefits via Mayyas Coffee App: pre-order from your favorite branch, enjoy loyalty rewards, and shop merchandise online.'}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-stone-800 hover:bg-stone-700 px-6 py-3 rounded-2xl flex items-center gap-3 border border-stone-700 transition-colors">
                <Smartphone className="w-6 h-6 text-[#0D9488]" />
                <div className="text-right">
                  <div className="text-[10px] text-stone-400 font-bold uppercase">App Store</div>
                  <div className="text-sm font-bold">{isAr ? 'تحميل للايفون' : 'Download iOS'}</div>
                </div>
              </button>
              <button className="bg-stone-800 hover:bg-stone-700 px-6 py-3 rounded-2xl flex items-center gap-3 border border-stone-700 transition-colors">
                <Smartphone className="w-6 h-6 text-[#0D9488]" />
                <div className="text-right">
                  <div className="text-[10px] text-stone-400 font-bold uppercase">Google Play</div>
                  <div className="text-sm font-bold">{isAr ? 'تحميل للاندرويد' : 'Download Android'}</div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 md:w-80 h-[420px] bg-[#0D9488]/20 p-4 rounded-[40px] border-4 border-stone-700 shadow-2xl flex items-center justify-center text-center">
              <div className="space-y-4">
                <div className="bg-[#0D9488] w-16 h-16 rounded-2xl mx-auto flex items-center justify-center font-black text-2xl">M</div>
                <div className="font-extrabold text-xl">تطبيق مياس كوفي</div>
                <p className="text-xs text-stone-300">اطلب مسبقاً واكسب النقاط بكل سهولة</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900">
              {isAr ? 'نصّك الثاني دايم معك' : 'Latest Releases'}
            </h3>
            <div className="w-16 h-2 bg-[#D4B38B] rounded-full mt-2" />
          </div>
          <Link to="/news" className="text-[#0D9488] font-bold hover:underline">
            {isAr ? 'عرض جميع المنشورات' : 'View All Posts'}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsList.map((news, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-200/70">
              <img src={news.img} alt={news.titleAr} className="w-full h-56 object-cover" />
              <div className="p-6 space-y-3">
                <div className="flex justify-between text-xs text-stone-500 font-bold">
                  <span className="text-[#0D9488]">{isAr ? news.tagAr : news.tagEn}</span>
                  <span>{news.date}</span>
                </div>
                <h4 className="text-xl font-bold text-stone-900">
                  {isAr ? news.titleAr : news.titleEn}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
