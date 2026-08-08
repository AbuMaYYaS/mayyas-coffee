import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Coffee, Leaf, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react';

interface PageProps {
  lang: 'ar' | 'en';
}

export const AboutUsPage: React.FC<PageProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const journey = [
    { year: '2018', titleAr: 'البداية', titleEn: 'The Beginning', descAr: 'انطلاقتنا من الرياض بفرع واحد وشغف كبير', descEn: 'Our start from Riyadh with one branch and big passion' },
    { year: '2020', titleAr: 'التوسع', titleEn: 'Expansion', descAr: 'افتتاح 25 فرعاً جديداً عبر المملكة', descEn: 'Opening 25 new branches across the Kingdom' },
    { year: '2023', titleAr: 'العالمية', titleEn: 'Going Global', descAr: 'أول فرع دولي في لندن', descEn: 'First international branch in London' },
    { year: '2026', titleAr: 'الريادة', titleEn: 'Leadership', descAr: '90+ فرع نشط و5 ملايين كوب سنوياً', descEn: '90+ active branches and 5M cups yearly' },
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-24">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center space-y-4">
          <span className="text-[#0D9488] font-bold text-sm uppercase tracking-[0.2em] bg-[#0D9488]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {isAr ? 'قصتنا' : 'Our Story'}
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-[#2A1E17] leading-tight">
            {isAr ? 'من حلم إلى' : 'From Dream to'} <span className="text-gradient-gold">{isAr ? 'واقع' : 'Reality'}</span>
          </h1>
          <p className="text-[#2A1E17]/60 max-w-2xl mx-auto text-lg font-medium">{isAr ? 'رحلة شغف بدأت من فكرة بسيطة وتحولت إلى علامة تجارية رائدة' : 'A passion journey that started from a simple idea and became a leading brand'}</p>
        </motion.div>
      </section>

      {/* Story Content */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-stone-100">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-[#2A1E17] leading-snug">
              {isAr ? '«نصف مليون ريال وحلم لا ينتهي»' : '"Half a million and an endless dream"'}
            </h2>
            <div className="w-16 h-1.5 bg-[#C49A6C] rounded-full" />
            <p className="text-[#2A1E17]/70 text-lg leading-relaxed">
              {isAr ? 'في عام 2018، اجتمع صديقان في الرياض يحملان شغفاً كبيراً بالقهوة ورأس مال قدره 500 ألف ريال. كان الحلم بسيطاً: تقديم قهوة سعودية فاخرة بأسعار في متناول الجميع، ليصبح واقعاً ملموساً بفضل العمل الدؤوب ودعم المجتمع.' : 'In 2018, two friends gathered in Riyadh with a big passion for coffee and 500,000 SAR capital. The dream was simple: delivering premium Saudi coffee at accessible prices, which became a reality through hard work and community support.'}
            </p>
            <p className="text-[#2A1E17]/70 text-lg leading-relaxed">
              {isAr ? 'لم يقتصر الطموح على الرياض، بل امتد لافتتاح أول فرع دولي في لندن، لتصبح مياس كوفي علامة سعودية تفتخر بها المملكة في المحافل الدولية.' : 'Ambition extended beyond Riyadh to open the first international branch in London, making Mayyas Coffee a Saudi brand the Kingdom is proud of on international stages.'}
            </p>
            <Link to="/contact-us" className="inline-flex items-center gap-3 bg-[#0D9488] text-white rounded-full px-8 py-4 font-bold hover:bg-teal-700 transition-all group shadow-lg hover:scale-105 active:scale-95">
              <span>{isAr ? 'تواصل معنا' : 'Contact Us'}</span>
              {isAr ? <ArrowUpLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
            </Link>
          </div>
          <div className="lg:col-span-6 relative group">
            <div className="overflow-hidden rounded-[32px] shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80" alt="Mayyas Coffee" className="w-full h-[420px] object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A110D]/60 to-transparent" />
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-5 -right-5 glass-card rounded-3xl p-5 shadow-2xl flex items-center gap-3">
              <div className="bg-[#0D9488] w-10 h-10 rounded-xl flex items-center justify-center"><Coffee className="w-5 h-5 text-white" /></div>
              <div><div className="text-2xl font-black text-[#2A1E17]">90+</div><div className="text-xs text-[#2A1E17]/60 font-bold">{isAr ? 'فرع' : 'Branches'}</div></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Timeline Journey */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-[#0D9488] font-bold text-sm uppercase tracking-[0.2em]">{isAr ? 'رحلتنا' : 'Our Journey'}</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#2A1E17] mt-2">{isAr ? 'محطات في مسيرتنا' : 'Milestones'}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journey.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -8 }} className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all border border-stone-100 text-center group">
              <div className="text-5xl font-black text-gradient-gold mb-3">{item.year}</div>
              <div className="w-12 h-1 bg-[#0D9488] rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-black text-[#2A1E17] mb-2">{isAr ? item.titleAr : item.titleEn}</h3>
              <p className="text-[#2A1E17]/60 text-sm leading-relaxed">{isAr ? item.descAr : item.descEn}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-[#0D9488] font-bold text-sm uppercase tracking-[0.2em]">{isAr ? 'بنيتنا التحتية' : 'Our Facilities'}</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#2A1E17] mt-2">{isAr ? 'مصانع ومحمصات' : 'Factories & Roasteries'}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80', icon: Leaf, titleAr: 'المحمصة المركزية', titleEn: 'Central Roastery', descAr: 'تحميص أجود حبوب القهوة المختارة بعناية لضمان الطعم الفريد', descEn: 'Roasting the finest carefully selected coffee beans' },
            { img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', icon: Award, titleAr: 'مخبوزات الرياض', titleEn: 'Riyadh Bakery', descAr: 'مخبوزات وحلويات طازجة يومياً لفروع المنطقة الوسطى', descEn: 'Fresh daily pastries for Central Region branches' },
            { img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80', icon: Coffee, titleAr: 'مخبوزات جدة', titleEn: 'Jeddah Bakery', descAr: 'إنتاج مركزي يخدم القطاع الغربي بأعلى معايير الجودة', descEn: 'Central production serving the Western Region' },
          ].map((facility, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-stone-100 group">
              <div className="h-52 overflow-hidden relative">
                <img src={facility.img} alt={facility.titleEn} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A110D]/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-[#0D9488] w-10 h-10 rounded-xl flex items-center justify-center"><facility.icon className="w-5 h-5 text-white" /></div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-black text-[#2A1E17]">{isAr ? facility.titleAr : facility.titleEn}</h3>
                <p className="text-[#2A1E17]/60 text-sm leading-relaxed">{isAr ? facility.descAr : facility.descEn}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
