import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle } from 'lucide-react';

interface PageProps {
  lang: 'ar' | 'en';
}

export const CareersPage: React.FC<PageProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    { ar: 'الموارد البشرية', en: 'Human Resources' },
    { ar: 'تكنولوجيا المعلومات', en: 'Information Technology' },
    { ar: 'الخدمات اللوجستية', en: 'Logistics' },
    { ar: 'المصنع والمستودعات', en: 'Factory & Warehouses' },
    { ar: 'المشتريات والعقارات', en: 'Procurement & Real Estate' },
    { ar: 'العلاقات العامة والتسويق', en: 'PR & Marketing' },
    { ar: 'خدمة العملاء والتشغيل', en: 'Customer Care & Operations' },
    { ar: 'الصيانة والجودة', en: 'Maintenance & Quality' },
  ];

  return (
    <div className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <span className="text-[#0D9488] font-bold text-sm uppercase tracking-wider bg-[#0D9488]/10 px-4 py-1.5 rounded-full inline-block">
          {isAr ? 'انضم إلينا' : 'Join Our Team'}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900">
          {isAr ? 'الوظائف في مياس كوفي' : 'Careers at Mayyas Coffee'}
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
          {isAr ? 'نؤمن أن فريق العمل هو جوهر نجاحنا وأساس تميزنا، نحرص على استقطاب الكفاءات الشغوفة' : 'We believe our team is the core of our success attracting passionate talents'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl font-extrabold text-stone-900">
            {isAr ? 'إدارات وأقسام الشركة' : 'Company Departments'}
          </h2>
          <p className="text-stone-600">
            {isAr ? 'اختر القسم الذي يناسب طموحاتك وخبرتك المهنية:' : 'Select your desired department:'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {departments.map((dept, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-[#FBF9F5] p-3.5 rounded-2xl border border-stone-200">
                <Briefcase className="w-5 h-5 text-[#0D9488]" />
                <span className="text-sm font-bold text-stone-800">{isAr ? dept.ar : dept.en}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#F5EFE6] p-8 rounded-3xl space-y-6 border border-stone-200">
          <h3 className="text-2xl font-bold text-stone-900">
            {isAr ? 'قدم طلبك الآن' : 'Apply Now'}
          </h3>
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <CheckCircle className="w-16 h-16 text-[#0D9488] mx-auto" />
              <h4 className="text-xl font-bold text-stone-900">{isAr ? 'تم استلام طلبك بنجاح!' : 'Application Received!'}</h4>
              <p className="text-stone-600 text-sm">{isAr ? 'سيتواصل معك فريق الموارد البشرية قريباً.' : 'HR team will get back to you soon.'}</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">{isAr ? 'الاسم الكامل *' : 'Full Name *'}</label>
                <input required type="text" className="w-full p-3 bg-white rounded-xl text-sm border border-stone-300 focus:ring-2 focus:ring-[#0D9488] focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">{isAr ? 'البريد الإلكتروني *' : 'Email Address *'}</label>
                <input required type="email" className="w-full p-3 bg-white rounded-xl text-sm border border-stone-300 focus:ring-2 focus:ring-[#0D9488] focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">{isAr ? 'القسم المطلوب *' : 'Preferred Department *'}</label>
                <select required className="w-full p-3 bg-white rounded-xl text-sm border border-stone-300 focus:ring-2 focus:ring-[#0D9488] focus:outline-none">
                  {departments.map((d, i) => <option key={i}>{isAr ? d.ar : d.en}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full bg-[#0D9488] text-white py-3.5 rounded-full font-bold shadow-md hover:bg-[#0D9488]/90 transition-colors flex justify-center items-center gap-2">
                <Send className="w-4 h-4" />
                <span>{isAr ? 'إرسال طلب التوظيف' : 'Submit Application'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
