import React, { useState } from 'react';
import { MapPin, Search, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageProps {
  lang: 'ar' | 'en';
}

export const BranchesPage: React.FC<PageProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeRegion, setActiveRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const branches = [
    { id: 1, nameAr: 'فرع التحلية - الرياض', nameEn: 'Tahlia - Riyadh', region: 'central', cityAr: 'الرياض', cityEn: 'Riyadh', addressAr: 'طريق الأمير محمد بن عبد العزيز (التحلية)', addressEn: 'Prince Mohammad Bin Abdulaziz Rd' },
    { id: 2, nameAr: 'فرع العقيق - الرياض', nameEn: 'Al Aqiq - Riyadh', region: 'central', cityAr: 'الرياض', cityEn: 'Riyadh', addressAr: 'طريق الملك فهد، حي العقيق', addressEn: 'King Fahd Rd, Al Aqiq' },
    { id: 3, nameAr: 'فرع طريق الملك عبد الله - جدة', nameEn: 'King Abdullah Rd - Jeddah', region: 'western', cityAr: 'جدة', cityEn: 'Jeddah', addressAr: 'طريق الملك عبد الله، حي الشاطئ', addressEn: 'King Abdullah Rd, Al Shati' },
    { id: 4, nameAr: 'فرع العزيزية - مكة المكرمة', nameEn: 'Aziziyah - Makkah', region: 'western', cityAr: 'مكة', cityEn: 'Makkah', addressAr: 'شارع العزيزية العام', addressEn: 'Aziziyah Main St' },
    { id: 5, nameAr: 'فرع الكورنيش - الخبر', nameEn: 'Corniche - Khobar', region: 'eastern', cityAr: 'الخبر', cityEn: 'Khobar', addressAr: 'طريق الكورنيش، الخبر الشمالية', addressEn: 'Corniche Rd, North Khobar' },
    { id: 6, nameAr: 'فرع طريق الملك فهد - الدمام', nameEn: 'King Fahd Rd - Dammam', region: 'eastern', cityAr: 'الدمام', cityEn: 'Dammam', addressAr: 'طريق الملك فهد، حي الشاطئ', addressEn: 'King Fahd Rd' },
    { id: 7, nameAr: 'فرع المنسك - أبها', nameEn: 'Mansak - Abha', region: 'southern', cityAr: 'أبها', cityEn: 'Abha', addressAr: 'طريق الملك خالد، حي المنسك', addressEn: 'King Khalid Rd, Al Mansak' },
    { id: 8, nameAr: 'فرع شارع البازار - حائل', nameEn: 'Bazaar St - Hail', region: 'northern', cityAr: 'حائل', cityEn: 'Hail', addressAr: 'طريق الملك فيصل', addressEn: 'King Faisal Rd' },
    { id: 9, nameAr: 'فرع سلطانة - تبوك', nameEn: 'Sultanah - Tabuk', region: 'northern', cityAr: 'تبوك', cityEn: 'Tabuk', addressAr: 'طريق الجال', addressEn: 'Al Jal Rd' },
  ];

  const regions = [
    { id: 'all', labelAr: 'الكل', labelEn: 'All' },
    { id: 'central', labelAr: 'الوسطى', labelEn: 'Central' },
    { id: 'western', labelAr: 'الغربية', labelEn: 'Western' },
    { id: 'eastern', labelAr: 'الشرقية', labelEn: 'Eastern' },
    { id: 'southern', labelAr: 'الجنوبية', labelEn: 'Southern' },
    { id: 'northern', labelAr: 'الشمالية', labelEn: 'Northern' },
  ];

  const filtered = branches.filter((b) => {
    const matchRegion = activeRegion === 'all' || b.region === activeRegion;
    const matchSearch = b.nameAr.includes(searchQuery) || b.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) || b.cityAr.includes(searchQuery);
    return matchRegion && matchSearch;
  });

  return (
    <div className="pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center space-y-4 mb-16">
        <span className="text-[#0D9488] font-bold text-sm uppercase tracking-[0.2em] bg-[#0D9488]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {isAr ? 'فروعنا' : 'Our Branches'}
        </span>
        <h1 className="text-4xl md:text-7xl font-black text-[#2A1E17]">{isAr ? 'نحن قريبون منك' : 'We Are Near You'}</h1>
        <p className="text-[#2A1E17]/60 max-w-xl mx-auto text-lg font-medium">{isAr ? 'أكثر من 90 فرعاً نشطاً في مختلف مناطق ومدن المملكة العربية السعودية' : 'Over 90 active branches across Saudi Arabia'}</p>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-5 rounded-3xl shadow-sm border border-stone-100 mb-10">
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {regions.map((reg) => (
            <button key={reg.id} onClick={() => setActiveRegion(reg.id)} className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${activeRegion === reg.id ? 'bg-[#0D9488] text-white shadow-lg shadow-[#0D9488]/20' : 'bg-[#FAF8F5] text-[#2A1E17]/70 hover:bg-stone-200'}`}>
              {isAr ? reg.labelAr : reg.labelEn}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-72">
          <Search className="w-5 h-5 absolute right-4 top-3 text-stone-400" />
          <input type="text" placeholder={isAr ? 'ابحث عن فرع...' : 'Search branch...'} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pr-12 pl-4 py-3 bg-[#FAF8F5] rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9488] border border-stone-100" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((b, i) => (
          <motion.div key={b.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} whileHover={{ y: -8 }} className="bg-white p-6 rounded-[32px] shadow-sm border border-stone-100 hover:shadow-2xl transition-all space-y-4 group">
            <div className="flex justify-between items-start">
              <div className="bg-gradient-to-br from-[#0D9488] to-[#14B8A6] text-white p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="bg-[#FAF8F5] text-[#2A1E17]/70 text-xs font-bold px-3 py-1 rounded-full">{isAr ? b.cityAr : b.cityEn}</span>
            </div>
            <div>
              <h3 className="text-xl font-black text-[#2A1E17] group-hover:text-[#0D9488] transition-colors">{isAr ? b.nameAr : b.nameEn}</h3>
              <p className="text-[#2A1E17]/50 text-sm mt-1">{isAr ? b.addressAr : b.addressEn}</p>
            </div>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(b.nameAr)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#0D9488] font-bold text-sm hover:underline pt-2">
              <Navigation className="w-4 h-4" />
              <span>{isAr ? 'الاتجاهات' : 'Get Directions'}</span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
