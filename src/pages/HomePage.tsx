import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpLeft, ArrowUpRight, ChevronDown, Sparkles, MapPin, Heart, Zap, Award, Coffee, Leaf, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface HomePageProps {
  lang: 'ar' | 'en';
}

export const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const regions = [
    { id: 'central', nameAr: 'المنطقة الوسطى', nameEn: 'Central Region', count: 53, img: 'https://images.unsplash.com/photo-1579705745811-a32bef7f569b?auto=format&fit=crop&w=800&q=80' },
    { id: 'western', nameAr: 'المنطقة الغربية', nameEn: 'Western Region', count: 22, img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80' },
    { id: 'southern', nameAr: 'المنطقة الجنوبية', nameEn: 'Southern Region', count: 9, img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80' },
    { id: 'eastern', nameAr: 'المنطقة الشرقية', nameEn: 'Eastern Region', count: 6, img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80' },
    { id: 'northern', nameAr: 'المنطقة الشمالية', nameEn: 'Northern Region', count: 3, img: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=800&q=80' },
  ];

  const newsList = [
    { titleAr: 'آيسد تي باشن فروت المنعش', titleEn: 'Iced Tea Passion Fruit', tagAr: 'إطلاق منتجات', tagEn: 'Product Launch', date: 'June 16, 2026', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80' },
    { titleAr: 'ماتشا فراولة الصيفية', titleEn: 'Strawberry Matcha', tagAr: 'إطلاق منتجات', tagEn: 'Product Launch', date: 'May 4, 2026', img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80' },
    { titleAr: 'آيسكريم الورد الطايفي', titleEn: 'Taif Rose Ice Cream', tagAr: 'إطلاق منتجات', tagEn: 'Product Launch', date: 'April 11, 2026', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80' },
  ];

  const testimonials = [
    { nameAr: 'سارة العتيبي', nameEn: 'Sarah Al-Otaibi', roleAr: 'عميلة دائمة', roleEn: 'Loyal Customer', textAr: 'مياس كوفي غيّر مفهومي عن القهوة. النكهة الأصيلة والخدمة الراقية تجعلني أزورهم يومياً!', textEn: 'Mayyas Coffee changed my concept of coffee. The authentic flavor and premium service make me visit daily!' },
    { nameAr: 'فهد القحطاني', nameEn: 'Fahad Al-Qahtani', roleAr: 'رجل أعمال', roleEn: 'Businessman', textAr: 'أفضل مكان لاجتماعاتي الصباحية. الأجواء راقية والقهوة من أفخر ما تذوقت.', textEn: 'The best place for my morning meetings. Elegant atmosphere and the finest coffee I have tasted.' },
    { nameAr: 'نورة الدوسري', nameEn: 'Noura Al-Dosari', roleAr: 'مدونة قهوة', roleEn: 'Coffee Blogger', textAr: 'كمختصة في القهوة، أؤكد أن مياس كوفي يقدم تشكيلة استثنائية تنافس أكبر العلامات العالمية.', textEn: 'As a coffee specialist, I confirm Mayyas Coffee offers an exceptional selection rivaling top global brands.' },
  ];

  const stats = [
    { value: '90+', labelAr: 'فرع نشط', labelEn: 'Active Branches', icon: MapPin },
    { value: '2018', labelAr: 'سنة التأسيس', labelEn: 'Founded', icon: Coffee },
    { value: '5M+', labelAr: 'كوب قهوة سنوياً', labelEn: 'Cups Per Year', icon: Star },
    { value: '100%', labelAr: 'تحميص محلي', labelEn: 'Local Roasting', icon: Leaf },
  ];

  return (
    <div className="relative">
      {/* ===== HERO ===== */}
      <section className="relative h-screen flex flex-col justify-center pb-12 overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover scale-110" autoPlay loop muted playsInline src="https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/pages/hero-video.mp4" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A110D]/80 via-[#1A110D]/50 to-[#1A110D]/95" />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-[#C49A6C]/40" style={{ left: `${15 + i * 14}%`, top: `${30 + (i % 3) * 15}%` }} animate={{ y: [0, -120, 0], opacity: [0, 0.6, 0] }} transition={{ repeat: Infinity, duration: 6 + i * 1.5, delay: i * 0.8, ease: "easeInOut" }} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.div initial={{ opacity: 0, y: -20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 glass-dark px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase mb-8 shadow-xl">
            <Sparkles className="w-4 h-4 text-[#C49A6C] animate-pulse" />
            <span>{isAr ? 'تجربة القهوة الاستثنائية' : 'The Exceptional Coffee Experience'}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6">
            <span className="block text-gradient-gold">{isAr ? 'مياس كوفي' : 'MAYYAS'}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="max-w-3xl text-lg md:text-2xl text-[#E8DCD4] font-medium leading-relaxed mb-2">
            {isAr ? 'حيث تُمزج الأصالة السعودية بالحداثة' : 'Where Saudi Authenticity Meets Modernity'}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="max-w-2xl text-base md:text-lg text-[#E8DCD4]/60 font-normal leading-relaxed mb-10">
            {isAr ? 'من الرياض إلى العالم — تجربة قهوة تعكس جودة المنتج والشغف الحقيقي في كل رشفة' : 'From Riyadh to the world — a coffee experience reflecting quality and true passion in every sip'}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} className="flex flex-wrap justify-center gap-4">
            <Link to="/branches" className="group relative overflow-hidden bg-[#0D9488] text-white font-bold px-10 py-4 rounded-full shadow-2xl shadow-[#0D9488]/30 transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{isAr ? 'استكشف فروعنا' : 'Explore Branches'}</span>
                {isAr ? <ArrowUpLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" /> : <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link to="/about-us" className="glass-dark text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95 border border-white/20">
              {isAr ? 'اكتشف قصتنا' : 'Our Story'}
            </Link>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="relative -mt-20 z-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card rounded-[40px] shadow-2xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0D9488]/10 text-[#0D9488] mb-1">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-[#2A1E17]">{stat.value}</div>
              <div className="text-sm text-[#2A1E17]/60 font-bold">{isAr ? stat.labelAr : stat.labelEn}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== STORY ===== */}
      <section className="bg-[#FAF8F5] py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: isAr ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="lg:col-span-6 relative group">
            <div className="relative overflow-hidden rounded-[40px] shadow-2xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80" alt="مياس كوفي" className="w-full h-[520px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A110D]/80 via-transparent to-transparent" />
            </div>
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -bottom-6 isAr ? -left-6 : -right-6 glass-card rounded-3xl p-6 shadow-2xl max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#0D9488] w-10 h-10 rounded-2xl flex items-center justify-center"><Coffee className="w-5 h-5 text-white" /></div>
                <div className="text-2xl font-black text-[#2A1E17]">2018</div>
              </div>
              <p className="text-xs text-[#2A1E17]/60 font-bold">{isAr ? 'بداية الشغف من الرياض' : 'Passion started in Riyadh'}</p>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-6 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-[#0D9488] font-bold text-sm uppercase tracking-[0.2em]">{isAr ? 'قصتنا' : 'Our Story'}</span>
              <h2 className="text-4xl lg:text-6xl font-black text-[#2A1E17] leading-tight mt-2">
                {isAr ? 'من حلم بشغف إلى' : 'From a Passion Dream to'} <span className="text-gradient-gold">{isAr ? 'علامة رائدة' : 'a Leading Brand'}</span>
              </h2>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-[#2A1E17]/70 leading-relaxed">
              {isAr ? 'بدأت مياس كوفي عام 2018 من مدينة الرياض برؤية بسيطة: تقديم قهوة سعودية فاخرة بأسعار في متناول الجميع. اليوم، نمت لتصبح علامة تجارية رائدة تخدم ملايين العملاء عبر أكثر من 90 فرعاً في كافة مناطق المملكة.' : 'Mayyas Coffee started in 2018 from Riyadh with a simple vision: delivering premium Saudi coffee at accessible prices. Today, it has grown into a leading brand serving millions across 90+ branches nationwide.'}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="grid grid-cols-2 gap-4 pt-2">
              {[
                { icon: Leaf, labelAr: 'تحميص محلي', labelEn: 'Local Roasting' },
                { icon: Heart, labelAr: 'صناعة بشغف', labelEn: 'Crafted with Passion' },
                { icon: Zap, labelAr: 'خدمة سريعة', labelEn: 'Fast Service' },
                { icon: Award, labelAr: 'جودة عالمية', labelEn: 'Global Quality' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white shadow-sm border border-stone-100">
                  <div className="bg-[#0D9488]/10 text-[#0D9488] w-10 h-10 rounded-xl flex items-center justify-center shrink-0"><item.icon className="w-5 h-5" /></div>
                  <span className="font-bold text-sm text-[#2A1E17]">{isAr ? item.labelAr : item.labelEn}</span>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="pt-4">
              <Link to="/about-us" className="inline-flex items-center gap-3 bg-[#2A1E17] text-white rounded-full px-8 py-4 font-bold hover:bg-[#0D9488] transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                <span>{isAr ? 'اكتشف المزيد' : 'Learn More'}</span>
                {isAr ? <ArrowUpLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PILLARS ===== */}
      <section className="bg-[#2A1E17] text-white py-24 px-6 md:px-16 rounded-t-[60px] rounded-b-[60px] max-w-7xl mx-auto my-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C49A6C]/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16 space-y-3">
            <span className="text-[#C49A6C] font-bold text-sm uppercase tracking-[0.2em]">{isAr ? 'قيمنا' : 'Our Values'}</span>
            <h2 className="text-4xl md:text-5xl font-black">{isAr ? 'ما الذي يميز مياس كوفي؟' : 'What Makes Mayyas Unique?'}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, titleAr: 'الأصالة', titleEn: 'Authenticity', descAr: 'نحافظ على هويتنا السعودية في كل تفصيل', descEn: 'Preserving our Saudi identity in every detail' },
              { icon: Zap, titleAr: 'الابتكار', titleEn: 'Innovation', descAr: 'نطور منتجاتنا باستمرار لنفاجئك دائماً', descEn: 'Constantly innovating to surprise you always' },
              { icon: Award, titleAr: 'الجودة', titleEn: 'Quality', descAr: 'أجود الحبوب المختارة بعناية فائقة', descEn: 'Finest beans selected with utmost care' },
              { icon: Coffee, titleAr: 'الشغف', titleEn: 'Passion', descAr: 'نصنع كل كوب بحب وإتقان حقيقي', descEn: 'Crafting every cup with true love & mastery' },
            ].map((pillar, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -10 }} className="glass-dark rounded-[32px] p-8 space-y-4 hover:bg-white/10 transition-all group">
                <div className="bg-gradient-to-br from-[#0D9488] to-[#14B8A6] w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-black">{isAr ? pillar.titleAr : pillar.titleEn}</h3>
                <div className="w-12 h-1 bg-[#C49A6C] rounded-full" />
                <p className="text-[#E8DCD4]/70 text-sm leading-relaxed">{isAr ? pillar.descAr : pillar.descEn}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRANCHES ===== */}
      <section className="bg-[#FAF8F5] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-[#0D9488] font-bold text-sm uppercase tracking-[0.2em]">{isAr ? 'انتشارنا' : 'Our Reach'}</span>
              <h3 className="text-4xl md:text-5xl font-black text-[#2A1E17] leading-tight mt-2">{isAr ? 'مياس كوفي حيثما كنت' : 'Mayyas Wherever You Are'}</h3>
              <div className="w-20 h-2 bg-[#C49A6C] rounded-full mt-4" />
            </motion.div>

            <p className="text-lg text-[#2A1E17]/70 leading-relaxed font-medium">{isAr ? 'وصلنا اليوم إلى أكثر من' : 'Today we reached over'}</p>
            <div className="flex items-baseline gap-2 text-[#0D9488]">
              <span className="text-7xl lg:text-9xl font-black drop-shadow-sm">90</span>
              <span className="text-5xl lg:text-7xl font-bold">+</span>
            </div>
            <p className="text-[#2A1E17] font-bold text-2xl">{isAr ? 'فرع نشط في كافة المناطق' : 'Active Branches Nationwide'}</p>

            <Link to="/branches" className="inline-flex items-center gap-3 bg-[#0D9488] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-teal-700 transition-all hover:scale-105 active:scale-95">
              <span>{isAr ? 'عرض جميع الفروع' : 'View All Branches'}</span>
              {isAr ? <ArrowUpLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
            </Link>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {regions.map((reg, i) => (
              <motion.div key={reg.id} initial={{ opacity: 0, x: isAr ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ scale: 1.02 }} className="bg-white p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row items-center gap-6 group overflow-hidden border border-stone-200/50">
                <div className="w-full sm:w-44 h-32 overflow-hidden rounded-2xl shadow shrink-0 relative">
                  <img src={reg.img} alt={reg.nameAr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 flex justify-between items-center w-full">
                  <div>
                    <h4 className="text-xl md:text-2xl font-black text-[#2A1E17]">{isAr ? reg.nameAr : reg.nameEn}</h4>
                    <p className="text-[#2A1E17]/50 text-sm mt-1">{isAr ? 'فروع مميزة وخدمات ممتازة' : 'Premium locations & service'}</p>
                  </div>
                  <div className="text-center bg-[#FAF8F5] px-5 py-3 rounded-2xl border border-stone-100">
                    <div className="text-3xl font-black text-[#0D9488]">{reg.count}+</div>
                    <span className="text-xs text-[#2A1E17]/50 font-bold">{isAr ? 'فرع' : 'Branches'}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-[#F5EFE6] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16 space-y-3">
            <span className="text-[#0D9488] font-bold text-sm uppercase tracking-[0.2em]">{isAr ? 'آراء عملائنا' : 'Testimonials'}</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2A1E17]">{isAr ? 'ماذا يقول عملاؤنا؟' : 'What Our Customers Say'}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} whileHover={{ y: -8 }} className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden">
                <Quote className="absolute top-6 left-6 w-12 h-12 text-[#0D9488]/10" />
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-5 h-5 fill-[#C49A6C] text-[#C49A6C]" />)}
                </div>
                <p className="text-[#2A1E17]/80 leading-relaxed mb-6 relative z-10 text-[15px]">"{isAr ? t.textAr : t.textEn}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <div className="bg-gradient-to-br from-[#0D9488] to-[#14B8A6] w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg shadow-md">{(isAr ? t.nameAr : t.nameEn)[0]}</div>
                  <div>
                    <div className="font-black text-[#2A1E17]">{isAr ? t.nameAr : t.nameEn}</div>
                    <div className="text-xs text-[#2A1E17]/50 font-bold">{isAr ? t.roleAr : t.roleEn}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWS ===== */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-[#0D9488] font-bold text-sm uppercase tracking-[0.2em]">{isAr ? 'أحدثنا' : 'Latest'}</span>
            <h3 className="text-4xl md:text-5xl font-black text-[#2A1E17] mt-2">{isAr ? 'منتجات وأخبار' : 'Products & News'}</h3>
            <div className="w-20 h-2 bg-[#C49A6C] rounded-full mt-3" />
          </motion.div>
          <Link to="/news" className="inline-flex items-center gap-2 text-[#0D9488] font-bold text-lg hover:underline group">
            <span>{isAr ? 'عرض الكل' : 'View All'}</span>
            {isAr ? <ArrowUpLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsList.map((news, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }} whileHover={{ y: -12 }} className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-stone-200/70 group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img src={news.img} alt={news.titleAr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 right-4 bg-[#0D9488] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isAr ? news.tagAr : news.tagEn}</span>
                </span>
                <div className="absolute bottom-4 left-4 text-white text-xs font-bold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">{news.date}</div>
              </div>
              <div className="p-8 space-y-3">
                <h4 className="text-2xl font-black text-[#2A1E17] group-hover:text-[#0D9488] transition-colors leading-tight">{isAr ? news.titleAr : news.titleEn}</h4>
                <p className="text-[#2A1E17]/60 text-sm leading-relaxed">{isAr ? 'اكتشف التفاصيل الكاملة لإطلاق المنتج الجديد في أقرب فرع لك.' : 'Discover full product details at your nearest branch.'}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
