import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Sparkles, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageProps {
  lang: 'ar' | 'en';
}

export const ContactUsPage: React.FC<PageProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center space-y-4 mb-16">
        <span className="text-[#0D9488] font-bold text-sm uppercase tracking-[0.2em] bg-[#0D9488]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          {isAr ? 'تواصل معنا' : 'Contact Us'}
        </span>
        <h1 className="text-4xl md:text-7xl font-black text-[#2A1E17]">{isAr ? 'نسعد بتواصلك' : 'We Love to Hear From You'}</h1>
        <p className="text-[#2A1E17]/60 max-w-xl mx-auto text-lg font-medium">{isAr ? 'فريقنا جاهز للرد على استفساراتك واقتراحاتك' : 'Our team is ready to answer your inquiries and suggestions'}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-5">
          {[
            { icon: Phone, labelAr: 'الهاتف', labelEn: 'Phone', value: '+966 9200 16232', ltr: true, color: 'from-[#0D9488] to-[#14B8A6]' },
            { icon: Mail, labelAr: 'البريد', labelEn: 'Email', value: 'customercare@mayyascoffee.sa', ltr: false, color: 'from-[#C49A6C] to-[#D4B38B]' },
            { icon: MapPin, labelAr: 'العنوان', labelEn: 'Address', value: 'P.O. Box 0077, Riyadh - Al Aqiq 11411, KSA', ltr: false, color: 'from-[#2A1E17] to-[#4a3528]' },
            { icon: Clock, labelAr: 'ساعات العمل', labelEn: 'Hours', value: isAr ? 'يومياً 6ص - 12م' : 'Daily 6AM - 12AM', ltr: false, color: 'from-purple-500 to-pink-500' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: isAr ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-[28px] shadow-sm border border-stone-100 hover:shadow-xl transition-all flex items-center gap-5 group">
              <div className={`bg-gradient-to-br ${item.color} w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#2A1E17]/50 uppercase tracking-wider block mb-1">{isAr ? item.labelAr : item.labelEn}</span>
                <span className={`text-lg font-black text-[#2A1E17] ${item.ltr ? 'tracking-wide' : ''}`} dir={item.ltr ? 'ltr' : 'auto'}>{item.value}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#2A1E17] text-white rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0D9488]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C49A6C]/10 rounded-full blur-3xl" />
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-black">{isAr ? 'أرسل لنا رسالة' : 'Send Us a Message'}</h3>
              <p className="text-[#E8DCD4]/60">{isAr ? 'سنرد عليك في أقرب وقت ممكن' : 'We will reply as soon as possible'}</p>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-4 glass-dark rounded-3xl p-8">
                  <div className="bg-[#0D9488] w-16 h-16 rounded-full mx-auto flex items-center justify-center"><CheckCircle2 className="w-8 h-8 text-white" /></div>
                  <h4 className="text-2xl font-black">{isAr ? 'تم الإرسال بنجاح!' : 'Sent Successfully!'}</h4>
                  <p className="text-[#E8DCD4]/60 text-sm">{isAr ? 'شكراً لتواصلك، سنرد قريباً.' : 'Thank you for reaching out, we will reply soon.'}</p>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#E8DCD4]/70 mb-1.5">{isAr ? 'الاسم الأول *' : 'First Name *'}</label>
                      <input required type="text" className="w-full p-3.5 glass-dark rounded-2xl text-sm text-white border border-white/10 focus:ring-2 focus:ring-[#0D9488] focus:outline-none transition-all placeholder:text-white/30" placeholder={isAr ? 'الاسم' : 'Name'} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#E8DCD4]/70 mb-1.5">{isAr ? 'اسم العائلة *' : 'Last Name *'}</label>
                      <input required type="text" className="w-full p-3.5 glass-dark rounded-2xl text-sm text-white border border-white/10 focus:ring-2 focus:ring-[#0D9488] focus:outline-none transition-all placeholder:text-white/30" placeholder={isAr ? 'العائلة' : 'Surname'} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#E8DCD4]/70 mb-1.5">{isAr ? 'البريد الإلكتروني *' : 'Email *'}</label>
                    <input required type="email" dir="ltr" className="w-full p-3.5 glass-dark rounded-2xl text-sm text-white border border-white/10 focus:ring-2 focus:ring-[#0D9488] focus:outline-none transition-all placeholder:text-white/30 text-left" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#E8DCD4]/70 mb-1.5">{isAr ? 'الرسالة *' : 'Message *'}</label>
                    <textarea required rows={5} className="w-full p-3.5 glass-dark rounded-2xl text-sm text-white border border-white/10 focus:ring-2 focus:ring-[#0D9488] focus:outline-none transition-all placeholder:text-white/30 resize-none" placeholder={isAr ? 'اكتب رسالتك هنا...' : 'Write your message...'}></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white py-4 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all flex justify-center items-center gap-2 hover:scale-[1.02] active:scale-95">
                    <Send className="w-4 h-4" />
                    <span>{isAr ? 'إرسال' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
