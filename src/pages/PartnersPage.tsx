import React, { useState } from 'react';
import { Building2, ExternalLink } from 'lucide-react';

interface PageProps {
  lang: 'ar' | 'en';
}

export const PartnersPage: React.FC<PageProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);

  const partners = [
    {
      id: 1,
      nameAr: 'باور كلان (POWR Clan)',
      nameEn: 'POWR Clan',
      tagAr: 'الألعاب الإلكترونية',
      tagEn: 'E-Sports',
      descAr: 'نفخر بالشراكة مع باور كلان والتي بدأت في مارس 2023، ضمن استراتيجية العلامة في بناء شراكة تعزز حضورها في مجال الألعاب الإلكترونية والتفاعل مع اهتمامات الشباب.',
      descEn: 'Proud partnership with POWR Clan launched March 2023 to engage the e-sports gaming community.',
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/partners/partner-1.webp',
    },
    {
      id: 2,
      nameAr: 'جمعية إنسان لرعاية الأيتام',
      nameEn: 'Ensan Charity Organization',
      tagAr: 'المسؤولية الاجتماعية',
      tagEn: 'Social Responsibility',
      descAr: 'نفخر بشراكتنا الممتدة منذ 2018 لدعم ورعاية الأيتام، حيث أثمرت البادرة عن كفالة أكثر من 28,000 يتيم.',
      descEn: 'Proud social partnership since 2018 sponsoring 28,000+ orphans in Saudi Arabia.',
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/partners/partner-2.webp',
    },
    {
      id: 3,
      nameAr: 'نادي الشباب السعودي',
      nameEn: 'Al Shabab Football Club',
      tagAr: 'القطاع الرياضي',
      tagEn: 'Sports Sector',
      descAr: 'إيمانًا منا بقوة القطاع الرياضي، نفخر بشراكتنا مع نادي الشباب لموسم رياضي حافل بالتميز والوصول للجمهور الرياضي.',
      descEn: 'Strategic sports partnership supporting Al Shabab FC across 3 sports seasons.',
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/partners/partner-3.webp',
    },
    {
      id: 4,
      nameAr: 'جمعية السرطان السعودية',
      nameEn: 'Saudi Cancer Foundation',
      tagAr: 'التوعية الصحية',
      tagEn: 'Health Awareness',
      descAr: 'تأكيدًا على التزامنا بدعم المبادرات المجتمعية، تعاوننا مع جمعية السرطان للتوعية بالفحص المبكر عن سرطان الثدي.',
      descEn: 'Community health partnership promoting early breast cancer detection campaigns.',
      img: 'https://halfm-cms-media-frankfurt.s3.eu-central-1.amazonaws.com/partners/partner-4.webp',
    },
  ];

  return (
    <div className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <span className="text-[#0D9488] font-bold text-sm uppercase tracking-wider bg-[#0D9488]/10 px-4 py-1.5 rounded-full inline-block">
          {isAr ? 'شركاء النجاح' : 'Success Partners'}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900">
          {isAr ? 'شراكات استراتيجية مستدامة' : 'Sustainable Strategic Partnerships'}
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
          {isAr ? 'نسعى لبناء شراكات تعزز حضور العلامة وتصنع أثراً إيجابياً ومستداماً' : 'Building partnerships creating positive sustainable social impact'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {partners.map((p) => (
          <div key={p.id} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="bg-[#0D9488]/10 text-[#0D9488] font-bold text-xs px-3 py-1.5 rounded-full">
                  {isAr ? p.tagAr : p.tagEn}
                </span>
                <Building2 className="w-6 h-6 text-stone-400" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900">{isAr ? p.nameAr : p.nameEn}</h3>
              <p className="text-stone-600 text-base leading-relaxed">{isAr ? p.descAr : p.descEn}</p>
            </div>
            
            <button
              onClick={() => setSelectedPartner(p.id)}
              className="inline-flex items-center gap-2 text-[#0D9488] font-bold text-sm hover:underline self-start"
            >
              <span>{isAr ? 'اضغط لعرض التفاصيل' : 'Click for Details'}</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {selectedPartner && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full space-y-6 animate-in fade-in">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-stone-900">
                {isAr ? partners.find((p) => p.id === selectedPartner)?.nameAr : partners.find((p) => p.id === selectedPartner)?.nameEn}
              </h3>
              <button onClick={() => setSelectedPartner(null)} className="text-stone-400 hover:text-stone-800 text-xl font-bold">✕</button>
            </div>
            <p className="text-stone-700 leading-relaxed">
              {isAr ? partners.find((p) => p.id === selectedPartner)?.descAr : partners.find((p) => p.id === selectedPartner)?.descEn}
            </p>
            <button
              onClick={() => setSelectedPartner(null)}
              className="w-full bg-[#0D9488] text-white py-3 rounded-full font-bold hover:bg-[#0D9488]/90"
            >
              {isAr ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
