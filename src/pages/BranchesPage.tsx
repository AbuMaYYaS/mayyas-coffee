import React, { useState } from 'react';
import { MapPin, Search, Navigation } from 'lucide-react';

interface PageProps {
  lang: 'ar' | 'en';
}

export const BranchesPage: React.FC<PageProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeRegion, setActiveRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const branches = [
    { id: 1, nameAr: 'فرع التحلية - الرياض', nameEn: 'Tahlia Branch - Riyadh', region: 'central', cityAr: 'الرياض', cityEn: 'Riyadh', addressAr: 'طريق الأمير محمد بن عبد العزيز (التحلية)', addressEn: 'Prince Mohammad Bin Abdulaziz Rd' },
    { id: 2, nameAr: 'فرع العقيق - الرياض', nameEn: 'Al Aqiq Branch - Riyadh', region: 'central', cityAr: 'الرياض', cityEn: 'Riyadh', addressAr: 'طريق الملك فهد، حي العقيق', addressEn: 'King Fahd Rd, Al Aqiq' },
    { id: 3, nameAr: 'فرع طريق الملك عبد الله - جدة', nameEn: 'King Abdullah Rd - Jeddah', region: 'western', cityAr: 'جدة', cityEn: 'Jeddah', addressAr: 'طريق الملك عبد الله، حي الشاطئ', addressEn: 'King Abdullah Rd, Al Shati' },
    { id: 4, nameAr: 'فرع العزيزية - مكة المكرمة', nameEn: 'Aziziyah Branch - Makkah', region: 'western', cityAr: 'مكة', cityEn: 'Makkah', addressAr: 'شارع العزيزية العام', addressEn: 'Aziziyah Main St' },
    { id: 5, nameAr: 'فرع الكورنيش - الخبر', nameEn: 'Corniche Branch - Khobar', region: 'eastern', cityAr: 'الخبر', cityEn: 'Khobar', addressAr: 'طريق الكورنيش، الخبر الشمالية', addressEn: 'Corniche Rd, North Khobar' },
    { id: 6, nameAr: 'فرع طريق الملك فهد - الدمام', nameEn: 'King Fahd Rd - Dammam', region: 'eastern', cityAr: 'الدمام', cityEn: 'Dammam', addressAr: 'طريق الملك فهد، حي الشاطئ', addressEn: 'King Fahd Rd' },
    { id: 7, nameAr: 'فرع المنسك - أبها', nameEn: 'Mansak Branch - Abha', region: 'southern', cityAr: 'أبها', cityEn: 'Abha', addressAr: 'طريق الملك خالد، حي المنسك', addressEn: 'King Khalid Rd, Al Mansak' },
    { id: 8, nameAr: 'فرع شارع البازار - حائل', nameEn: 'Bazaar St - Hail', region: 'northern', cityAr: 'حائل', cityEn: 'Hail', addressAr: 'طريق الملك فيصل', addressEn: 'King Faisal Rd' },
    { id: 9, nameAr: 'فرع سلطانة - تبوك', nameEn: 'Sultanah Branch - Tabuk', region: 'northern', cityAr: 'تبوك', cityEn: 'Tabuk', addressAr: 'طريق الجال', addressEn: 'Al Jal Rd' },
  ];

  const regions = [
    { id: 'all', labelAr: 'جميع المناطق', labelEn: 'All Regions' },
    { id: 'central', labelAr: 'الوسطى (53+)', labelEn: 'Central (53+)' },
    { id: 'western', labelAr: 'الغربية (22+)', labelEn: 'Western (22+)' },
    { id: 'eastern', labelAr: 'الشرقية (6+)', labelEn: 'Eastern (6+)' },
    { id: 'southern', labelAr: 'الجنوبية (9+)', labelEn: 'Southern (9+)' },
    { id: 'northern', labelAr: 'الشمالية (3+)', labelEn: 'Northern (3+)' },
  ];

  const filtered = branches.filter((b) => {
    const matchRegion = activeRegion === 'all' || b.region === activeRegion;
    const matchSearch =
      b.nameAr.includes(searchQuery) ||
      b.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.cityAr.includes(searchQuery);
    return matchRegion && matchSearch;
  });

  return (
    <div className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <span className="text-[#0D9488] font-bold text-sm uppercase tracking-wider bg-[#0D9488]/10 px-4 py-1.5 rounded-full inline-block">
          {isAr ? 'فروع مياس كوفي' : 'Mayyas Coffee Branches'}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900">
          {isAr ? 'فروعنا أقرب إليك' : 'Our Branches Near You'}
        </h1>
        <p className="text-stone-600 max-w-xl mx-auto text-base md:text-lg font-medium">
          {isAr ? 'أكثر من 90 فرعًا نشطًا في مختلف مناطق ومدن المملكة العربية السعودية' : 'Over 90 active branches covering Saudi Arabia regions'}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-stone-200">
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {regions.map((reg) => (
            <button
              key={reg.id}
              onClick={() => setActiveRegion(reg.id)}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${activeRegion === reg.id ? 'bg-[#0D9488] text-white shadow' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}
            >
              {isAr ? reg.labelAr : reg.labelEn}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-72">
          <Search className="w-5 h-5 absolute right-3.5 top-3 text-stone-400" />
          <input
            type="text"
            placeholder={isAr ? 'ابحث باسم المدينة أو الفرع...' : 'Search branch or city...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-11 pl-4 py-2.5 bg-stone-100 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((b) => (
          <div key={b.id} className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200 hover:shadow-md transition-all space-y-4">
            <div className="flex justify-between items-start">
              <div className="bg-[#0D9488]/10 text-[#0D9488] p-3 rounded-2xl">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="bg-stone-100 text-stone-600 text-xs font-bold px-3 py-1 rounded-full">
                {isAr ? b.cityAr : b.cityEn}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-stone-900">{isAr ? b.nameAr : b.nameEn}</h3>
              <p className="text-stone-500 text-sm mt-1">{isAr ? b.addressAr : b.addressEn}</p>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(b.nameAr)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#0D9488] font-bold text-sm hover:underline pt-2"
            >
              <Navigation className="w-4 h-4" />
              <span>{isAr ? 'الاتجاهات على الخريطة' : 'Get Directions'}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
