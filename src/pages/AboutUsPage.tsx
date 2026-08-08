import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface PageProps {
  lang: 'ar' | 'en';
}

export const AboutUsPage: React.FC<PageProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <div className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto space-y-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4"
      >
        <span className="text-[#0D9488] font-bold text-sm uppercase tracking-wider bg-[#0D9488]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#0D9488]" />
          {isAr ? 'عن مياس كوفي' : 'About Mayyas Coffee'}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900">
          {isAr ? 'قصة الشغف والتميز' : 'Story of Passion & Excellence'}
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-lg font-medium">
          {isAr ? 'رحلة انطلقت من الرياض وحلّقت إلى مصاف العالمية' : 'A journey starting from Riyadh reaching global horizons'}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-stone-900 leading-snug">
            {isAr
              ? 'نصف مليون ريال شكلت البداية وحجر الأساس لـ « مياس كوفي »'
              : '500,000 SAR formed the foundation of Mayyas Coffee'}
          </h2>
          <div className="w-16 h-2 bg-[#D4B38B] rounded-full" />
          <p className="text-stone-700 text-lg leading-relaxed">
            {isAr
              ? 'بداية الحكاية كانت في مدينة الرياض حيث اتفق صديقان للخوض في غمار رحلة افتتاح مشروعهم والدخول في عالم القهوة بقلوب مليئة بالشغف والإصرار ورأس مال قدره 500 ألف ريال فقط، مع دعم وتشجيع الشركات الصديقة أصبح واقعًا ملموسًا.'
              : 'The journey began in Riyadh when two friends set out with passion, determination, and 500,000 SAR capital to revolutionize coffee experience.'}
          </p>
          <p className="text-stone-700 text-lg leading-relaxed">
            {isAr
              ? 'الطموح جسّد دافعهم، فلم يجعلوا مدينة الرياض حدهم، بل انتشروا حتى افتتحوا أول فرع عالمي أخذ مكانه في لندن. هذا النجاح كان نتيجة جهد وإيمان دؤوب متواصل بعد توفيق الرحمن ودعم المجتمع.'
              : 'Driven by ambition, their reach expanded beyond Riyadh opening their first international branch in London, powered by hard work and community trust.'}
          </p>
        </div>
        <div className="lg:col-span-6 overflow-hidden rounded-2xl shadow-xl relative group">
          <img
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"
            alt="Mayyas Coffee Story"
            className="w-full h-80 lg:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
            <span className="text-white font-extrabold text-lg">{isAr ? 'محمصة وتحضير مياس كوفي الفاخرة' : 'Mayyas Coffee Specialty Roastery'}</span>
          </div>
        </div>
      </motion.div>

      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-extrabold text-stone-900">{isAr ? 'مصانعنا ومراكز الإنتاج' : 'Our Production & Facilities'}</h3>
          <p className="text-stone-600 mt-2">{isAr ? 'ضمان أعلى درجات الجودة والطزاجة يومياً' : 'Ensuring fresh quality daily'}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="bg-[#F5EFE6] p-8 rounded-3xl space-y-4 border border-stone-200 group overflow-hidden">
            <div className="h-44 rounded-2xl overflow-hidden mb-4 relative">
              <img src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80" alt="Roastery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="bg-[#0D9488] text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg">1</div>
            <h4 className="text-xl font-bold text-stone-900">{isAr ? 'محمصة القهوة المركزية' : 'Central Coffee Roastery'}</h4>
            <p className="text-stone-700 text-sm leading-relaxed">
              {isAr ? 'تم إنشاء مصنع متخصص لتحميص أجود حبوب القهوة المختارة بعناية لضمان الطعم الفريد.' : 'Dedicated state-of-the-art facility roasting handpicked specialty coffee beans.'}
            </p>
          </motion.div>
          <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="bg-[#F5EFE6] p-8 rounded-3xl space-y-4 border border-stone-200 group overflow-hidden">
            <div className="h-44 rounded-2xl overflow-hidden mb-4 relative">
              <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80" alt="Bakery Riyadh" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="bg-[#0D9488] text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg">2</div>
            <h4 className="text-xl font-bold text-stone-900">{isAr ? 'مصنع مخبوزات الرياض' : 'Riyadh Central Bakery'}</h4>
            <p className="text-stone-700 text-sm leading-relaxed">
              {isAr ? 'مصنع مركزي للمخبوزات والحلويات بالرياض لتغذية جميع فروع المنطقة طازجة.' : 'Central bakery in Riyadh supplying fresh pastries daily to branches.'}
            </p>
          </motion.div>
          <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="bg-[#F5EFE6] p-8 rounded-3xl space-y-4 border border-stone-200 group overflow-hidden">
            <div className="h-44 rounded-2xl overflow-hidden mb-4 relative">
              <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80" alt="Bakery Jeddah" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="bg-[#0D9488] text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg">3</div>
            <h4 className="text-xl font-bold text-stone-900">{isAr ? 'مصنع مخبوزات جدة' : 'Jeddah Central Bakery'}</h4>
            <p className="text-stone-700 text-sm leading-relaxed">
              {isAr ? 'مصنع مركزي في جدة يضمن وصول المخبوزات والمنتجات الفاخرة للقطاع الغربي.' : 'Central production unit in Jeddah serving Western Region branches.'}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
