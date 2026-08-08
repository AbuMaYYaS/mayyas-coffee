import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface PageProps {
  lang: 'ar' | 'en';
}

export const ContactUsPage: React.FC<PageProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <span className="text-[#0D9488] font-bold text-sm uppercase tracking-wider bg-[#0D9488]/10 px-4 py-1.5 rounded-full inline-block">
          {isAr ? 'تواصل معنا' : 'Contact Us'}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900">
          {isAr ? 'نرحب بتواصلك معنا' : 'We Welcome Your Inquiry'}
        </h1>
        <p className="text-stone-600 max-w-xl mx-auto text-base md:text-lg font-medium">
          {isAr ? 'لنكون دائمًا قريبين منك، نوفر لك إمكانية التواصل المباشر مع فريقنا' : 'Always close to you delivering fast direct support'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-8 bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
          <h3 className="text-2xl font-bold text-stone-900 border-b border-stone-100 pb-4">
            {isAr ? 'معلومات التواصل' : 'Contact Details'}
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#0D9488]/10 text-[#0D9488] p-3 rounded-2xl shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-stone-500 font-bold block">{isAr ? 'رقم الهاتف' : 'Phone Number'}</span>
                <span className="text-lg font-extrabold text-[#0D9488]" dir="ltr">+966 9200 16232</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#0D9488]/10 text-[#0D9488] p-3 rounded-2xl shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-stone-500 font-bold block">{isAr ? 'البريد الإلكتروني' : 'Email Address'}</span>
                <span className="text-lg font-extrabold text-[#0D9488]">customercare@mayyascoffee.sa</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#0D9488]/10 text-[#0D9488] p-3 rounded-2xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-stone-500 font-bold block">{isAr ? 'العنوان الرئيسي' : 'Headquarter Address'}</span>
                <span className="text-sm font-semibold text-stone-800 leading-relaxed block mt-1">
                  P.O. Box 0077 Riyadh - AL Aqiq 11411 Kingdom of Saudi Arabia
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 bg-[#F5EFE6] p-8 md:p-10 rounded-3xl border border-stone-200 space-y-6">
          <h3 className="text-2xl font-bold text-stone-900">
            {isAr ? 'ارسل لنا رسالة' : 'Send Us a Message'}
          </h3>
          {submitted ? (
            <div className="text-center py-12 space-y-4 bg-white p-8 rounded-2xl">
              <CheckCircle2 className="w-16 h-16 text-[#0D9488] mx-auto" />
              <h4 className="text-2xl font-bold text-stone-900">{isAr ? 'تم إرسال رسالتك بنجاح!' : 'Message Sent!'}</h4>
              <p className="text-stone-600 text-sm">{isAr ? 'شكرًا لتواصلك معنا، سيتواصل معك فريق خدمة العملاء قريباً.' : 'Thank you for reaching out, customer care will reply shortly.'}</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">{isAr ? 'الاسم الأول *' : 'First Name *'}</label>
                  <input required type="text" className="w-full p-3 bg-white rounded-xl text-sm border border-stone-300 focus:ring-2 focus:ring-[#0D9488] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">{isAr ? 'اسم العائلة *' : 'Last Name *'}</label>
                  <input required type="text" className="w-full p-3 bg-white rounded-xl text-sm border border-stone-300 focus:ring-2 focus:ring-[#0D9488] focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">{isAr ? 'البريد الإلكتروني *' : 'Email Address *'}</label>
                <input required type="email" className="w-full p-3 bg-white rounded-xl text-sm border border-stone-300 focus:ring-2 focus:ring-[#0D9488] focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">{isAr ? 'الرسالة *' : 'Message *'}</label>
                <textarea required rows={5} className="w-full p-3 bg-white rounded-xl text-sm border border-stone-300 focus:ring-2 focus:ring-[#0D9488] focus:outline-none resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#0D9488] text-white py-3.5 rounded-full font-bold shadow-md hover:bg-[#0D9488]/90 transition-colors flex justify-center items-center gap-2">
                <Send className="w-4 h-4" />
                <span>{isAr ? 'إرسال الرسالة' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
