'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { Stethoscope, Globe, FileCheck } from 'lucide-react';

export default function MedicalTeam() {
  const { lang } = useSiteContext();

  const members = [
    {
      role: t(lang as Lang, 'team.member1.role'),
      exp: t(lang as Lang, 'team.member1.exp'),
      desc: t(lang as Lang, 'team.member1.desc'),
      Icon: Stethoscope,
      tag: 'DHI Surgical Lead'
    },
    {
      role: t(lang as Lang, 'team.member2.role'),
      exp: t(lang as Lang, 'team.member2.exp'),
      desc: t(lang as Lang, 'team.member2.desc'),
      Icon: Globe,
      tag: 'Multilingual Care'
    },
    {
      role: t(lang as Lang, 'team.member3.role'),
      exp: t(lang as Lang, 'team.member3.exp'),
      desc: t(lang as Lang, 'team.member3.desc'),
      Icon: FileCheck,
      tag: '12-Month Growth'
    }
  ];

  return (
    <div id="team" className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          {t(lang as Lang, 'team.title')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {t(lang as Lang, 'team.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {members.map((m, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 card-hover-lift"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/80">
                  <m.Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50/80 border border-blue-200/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {m.tag}
                </span>
              </div>

              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                {m.exp}
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
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
