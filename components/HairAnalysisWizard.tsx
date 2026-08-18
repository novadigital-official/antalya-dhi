'use client';

import { useState, useEffect, useTransition } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

const NORWOOD_LEVELS = [
  { level: 1, title: { en: 'Stage 1', fr: 'Stade 1', tr: 'Seviye 1' }, desc: { en: 'Minimal Hair Loss', fr: 'Chute Minimale', tr: 'Minimum Dökülme' }, grafts: '1,000 - 1,500 Grafts' },
  { level: 2, title: { en: 'Stage 2', fr: 'Stade 2', tr: 'Seviye 2' }, desc: { en: 'Slight Receding Hairline', fr: 'Léger Recul Frontal', tr: 'Hafif Şakak Çekilmesi' }, grafts: '1,500 - 2,000 Grafts' },
  { level: 3, title: { en: 'Stage 3', fr: 'Stade 3', tr: 'Seviye 3' }, desc: { en: 'Receding Temple Area', fr: 'Recul des Temples', tr: 'Belirgin Şakak Dökülmesi' }, grafts: '2,000 - 2,500 Grafts' },
  { level: 4, title: { en: 'Stage 4', fr: 'Stade 4', tr: 'Seviye 4' }, desc: { en: 'Crown Thinning & Temples', fr: 'Eclaircissement Sommet', tr: 'Tepe & Şakak Dökülmesi' }, grafts: '2,500 - 3,200 Grafts' },
  { level: 5, title: { en: 'Stage 5', fr: 'Stade 5', tr: 'Seviye 5' }, desc: { en: 'Advanced Crown Thinning', fr: 'Calvitie Avancée', tr: 'İleri Seviye Tepe Dökülmesi' }, grafts: '3,200 - 4,000 Grafts' },
  { level: 6, title: { en: 'Stage 6', fr: 'Stade 6', tr: 'Seviye 6' }, desc: { en: 'Severe Hair Loss', fr: 'Chute Sévère', tr: 'Şiddetli Saç Kaybı' }, grafts: '4,000 - 4,500 Grafts' },
  { level: 7, title: { en: 'Stage 7', fr: 'Stade 7', tr: 'Seviye 7' }, desc: { en: 'Extensive Hair Loss', fr: 'Chute Très Étendue', tr: 'İleri Derece Donör İhtiyacı' }, grafts: '4,500+ Grafts' },
];

const COUNTRIES = [
  { code: '+90', name: 'Turkey' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+33', name: 'France' },
  { code: '+49', name: 'Germany' },
  { code: '+31', name: 'Netherlands' },
  { code: '+32', name: 'Belgium' },
  { code: '+41', name: 'Switzerland' },
  { code: '+1', name: 'United States / Canada' },
];

export default function HairAnalysisWizard() {
  const { lang } = useSiteContext();
  const [step, setStep] = useState<number>(1);
  const [selectedNorwood, setSelectedNorwood] = useState<number>(3);
  const [selectedPackage, setSelectedPackage] = useState<'Standard DHI' | 'VIP DHI Experience'>('VIP DHI Experience');
  const [name, setName] = useState<string>('');
  
  const [countryCode, setCountryCode] = useState<string>(lang === 'tr' ? '+90' : lang === 'fr' ? '+33' : '+44');
  const [countryName, setCountryName] = useState<string>(lang === 'tr' ? 'Turkey' : lang === 'fr' ? 'France' : 'United Kingdom');
  const [phone, setPhone] = useState<string>('');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (lang === 'tr') {
      setCountryCode('+90');
      setCountryName('Turkey');
    } else if (lang === 'fr') {
      setCountryCode('+33');
      setCountryName('France');
    } else {
      setCountryCode('+44');
      setCountryName('United Kingdom');
    }
  }, [lang]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const found = COUNTRIES.find(c => c.code === e.target.value);
    if (found) {
      setCountryCode(found.code);
      setCountryName(found.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    startTransition(() => {
      const selectedGrafts = NORWOOD_LEVELS.find(n => n.level === selectedNorwood)?.grafts || 'Custom';
      
      const newLead = {
        id: Date.now().toString(),
        name: name.trim(),
        phone: `${countryCode} ${phone.trim()}`,
        country: countryName,
        language: lang.toUpperCase(),
        package: selectedPackage,
        norwood: `Stage ${selectedNorwood} (${selectedGrafts})`,
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' (' + new Date().toLocaleDateString() + ')',
        status: 'New Lead'
      };

      try {
        const existing = JSON.parse(localStorage.getItem('dhi_patient_leads') || '[]');
        localStorage.setItem('dhi_patient_leads', JSON.stringify([newLead, ...existing]));
      } catch (err) {
        console.error(err);
      }

      const waMsg = encodeURIComponent(
        `Hello Antalya DHI Team,\n` +
        `I would like to get a FREE DHI Hair Analysis:\n` +
        `• *Name:* ${name}\n` +
        `• *Country:* ${countryName} (${countryCode})\n` +
        `• *WhatsApp:* ${countryCode} ${phone}\n` +
        `• *Hair Loss Level:* Stage ${selectedNorwood} (${selectedGrafts})\n` +
        `• *Package Preference:* ${selectedPackage}\n` +
        `I would like to send my scalp photos for doctor evaluation.`
      );
      window.open(`https://wa.me/905070871789?text=${waMsg}`, '_blank');
    });
  };

  return (
    <section id="analysis-wizard" className="py-20 bg-[#EFE7D8]">
      <div className="wrap">
        
        {/* Section Head */}
        <div className="max-w-xl mb-10">
          <div className="eyebrow">{lang === 'tr' ? 'Ön Analiz' : 'Pre-Analysis'}</div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#17231C] mt-3.5 tracking-tight leading-snug">
            {t(lang as Lang, 'calculator.title')}
          </h2>
          <p className="text-[#4A5A4D] text-base mt-3.5 leading-relaxed">
            {t(lang as Lang, 'calculator.step3_title')}
          </p>
        </div>

        {/* Wizard Main Card */}
        <div className="bg-[#FBF8F1] border border-[rgba(23,35,28,0.12)] rounded-[4px] p-6 sm:p-10 shadow-xs max-w-4xl">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between border-b border-[rgba(23,35,28,0.12)] pb-4 mb-8">
            <div className="font-mono text-xs text-[#A9662F] font-semibold tracking-wider uppercase">
              {t(lang as Lang, 'calculator.step_label')} {step} {t(lang as Lang, 'calculator.of')} 3
            </div>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all ${
                    s === step
                      ? 'w-8 bg-[#A9662F]'
                      : s < step
                      ? 'w-4 bg-[#17231C]'
                      : 'w-4 bg-[rgba(23,35,28,0.12)]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* STEP 1: NORWOOD LEVEL SELECTION */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#17231C]">
                  {t(lang as Lang, 'calculator.step1')}
                </h3>
                <p className="text-xs text-[#4A5A4D] mt-1">
                  {t(lang as Lang, 'calculator.step1_desc')}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {NORWOOD_LEVELS.map((nl) => (
                  <button
                    key={nl.level}
                    type="button"
                    onClick={() => setSelectedNorwood(nl.level)}
                    className={`p-4 rounded-[4px] text-left transition-all cursor-pointer border ${
                      selectedNorwood === nl.level
                        ? 'border-[#A9662F] bg-[rgba(169,102,47,0.08)] shadow-xs'
                        : 'border-[rgba(23,35,28,0.12)] bg-white hover:border-[#17231C]/40'
                    }`}
                  >
                    <div className="font-mono text-xs font-semibold text-[#A9662F]">
                      {nl.title[lang as Lang] || nl.title['en']}
                    </div>
                    <div className="font-semibold text-sm text-[#17231C] mt-1">
                      {nl.desc[lang as Lang] || nl.desc['en']}
                    </div>
                    <div className="font-mono text-[11px] text-[#6E7F63] font-medium mt-2">
                      {nl.grafts}
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-stone-primary text-sm font-semibold px-8 py-3.5"
                >
                  <span>{t(lang as Lang, 'calculator.next')}</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PACKAGE PREFERENCE */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#17231C]">
                  {t(lang as Lang, 'calculator.step2')}
                </h3>
                <p className="text-xs text-[#4A5A4D] mt-1">
                  {t(lang as Lang, 'calculator.step2_desc')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Standard */}
                <div
                  onClick={() => setSelectedPackage('Standard DHI')}
                  className={`p-6 rounded-[4px] cursor-pointer border transition-all ${
                    selectedPackage === 'Standard DHI'
                      ? 'border-[#A9662F] bg-[rgba(169,102,47,0.08)] shadow-xs'
                      : 'border-[rgba(23,35,28,0.12)] bg-white hover:border-[#17231C]/40'
                  }`}
                >
                  <div className="font-mono text-xs text-[#A9662F] uppercase">Standard</div>
                  <h4 className="font-serif font-semibold text-lg text-[#17231C] mt-1">Standard DHI</h4>
                  <p className="text-xs text-[#4A5A4D] mt-1">
                    {lang === 'tr' ? 'Yalnızca cerrahi operasyon ve medikal bakım.' : 'Surgery-focused clinical package in licensed hospital.'}
                  </p>
                </div>

                {/* VIP */}
                <div
                  onClick={() => setSelectedPackage('VIP DHI Experience')}
                  className={`p-6 rounded-[4px] cursor-pointer border transition-all ${
                    selectedPackage === 'VIP DHI Experience'
                      ? 'border-[#A9662F] bg-[#17231C] text-[#EFE7D8] shadow-lg'
                      : 'border-[rgba(23,35,28,0.12)] bg-[#17231C]/90 text-[#EFE7D8] opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="font-mono text-xs text-[#D89A5D] uppercase">VIP Experience</div>
                  <h4 className="font-serif font-semibold text-lg text-[#EFE7D8] mt-1">VIP Antalya All-Inclusive</h4>
                  <p className="text-xs text-[#EFE7D8]/60 mt-1">
                    {lang === 'tr' ? '5★ Otel konaklaması, Mercedes Vito VIP transferleri dahil.' : '5★ Luxury hotel stay and private Mercedes Vito transfers included.'}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-stone-ghost text-xs font-semibold px-6 py-3"
                >
                  <span>{t(lang as Lang, 'calculator.back')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn-stone-primary text-sm font-semibold px-8 py-3.5"
                >
                  <span>{t(lang as Lang, 'calculator.next')}</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CONTACT FORM */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#17231C]">
                  {t(lang as Lang, 'calculator.step3')}
                </h3>
                <p className="text-xs text-[#4A5A4D] mt-1">
                  {t(lang as Lang, 'calculator.step3_title')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#17231C] mb-1.5">
                    {t(lang as Lang, 'calculator.name_label')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t(lang as Lang, 'calculator.name_placeholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-[rgba(23,35,28,0.18)] text-[#17231C] min-h-[46px] px-4 rounded-[2px] text-xs outline-none focus:border-[#A9662F] font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17231C] mb-1.5">
                    {t(lang as Lang, 'calculator.phone_label')}
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={handleCountryChange}
                      className="bg-white border border-[rgba(23,35,28,0.18)] text-[#17231C] min-h-[46px] px-3 rounded-[2px] text-xs outline-none focus:border-[#A9662F] font-mono"
                    >
                      {COUNTRIES.map(c => (
                        <option key={c.code} value={c.code}>{c.code} {c.name}</option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      required
                      placeholder={t(lang as Lang, 'calculator.phone_placeholder')}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="flex-1 bg-white border border-[rgba(23,35,28,0.18)] text-[#17231C] min-h-[46px] px-4 rounded-[2px] text-xs outline-none focus:border-[#A9662F] font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-[rgba(169,102,47,0.06)] border border-[rgba(169,102,47,0.2)] rounded-[2px] text-xs text-[#17231C]">
                {t(lang as Lang, 'calculator.wa_info')}
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-stone-ghost text-xs font-semibold px-6 py-3"
                >
                  <span>{t(lang as Lang, 'calculator.back')}</span>
                </button>
                <button
                  type="submit"
                  disabled={isPending || !name || !phone}
                  className="btn-bronze text-sm font-semibold px-8 py-3.5 !text-[#17231C] disabled:opacity-50"
                >
                  <span>{t(lang as Lang, 'calculator.submit')}</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
