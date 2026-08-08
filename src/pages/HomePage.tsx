import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpLeft, ArrowUpRight, Smartphone, ChevronDown, Sparkles, MapPin, Heart, Zap, Award, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

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
      img: 'https://images.unsplash.com/photo-1579705745811-a32bef7f569b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'western',
      nameAr: 'المنطقة الغربية',
      nameEn: 'Western Region',
      count: 22,
      img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'southern',
      nameAr: 'المنطقة الجنوبية',
      nameEn: 'Southern Region',
      count: 9,
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'eastern',
      nameAr: 'المنطقة الشرقية',
      nameEn: 'Eastern Region',
      count: 6,
      img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'northern',
      nameAr: 'المنطقة الشمالية',
      nameEn: 'Northern Region',
      count: 3,
      img: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const newsList = [
    {
      titleAr: 'آيسد تي باشن فروت المنعش',
      titleEn: 'Iced Tea Passion Fruit',
      tagAr: 'إطلاق منتجات',
      tagEn: 'Product Launch',
      date: 'June 16, 2026',
      img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    },
    {
      titleAr: 'ماتشا فراولة الصيفية',
      titleEn: 'Strawberry Matcha',
      tagAr: 'إطلاق منتجات',
      tagEn: 'Product Launch',
      date: 'May 4, 2026',
      img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    },
    {
      titleAr: 'آيسكريم الورد الطايفي',
      titleEn: 'Taif Rose Ice Cream',
      tagAr: 'إطلاق منتجات',
      tagEn: 'Product Launch',
      date: 'April 11, 2026',
      img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="space-y-0 relative">
      <section className="relative h-screen flex flex-col justify-between pb-12 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105"
          autoPlay
          loop
          muted
          playsInline
          src="https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/pages/hero-video.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute w-2 h-2 rounded-full bg-[#0D9488] left-1/4 top-1/3"
          />
          <motion.div
            animate={{ y: [0, -150, 0], opacity: [0, 0.4, 0] }}
            transition={{ repeat: Infinity, duration: 12, delay: 2, ease: "easeInOut" }}
            className="absolute w-3 h-3 rounded-full bg-[#D4B38B] right-1/4 top-1/2"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white mt-16">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0D9488] to-teal-600 backdrop-blur-md px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase mb-6 shadow-xl border border-teal-400/30"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>{isAr ? 'تجربة القهوة الاستثنائية' : 'The Exceptional Coffee Experience'}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-8xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-stone-100 to-stone-300 drop-shadow-xl"
          >
            {isAr ? 'مياس كوفي' : 'MAYYAS COFFEE'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-2xl text-lg md:text-2xl text-stone-200 font-medium leading-relaxed"
          >
            {isAr
              ? 'علامة تجارية سعودية تسعى لتقديم تجربة تعكس جودة القهوة والشغف الحقيقي'
              : 'A proud Saudi brand driven by passion and supreme coffee craftsmanship'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/branches"
              className="group relative overflow-hidden bg-[#0D9488] text-white font-bold px-10 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{isAr ? 'استكشف فروعنا' : 'Explore Branches'}</span>
                {isAr ? <ArrowUpLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" /> : <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              to="/about-us"
              className="group relative overflow-hidden bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold px-10 py-4 rounded-full transition-all duration-300 hover:bg-white/30 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">{isAr ? 'قصتنا' : 'Our Story'}</span>
            </Link>
          </motion.div>
        </div>
        <div className="relative z-10 flex justify-center pb-8 text-white/70">
          <ChevronDown className="w-10 h-10 animate-bounce" />
        </div>
      </section>
      <section className="bg-[#FBF9F5] py-24 px-6 md:px-16 -mt-16 rounded-t-[60px] relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: isAr ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group overflow-hidden rounded-[40px] shadow-2xl border-4 border-white bg-stone-100"
          >
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
              alt="مياس كوفي"
              className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="bg-[#0D9488] text-xs font-extrabold px-3 py-1.5 rounded-full uppercase shadow-lg">MAYYAS COFFEE</span>
                <h4 className="text-2xl font-bold mt-2">{isAr ? 'الفرع الرئيسي في الرياض' : 'The Original Riyadh Flagship'}</h4>
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
                {isAr ? 'قصة شغف تبدأ من الرياض' : 'A Passion Story from Riyadh'}
              </h2>
              <div className="w-24 h-2 bg-[#D4B38B] rounded-full mt-3" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-stone-700 leading-relaxed font-normal"
            >
              <span className="font-bold text-[#0D9488]">{isAr ? 'مياس كوفي' : 'Mayyas Coffee'}</span>{' '}
              {isAr
                ? 'علامة تجارية سعودية رائدة تأسست عام 2018، تسعى إلى التوسع محليًا وإقليميًا، وترسيخ مكانتها كخيار مفضل لعشاق القهوة في المملكة وخارجها متخصصة في صناعة القهوة، وانطلقت برؤية تهدف إلى تقديم تجربة قهوة تعكس جودة المنتج والسعر المناسب.'
                : 'a leading Saudi brand founded in 2018, expanding locally & regionally to be the top choice for coffee lovers, launched with a vision to deliver exceptional quality at fair prices.'}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <Link
                to="/about-us"
                className="inline-flex items-center gap-3 border-2 border-stone-900 rounded-full px-8 py-3.5 font-bold text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <span>{isAr ? 'اعرف المزيد' : 'Learn More'}</span>
                <span className="bg-[#0D9488] text-white p-2 rounded-full group-hover:scale-110 transition-transform">
                  {isAr ? <ArrowUpLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, titleAr: 'هدفنا', titleEn: 'Our Goal', descAr: 'نسعى لتبسيط المفاهيم لنكون أقرب للناس', descEn: 'Simplifying coffee concepts to be closer to everyone.' },
            { icon: Zap, titleAr: 'رسالتنا', titleEn: 'Our Mission', descAr: 'التركيز على التوسع مع الحفاظ على تمحورنا حول العميل', descEn: 'Expanding with customer-centric focus, ensuring quality.' },
            { icon: Award, titleAr: 'رؤيتنا', titleEn: 'Our Vision', descAr: 'أن يكون مياس كوفي رائدًا في مجال القهوة والمشروبات', descEn: 'Position Mayyas Coffee as an industry leader.' },
            { icon: Coffee, titleAr: 'ركائزنا', titleEn: 'Our Pillars', descAr: 'سعودي - إنساني - متمحور حول العميل - مرن - طموح', descEn: 'Saudi - Human - Customer-Centric - Flexible - Ambitious' },
          ].map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8 rounded-[32px] space-y-4 hover:shadow-2xl transition-all border border-stone-200/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D9488]/10 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="bg-[#0D9488]/15 text-[#0D9488] w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#0D9488] group-hover:text-white transition-colors">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">{isAr ? pillar.titleAr : pillar.titleEn}</h3>
                <div className="w-12 h-1.5 bg-[#D4B38B] rounded-full mt-2" />
                <p className="text-stone-600 font-medium text-sm leading-relaxed pt-2">
                  {isAr ? pillar.descAr : pillar.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-[#F5EFE6] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight"
            >
              {isAr ? 'نطمح أن يكون مياس كوفي متواجد حيث يتواجد الناس' : 'We aim for Mayyas Coffee to be wherever people are'}
            </motion.h3>
            <div className="w-24 h-2.5 bg-[#D4B38B] rounded-full" />
            <p className="text-lg text-stone-700 font-medium">
              {isAr ? 'ووصلنا اليوم إلى أكثر من' : 'Today we reached over'}
            </p>
            <div className="flex items-baseline gap-2 text-[#0D9488]">
              <span className="text-7xl lg:text-9xl font-black drop-shadow-sm">90</span>
              <span className="text-5xl lg:text-7xl font-bold">+</span>
            </div>
            <p className="text-stone-800 font-bold text-2xl">{isAr ? 'فرع نشط في كافة المناطق' : 'Active Branches Nationwide'}</p>
            <Link
              to="/branches"
              className="inline-flex items-center gap-3 bg-[#0D9488] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-teal-700 transition-colors hover:scale-105 active:scale-95"
            >
              <span>{isAr ? 'عرض جميع الفروع' : 'View All Branches'}</span>
              {isAr ? <ArrowUpLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
            </Link>
          </div>
          <div className="lg:col-span-7 space-y-6">
            {regions.map((reg, i) => (
              <motion.div
                key={reg.id}
                initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, x: isAr ? -8 : 8 }}
                className="bg-white p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row items-center gap-6 group overflow-hidden border border-stone-200/50 relative"
              >
                <div className="w-full sm:w-44 h-32 overflow-hidden rounded-2xl shadow shrink-0 relative">
                  <img
                    src={reg.img}
                    alt={reg.nameAr}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0D9488]/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex-1 flex justify-between items-center w-full">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-stone-900">
                      {isAr ? reg.nameAr : reg.nameEn}
                    </h4>
                    <p className="text-stone-500 text-sm mt-1">{isAr ? 'فروع مميزة وخدمات ممتازة' : 'Premium locations & service'}</p>
                  </div>
                  <div className="text-center bg-stone-50 px-5 py-3 rounded-2xl shadow-inner border border-stone-100">
                    <div className="text-3xl font-black text-[#0D9488]">
                      {reg.count}+
                    </div>
                    <span className="text-xs text-stone-500 font-bold">
                      {isAr ? 'فرع' : 'Branches'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#111111] text-white py-24 px-6 md:px-16 rounded-[50px] max-w-7xl mx-auto shadow-2xl relative overflow-hidden my-12 border border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/40 via-stone-900 to-black z-0" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-[#0D9488] to-teal-600 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>{isAr ? 'حيّــــــاك!' : 'Welcome!'}</span>
            </motion.span>
            <h3 className="text-4xl md:text-6xl font-black leading-tight">
              {isAr ? 'تطبيق مياس كوفي' : 'Mayyas Coffee App'}
            </h3>
            <p className="text-stone-300 text-lg md:text-xl leading-relaxed font-normal">
              {isAr
                ? 'تجربة سلسة ومليئة بالمزايا يقدمها تطبيق مياس كوفي، تتيح للعملاء الطلب المسبق من الفروع باختيار الفرع المفضل وتجربة فريدة واستثنائية بالاستفادة من برنامج الولاء ومن خلال طلب مقتنيات وتوصيلها من خلال المتجر الإلكتروني.'
                : 'A seamless experience packed with benefits via Mayyas Coffee App: pre-order from your favorite branch, enjoy loyalty rewards, and shop merchandise online.'}
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="bg-stone-800 hover:bg-stone-700 px-6 py-3.5 rounded-2xl flex items-center gap-3 border border-stone-700 transition-all hover:scale-105 active:scale-95 shadow-xl">
                <Smartphone className="w-7 h-7 text-[#0D9488]" />
                <div className="text-right">
                  <div className="text-[11px] text-stone-400 font-bold uppercase">App Store</div>
                  <div className="text-base font-bold">{isAr ? 'تحميل للايفون' : 'Download iOS'}</div>
                </div>
              </button>
              <button className="bg-stone-800 hover:bg-stone-700 px-6 py-3.5 rounded-2xl flex items-center gap-3 border border-stone-700 transition-all hover:scale-105 active:scale-95 shadow-xl">
                <Smartphone className="w-7 h-7 text-[#0D9488]" />
                <div className="text-right">
                  <div className="text-[11px] text-stone-400 font-bold uppercase">Google Play</div>
                  <div className="text-base font-bold">{isAr ? 'تحميل للاندرويد' : 'Download Android'}</div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center relative">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative w-64 md:w-80 h-[440px] bg-gradient-to-b from-[#0D9488]/30 to-black p-4 rounded-[45px] border-4 border-stone-700 shadow-2xl flex items-center justify-center text-center overflow-hidden backdrop-blur-xl"
            >
              <div className="absolute top-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay" />
              <div className="relative z-10 space-y-5 text-white drop-shadow-lg">
                <div className="bg-[#0D9488] w-20 h-20 rounded-[25px] mx-auto flex items-center justify-center font-black text-3xl shadow-lg border-2 border-white/20">M</div>
                <div className="font-extrabold text-2xl tracking-tight">تطبيق مياس كوفي</div>
                <p className="text-sm text-stone-200 font-medium px-4">اطلب مسبقاً واكسب النقاط بكل سهولة</p>
                <div className="flex justify-center gap-2 pt-2">
                  <div className="w-2 h-2 rounded-full bg-[#0D9488]" />
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-stone-900">
              {isAr ? 'أحدث المنتجات والأخبار' : 'Latest Releases & News'}
            </h3>
            <div className="w-20 h-2.5 bg-[#D4B38B] rounded-full mt-3" />
          </motion.div>
          <Link to="/news" className="inline-flex items-center gap-2 text-[#0D9488] font-bold text-lg hover:underline group">
            <span>{isAr ? 'عرض جميع المنشورات' : 'View All Posts'}</span>
            {isAr ? <ArrowUpLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsList.map((news, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-stone-200/70 group flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={news.img} alt={news.titleAr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 bg-[#0D9488] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isAr ? news.tagAr : news.tagEn}</span>
                </span>
                <div className="absolute bottom-4 left-4 text-white text-xs font-bold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {news.date}
                </div>
              </div>
              <div className="p-8 space-y-3">
                <h4 className="text-2xl font-bold text-stone-900 group-hover:text-[#0D9488] transition-colors leading-tight">
                  {isAr ? news.titleAr : news.titleEn}
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed line-clamp-2">
                  {isAr ? 'اكتشف التفاصيل الكاملة لإطلاق المنتج الجديد في أقرب فرع لك.' : 'Discover full product details at your nearest branch.'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
