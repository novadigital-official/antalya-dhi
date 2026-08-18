'use client';

import { useState, useEffect, useRef } from 'react';
import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

interface StatItem {
  target: number;
  prefix?: string;
  suffix: { en: string; fr: string; tr: string };
  label: { en: string; fr: string; tr: string };
  sub: { en: string; fr: string; tr: string };
}

const STATS: StatItem[] = [
  {
    target: 3600,
    prefix: '',
    suffix: { en: '+', fr: '+', tr: '+' },
    label: { en: 'Avg. Grafts Implanted', fr: 'Greffons Moyens', tr: 'Ortalama Greft Kapasitesi' },
    sub: { en: 'Single Session Coverage', fr: 'Couverture Session Unique', tr: 'Tek Seans Kapasitesi' }
  },
  {
    target: 98,
    prefix: '%',
    suffix: { en: '+', fr: '+', tr: '+' },
    label: { en: 'Graft Retention Rate', fr: 'Taux de Prise des Greffons', tr: 'Greft Tutunma Oranı' },
    sub: { en: 'ATP Solution Preservation', fr: 'Solution ATP Brevetée', tr: 'ATP Solüsyon Koruması' }
  },
  {
    target: 12,
    prefix: '',
    suffix: { en: ' Mo.', fr: ' Mois', tr: ' Ay' },
    label: { en: 'Clinical Follow-up', fr: 'Suivi Médical', tr: 'Medikal Takip & Destek' },
    sub: { en: 'Post-Op Care Protocol', fr: 'Protocole de Soins', tr: 'İyileşme ve Bakım Protokolü' }
  },
  {
    target: 5000,
    prefix: '',
    suffix: { en: '+', fr: '+', tr: '+' },
    label: { en: 'International Patients', fr: 'Patients Internationaux', tr: 'Uluslararası Hasta' },
    sub: { en: 'UK, France & Europe', fr: 'UK, France & Europe', tr: 'İngiltere, Fransa & Avrupa' }
  }
];

export default function CountUpStats() {
  const { lang } = useSiteContext();
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          STATS.forEach((stat, index) => {
            const duration = 2000;
            const steps = 50;
            const stepTime = duration / steps;
            const increment = stat.target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.target) {
                current = stat.target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[index] = Math.floor(current);
                return next;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl my-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
        {STATS.map((stat, idx) => (
          <div key={idx} className={`space-y-1.5 ${idx !== 0 ? 'pt-4 lg:pt-0' : ''}`}>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight flex items-center justify-center gap-0.5">
              <span className="text-blue-400">{stat.prefix}</span>
              <span>{counts[idx].toLocaleString()}</span>
              <span className="text-emerald-400 text-2xl sm:text-3xl">{stat.suffix[lang as Lang] || stat.suffix['en']}</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-200">
              {stat.label[lang as Lang] || stat.label['en']}
            </div>
            <div className="text-[11px] font-medium text-slate-400">
              {stat.sub[lang as Lang] || stat.sub['en']}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
