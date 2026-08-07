'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

export default function MedicalTeam() {
  const { lang } = useSiteContext();

  const members = [
    {
      role: t(lang as Lang, 'team.member1.role'),
      exp: t(lang as Lang, 'team.member1.exp'),
      desc: t(lang as Lang, 'team.member1.desc'),
      icon: '🩺',
      tag: 'Certified DHI Surgeon'
    },
    {
      role: t(lang as Lang, 'team.member2.role'),
      exp: t(lang as Lang, 'team.member2.exp'),
      desc: t(lang as Lang, 'team.member2.desc'),
      icon: '🌐',
      tag: 'Native EN / FR / TR'
    },
    {
      role: t(lang as Lang, 'team.member3.role'),
      exp: t(lang as Lang, 'team.member3.exp'),
      desc: t(lang as Lang, 'team.member3.desc'),
      icon: '📋',
      tag: '12-Month Growth Care'
    }
  ];

  return (
    <div id="team" className="w-full space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 uppercase tracking-wider">
          EXPERT CARE & TRANSPARENCY
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          {t(lang as Lang, 'team.title')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {t(lang as Lang, 'team.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((m, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6 hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 font-black text-xl flex items-center justify-center shadow-sm">
                  {m.icon}
                </div>
                <span className="text-[10px] font-black text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider">
                  {m.tag}
                </span>
              </div>

              <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider block mb-1">
                {m.exp}
              </span>
              <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug">
                {m.role}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {m.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-slate-700">
              <span>T.C. Ministry of Health Partner</span>
              <span className="text-emerald-600">✓ Verified</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
