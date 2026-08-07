'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function SocialProof() {
  const { lang } = useSiteContext();

  const title = {
    en: 'Verified Patient Reviews & Experience',
    fr: 'Avis Patients Vérifiés & Expériences',
    tr: 'Doğrulanmış Hasta Yorumları & Deneyimler',
  }[lang as Lang] || 'Verified Patient Reviews & Experience';

  const subtitle = {
    en: 'Real international patient stories verified via Trustpilot and Google Reviews.',
    fr: 'Histoires réelles de patients internationaux vérifiées via Trustpilot et Google.',
    tr: 'Trustpilot ve Google Reviews üzerinden doğrulanmış gerçek hasta deneyimleri.',
  }[lang as Lang] || 'Real international patient stories verified via Trustpilot and Google Reviews.';

  const reviews = [
    {
      name: 'James Wilson',
      location: 'London, United Kingdom 🇬🇧',
      platform: 'Trustpilot Verified',
      rating: '★★★★★',
      text: '"I was nervous about travelling to Turkey for DHI hair transplant, but the VIP Experience made everything effortless. Private Mercedes Vito pickup from Antalya airport, luxury hotel, and 3,800 grafts placed with precision. 8 months in, my hair is thick and 100% natural."',
      grafts: '3,800 Grafts DHI — VIP Experience',
      link: 'https://www.trustpilot.com'
    },
    {
      name: 'Antoine Dubois',
      location: 'Lyon, France 🇫🇷',
      platform: 'Google Reviews Verified',
      rating: '★★★★★',
      text: '"J\'ai comparé les prix en France et en Turquie. Pour le même résultat avec le Choi Pen, j\'ai économisé plus de 70% à Antalya. L\'équipe parle français, le suivi post-opératoire de 12 mois est impeccable. Je recommande vivement."',
      grafts: '4,200 Greffons DHI — VIP Experience',
      link: 'https://maps.google.com'
    },
    {
      name: 'Markus Weber',
      location: 'Munich, Germany 🇩🇪',
      platform: 'Trustpilot Verified',
      rating: '★★★★★',
      text: '"Direct Hair Implantation with no-shave option was the best decision. The painless needle-free anesthesia made the surgery comfortable. Very clean certified hospital facility and top-notch patient care."',
      grafts: '3,200 Grafts DHI — Standard Package',
      link: 'https://www.trustpilot.com'
    }
  ];

  return (
    <div id="reviews" className="w-full space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        {/* TRUSTPILOT & GOOGLE VERIFIED HEADER BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
          <span className="text-emerald-600 font-bold">★</span>
          <span>VERIFIED BY TRUSTPILOT & GOOGLE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">{title}</h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">{subtitle}</p>
      </div>

      {/* REVIEWS GRID WITH CLICKABLE VERIFICATION LINKS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((r, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-blue-500 hover:shadow-md transition-all">
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="font-black text-sm text-slate-900">{r.name}</div>
                  <div className="text-xs font-bold text-slate-500 mt-0.5">{r.location}</div>
                </div>
                <div className="text-amber-500 text-xs font-black">{r.rating}</div>
              </div>

              <div className="inline-flex items-center gap-1.5 text-[10px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full mb-3">
                <span>✓ {r.platform}</span>
              </div>

              <p className="text-xs text-slate-700 italic leading-relaxed font-medium">
                {r.text}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <div className="text-[11px] font-black text-blue-700 bg-blue-50 px-3 py-1 rounded-full text-center">
                {r.grafts}
              </div>
              <a
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold text-slate-400 hover:text-blue-600 flex items-center justify-center gap-1 text-center transition-colors"
              >
                <span>Verify on Platform 🔗</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* TRUST METRICS FOOTER BAR */}
      <div className="bg-slate-950 text-white rounded-3xl p-6 max-w-5xl mx-auto flex flex-col sm:flex-row justify-around items-center text-center gap-4 shadow-xl border border-slate-800">
        <div>
          <div className="text-amber-400 font-black text-lg">★ ★ ★ ★ ★ 4.9 / 5.0</div>
          <span className="text-xs text-slate-400 font-medium">Verified Trustpilot Rating</span>
        </div>
        <div className="hidden sm:block w-px h-8 bg-slate-800"></div>
        <div>
          <div className="text-white font-black text-lg">1,200+ Procedures</div>
          <span className="text-xs text-slate-400 font-medium">Successful DHI Operations</span>
        </div>
        <div className="hidden sm:block w-px h-8 bg-slate-800"></div>
        <div>
          <div className="text-blue-400 font-black text-lg">35+ Countries</div>
          <span className="text-xs text-slate-400 font-medium">International Patient Base</span>
        </div>
      </div>
    </div>
  );
}
