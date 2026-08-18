'use client';

import { useState, useEffect, useTransition } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { Sparkles, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';

const NORWOOD_LEVELS = [
  { level: 1, title: { en: 'Stage 1', fr: 'Stade 1', tr: 'Seviye 1' }, desc: { en: 'Minimal Hair Loss', fr: 'Chute Minimale', tr: 'Minimum Dökülme' }, grafts: '1,000 - 1,500 Grafts' },
  { level: 2, title: { en: 'Stage 2', fr: 'Stade 2', tr: 'Seviye 2' }, desc: { en: 'Slight Receding Temples', fr: 'Léger Recul Frontal', tr: 'Hafif Şakak Çekilmesi' }, grafts: '1,500 - 2,000 Grafts' },
  { level: 3, title: { en: 'Stage 3', fr: 'Stade 3', tr: 'Seviye 3' }, desc: { en: 'Receding Hairline', fr: 'Recul des Temples', tr: 'Belirgin Şakak Dökülmesi' }, grafts: '2,000 - 2,500 Grafts' },
  { level: 4, title: { en: 'Stage 4', fr: 'Stade 4', tr: 'Seviye 4' }, desc: { en: 'Crown & Temple Loss', fr: 'Sommet & Temples', tr: 'Tepe & Şakak Dökülmesi' }, grafts: '2,500 - 3,200 Grafts' },
  { level: 5, title: { en: 'Stage 5', fr: 'Stade 5', tr: 'Seviye 5' }, desc: { en: 'Advanced Crown Thinning', fr: 'Calvitie Avancée', tr: 'İleri Tepe Dökülmesi' }, grafts: '3,200 - 4,000 Grafts' },
  { level: 6, title: { en: 'Stage 6', fr: 'Stade 6', tr: 'Seviye 6' }, desc: { en: 'Severe Hair Loss', fr: 'Chute Sévère', tr: 'Şiddetli Saç Kaybı' }, grafts: '4,000 - 4,500 Grafts' },
  { level: 7, title: { en: 'Stage 7', fr: 'Stade 7', tr: 'Seviye 7' }, desc: { en: 'Extensive Loss', fr: 'Chute Très Étendue', tr: 'İleri Derece Donör İhtiyacı' }, grafts: '4,500+ Grafts' },
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
    <section id="analysis-wizard" className="py-14 sm:py-18 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'tr' ? 'Ücretsiz Doktor Değerlendirmesi' : 'Free Surgeon Evaluation'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            {t(lang as Lang, 'calculator.title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            {t(lang as Lang, 'calculator.step3_title')}
          </p>
        </div>

        {/* Wizard Main Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-sm max-w-4xl mx-auto">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div className="text-xs text-emerald-700 font-extrabold tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{t(lang as Lang, 'calculator.step_label')} {step} {t(lang as Lang, 'calculator.of')} 3</span>
            </div>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all ${
                    s === step
                      ? 'w-8 bg-emerald-600'
                      : s < step
                      ? 'w-4 bg-emerald-300'
                      : 'w-4 bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* STEP 1: NORWOOD LEVEL SELECTION */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  {t(lang as Lang, 'calculator.step1')}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t(lang as Lang, 'calculator.step1_desc')}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {NORWOOD_LEVELS.map((nl) => (
                  <button
                    key={nl.level}
                    type="button"
                    onClick={() => setSelectedNorwood(nl.level)}
                    className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border ${
                      selectedNorwood === nl.level
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-xs ring-1 ring-emerald-500'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="text-xs font-bold text-emerald-700">
                      {nl.title[lang as Lang] || nl.title['en']}
                    </div>
                    <div className="font-bold text-xs sm:text-sm text-slate-900 mt-0.5">
                      {nl.desc[lang as Lang] || nl.desc['en']}
                    </div>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-1.5">
                      {nl.grafts}
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-7 py-3 rounded-xl transition-all shadow-md shadow-emerald-600/20 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t(lang as Lang, 'calculator.next')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PACKAGE PREFERENCE */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  {t(lang as Lang, 'calculator.step2')}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t(lang as Lang, 'calculator.step2_desc')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Standard */}
                <div
                  onClick={() => setSelectedPackage('Standard DHI')}
                  className={`p-5 rounded-2xl cursor-pointer border transition-all ${
                    selectedPackage === 'Standard DHI'
                      ? 'border-emerald-600 bg-emerald-50/70 shadow-xs ring-1 ring-emerald-500'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="text-[11px] text-slate-500 uppercase font-bold">Standard</div>
                  <h4 className="font-heading font-bold text-base text-slate-900 mt-0.5">Standard DHI</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {lang === 'tr' ? 'Yalnızca cerrahi operasyon ve medikal bakım kiti.' : 'Surgery-focused clinical package in licensed hospital.'}
                  </p>
                </div>

                {/* VIP */}
                <div
                  onClick={() => setSelectedPackage('VIP DHI Experience')}
                  className={`p-5 rounded-2xl cursor-pointer border transition-all ${
                    selectedPackage === 'VIP DHI Experience'
                      ? 'border-emerald-600 bg-emerald-900 text-white shadow-md ring-1 ring-emerald-500'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className={`text-[11px] uppercase font-bold ${selectedPackage === 'VIP DHI Experience' ? 'text-amber-300' : 'text-emerald-700'}`}>VIP All-Inclusive</div>
                  <h4 className={`font-heading font-bold text-base mt-0.5 ${selectedPackage === 'VIP DHI Experience' ? 'text-white' : 'text-slate-900'}`}>VIP Antalya Experience</h4>
                  <p className={`text-xs mt-1 ${selectedPackage === 'VIP DHI Experience' ? 'text-emerald-100' : 'text-slate-600'}`}>
                    {lang === 'tr' ? '5★ Otel konaklaması, Mercedes Vito VIP transferleri dahil.' : '5★ Luxury hotel stay and private Mercedes Vito transfers included.'}
                  </p>
                </div>
              </div>

              <div className="pt-3 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-5 py-2.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t(lang as Lang, 'calculator.back')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-7 py-3 rounded-xl transition-all shadow-md shadow-emerald-600/20 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t(lang as Lang, 'calculator.next')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CONTACT FORM */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  {t(lang as Lang, 'calculator.step3')}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t(lang as Lang, 'calculator.step3_title')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t(lang as Lang, 'calculator.name_label')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t(lang as Lang, 'calculator.name_placeholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 min-h-[44px] px-3.5 rounded-xl text-xs outline-none focus:border-emerald-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t(lang as Lang, 'calculator.phone_label')}
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={handleCountryChange}
                      className="bg-slate-50 border border-slate-200 text-slate-900 min-h-[44px] px-2.5 rounded-xl text-xs outline-none focus:border-emerald-600 font-mono"
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
                      className="flex-1 bg-slate-50 border border-slate-200 text-slate-900 min-h-[44px] px-3.5 rounded-xl text-xs outline-none focus:border-emerald-600 font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t(lang as Lang, 'calculator.wa_info')}</span>
              </div>

              <div className="pt-3 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-5 py-2.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t(lang as Lang, 'calculator.back')}</span>
                </button>
                <button
                  type="submit"
                  disabled={isPending || !name || !phone}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold px-7 py-3 rounded-xl shadow-md shadow-emerald-600/30 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <span>{t(lang as Lang, 'calculator.submit')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
