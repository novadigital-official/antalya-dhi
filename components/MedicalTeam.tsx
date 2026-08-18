'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

const StethoscopeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const DocumentCheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-12.75a1.125 1.125 0 0 0-.33-.796L13.82 2.58a1.125 1.125 0 0 0-.795-.33Zm0 0v4.875a1.125 1.125 0 0 0 1.125 1.125h4.875M9 13.5l1.5 1.5 3-3" />
  </svg>
);

export default function MedicalTeam() {
  const { lang } = useSiteContext();

  const members = [
    {
      role: t(lang as Lang, 'team.member1.role'),
      exp: t(lang as Lang, 'team.member1.exp'),
      desc: t(lang as Lang, 'team.member1.desc'),
      Icon: StethoscopeIcon,
      tag: 'DHI Surgical Lead'
    },
    {
      role: t(lang as Lang, 'team.member2.role'),
      exp: t(lang as Lang, 'team.member2.exp'),
      desc: t(lang as Lang, 'team.member2.desc'),
      Icon: GlobeIcon,
      tag: 'Multilingual Care'
    },
    {
      role: t(lang as Lang, 'team.member3.role'),
      exp: t(lang as Lang, 'team.member3.exp'),
      desc: t(lang as Lang, 'team.member3.desc'),
      Icon: DocumentCheckIcon,
      tag: '12-Month Growth'
    }
  ];

  return (
    <div id="team" className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          {t(lang as Lang, 'team.title')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {t(lang as Lang, 'team.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {members.map((m, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <m.Icon />
                </div>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {m.tag}
                </span>
              </div>

              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                {m.exp}
              </span>
              <h3 className="text-base font-black text-slate-900 mb-1 leading-snug">
                {m.role}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-3">
                {m.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
              <span>{lang === 'tr' ? 'Sağlık Turizmi Koordinasyonu' : 'Patient Coordination'}</span>
              <span className="text-blue-600 font-bold">{lang === 'tr' ? 'Klinik Standart' : 'Clinical Standard'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
