'use client';

import { useMemo } from 'react';
import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function DensityField() {
  const { lang } = useSiteContext();

  const cols = 48;
  const rows = 16;

  // Pre-calculate dot opacities based on distance from center-bottom to simulate scalp density mapping
  const dots = useMemo(() => {
    const list: { id: string; opacity: number }[] = [];
    const cx = cols / 2;
    const cy = rows * 1.1;
    const maxDist = Math.hypot(cols / 2, rows * 1.1);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const dist = Math.hypot(c - cx, (r - cy) * 1.4);
        let o = 1 - (dist / maxDist);
        o = Math.max(0.06, Math.min(0.92, o));
        list.push({ id: `${r}-${c}`, opacity: Number(o.toFixed(2)) });
      }
    }
    return list;
  }, []);

  const captionTitle = {
    tr: 'Greft Yoğunluk Planlaması',
    en: 'Graft Density Mapping',
    fr: 'Planification de Densité des Greffons',
  }[lang as Lang] || 'Graft Density Mapping';

  const captionDesc = {
    tr: 'Her hasta için doku haritası çıkarılır, ekim yoğunluğu cm² bazında planlanır.',
    en: 'Individual scalp mapping for tailored graft placement and density per cm².',
    fr: 'Cartographie personnalisée du cuir chevelu pour une densité maximale au cm².',
  }[lang as Lang] || 'Individual scalp mapping for tailored graft placement.';

  const statLabel = {
    tr: 'ort. greft',
    en: 'avg. grafts',
    fr: 'greffons moy.',
  }[lang as Lang] || 'avg. grafts';

  return (
    <div className="mt-14 aspect-[16/8] sm:aspect-[16/7] md:aspect-[16/6] rounded-[4px] bg-[#17231C] relative overflow-hidden flex items-end shadow-xl border border-[rgba(23,35,28,0.2)]">
      {/* 48x16 Follicle Grid */}
      <div 
        className="absolute inset-0 grid p-4 sm:p-6 gap-[2px] sm:gap-[3px] pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
        }}
      >
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="rounded-full self-center justify-self-center w-[60%] aspect-square transition-opacity duration-300"
            style={{
              backgroundColor: '#D89A5D',
              opacity: dot.opacity,
            }}
          />
        ))}
      </div>

      {/* Density Caption Overlay */}
      <div className="relative z-10 p-5 sm:p-7 text-[#EFE7D8] flex flex-col sm:flex-row justify-between items-start sm:items-end w-full gap-4 bg-gradient-to-t from-[#17231C] via-[#17231C]/90 to-transparent">
        <div>
          <h3 className="text-[#EFE7D8] font-serif text-base sm:text-lg mb-1 font-semibold">
            {captionTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#EFE7D8]/70 max-w-sm">
            {captionDesc}
          </p>
        </div>
        <div className="font-mono text-2xl sm:text-3xl text-[#D89A5D] whitespace-nowrap font-semibold">
          3.600+ <span className="text-xs text-[#EFE7D8]/50 font-normal font-mono">{statLabel}</span>
        </div>
      </div>
    </div>
  );
}
