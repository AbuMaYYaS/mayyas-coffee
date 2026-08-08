import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Send, CheckCircle, Sparkles, Heart, Users, TrendingUp } from 'lucide-react';

interface PageProps {
  lang: 'ar' | 'en';
}

export const CareersPage: React.FC<PageProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    { ar: 'الموارد البشرية', en: 'Human Resources', icon: Users },
    { ar: 'تكنولوجيا المعلومات', en: 'Information Technology', icon: Briefcase },
    { ar: 'الخدمات اللوجستية', en: 'Logistics', icon: TrendingUp },
    { ar: 'المصنع والمستودعات', en: 'Factory & Warehouses', icon: Briefcase },
    { ar: 'المشتريات والعقارات', en: 'Procurement & Real Estate', icon: Briefcase },
    { ar: 'العلاقات والتسويق', en: 'PR & Marketing', icon: Heart },
    { ar: 'خدمة العملاء', en: 'Customer Care', icon: Heart },
    { ar: 'الصيانة والجودة', en: 'Maintenance & Quality', icon: Briefcase },
  ];

  const benefits = [
    { icon: Heart, titleAr: 'بيئة محفزة', titleEn: 'Motivating Environment', descAr: 'بيئة عمل إيجابية تشجع على الإبداع والنمو', descEn: 'Positive work environment encouraging creativity and growth' },
    { icon: TrendingUp, titleAr: 'تطور مهني', titleEn: 'Career Growth', descAr: 'فرص حقيقية للترقي والتطور الوظيفي', descEn: 'Real opportunities for promotion and career development' },
    { icon: Users, titleAr: 'فريق متميز', titleEn: 'Great Team', descAr: 'انضم لفريق شغوف ومحترف يشاركك الرؤية', descEn: 'Join a passionate professional team sharing your vision' },
  ];

  return (
    <div className="pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center space-y-4 mb-20">
        <span className="text-[#0D9488] font-bold text-sm uppercase tracking-[0.2em] bg-[#0D9488]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          {isAr ? 'انضم إلينا' : 'Join Us'}
        </span>
        <h1 className="text-4xl md:text-7xl font-black text-[#2A1E17]">{isAr ? 'ابنِ مستقبلك معنا' : 'Build Your Future With Us'}</h1>
        <p className="text-[#2A1E17]/60 max-w-2xl mx-auto text-lg font-medium">{isAr ? 'نؤمن أن فريقنا هو جوهر نجاحنا، نستقطب الكفاءات الشغوفة التي تشاركنا الرؤية' : 'We believe our team is the core of our success, attracting passionate talents sharing our vision'}</p>
      </motion.div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {benefits.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -8 }} className="glass-card rounded-[32px] p-8 text-center space-y-4 border border-stone-100 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-[#0D9488] to-[#14B8A6] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto shadow-lg"><b.icon className="w-7 h-7 text-white" /></div>
            <h3 className="text-xl font-black text-[#2A1E17]">{isAr ? b.titleAr : b.titleEn}</h3>
            <p className="text-[#2A1E17]/60 text-sm leading-relaxed">{isAr ? b.descAr : b.descEn}</p>
          </motion.div>
        ))}
      </div>

      {/* Application Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-stone-100">
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl font-black text-[#2A1E17]">{isAr ? 'الأقسام المتاحة' : 'Available Departments'}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {departments.map((dept, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-stone-100 hover:border-[#0D9488]/30 transition-colors">
                <div className="bg-[#0D9488]/10 text-[#0D9488] w-9 h-9 rounded-xl flex items-center justify-center shrink-0"><dept.icon className="w-4 h-4" /></div>
                <span className="text-sm font-bold text-[#2A1E17]">{isAr ? dept.ar : dept.en}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#FAF8F5] p-8 rounded-[32px] border border-stone-100 space-y-6">
          <h3 className="text-2xl font-black text-[#2A1E17]">{isAr ? 'قدّم طلبك الآن' : 'Apply Now'}</h3>
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-4 bg-white p-8 rounded-3xl">
              <div className="bg-[#0D9488] w-16 h-16 rounded-full mx-auto flex items-center justify-center"><CheckCircle className="w-8 h-8 text-white" /></div>
              <h4 className="text-2xl font-black text-[#2A1E17]">{isAr ? 'تم استلام طلبك!' : 'Application Received!'}</h4>
              <p className="text-[#2A1E17]/60 text-sm">{isAr ? 'سيتواصل معك فريق الموارد البشرية قريباً.' : 'HR team will contact you soon.'}</p>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#2A1E17]/70 mb-1.5">{isAr ? 'الاسم الكامل *' : 'Full Name *'}</label>
                <input required type="text" className="w-full p-3.5 bg-white rounded-2xl text-sm border border-stone-200 focus:ring-2 focus:ring-[#0D9488] focus:outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#2A1E17]/70 mb-1.5">{isAr ? 'البريد الإلكتروني *' : 'Email *'}</label>
                <input required type="email" className="w-full p-3.5 bg-white rounded-2xl text-sm border border-stone-200 focus:ring-2 focus:ring-[#0D9488] focus:outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#2A1E17]/70 mb-1.5">{isAr ? 'القسم *' : 'Department *'}</label>
                <select required className="w-full p-3.5 bg-white rounded-2xl text-sm border border-stone-200 focus:ring-2 focus:ring-[#0D9488] focus:outline-none transition-all">
                  {departments.map((d, i) => <option key={i}>{isAr ? d.ar : d.en}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full bg-[#0D9488] text-white py-4 rounded-full font-bold shadow-lg hover:bg-teal-700 transition-colors flex justify-center items-center gap-2 hover:scale-[1.02] active:scale-95">
                <Send className="w-4 h-4" />
                <span>{isAr ? 'إرسال الطلب' : 'Submit Application'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
