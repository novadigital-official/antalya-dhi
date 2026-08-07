'use client';

import { useState, useTransition } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

const NORWOOD_LEVELS = [
  { level: 1, title: 'Stage 1', desc: 'Minimal Hair Loss', grafts: '1,000 - 1,500 Grafts' },
  { level: 2, title: 'Stage 2', desc: 'Slight Receding Hairline', grafts: '1,500 - 2,000 Grafts' },
  { level: 3, title: 'Stage 3', desc: 'Receding Temple Area', grafts: '2,000 - 2,500 Grafts' },
  { level: 4, title: 'Stage 4', desc: 'Crown Thinning & Temples', grafts: '2,500 - 3,200 Grafts' },
  { level: 5, title: 'Stage 5', desc: 'Advanced Crown Thinning', grafts: '3,200 - 4,000 Grafts' },
  { level: 6, title: 'Stage 6', desc: 'Severe Hair Loss', grafts: '4,000 - 4,500 Grafts' },
  { level: 7, title: 'Stage 7', desc: 'Extensive Hair Loss', grafts: '4,500+ Grafts' },
];

const COUNTRIES = [
  { code: '+44', name: 'United Kingdom' },
  { code: '+33', name: 'France' },
  { code: '+90', name: 'Turkey' },
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
  const [countryCode, setCountryCode] = useState<string>('+44');
  const [countryName, setCountryName] = useState<string>('United Kingdom');
  const [phone, setPhone] = useState<string>('');
  const [isPending, startTransition] = useTransition();

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
      window.open(`https://wa.me/905551234567?text=${waMsg}`, '_blank');
    });
  };

  return (
    <div id="analysis-wizard" className="w-full max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl min-h-[520px] flex flex-col justify-between">
      <div>
        {/* Step Progress Bar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest block mb-1">
              STEP {step} OF 3
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {t(lang as Lang, 'calculator.title')}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-all ${
                  step === s
                    ? 'bg-blue-600 text-white shadow-md'
                    : step > s
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                {step > s ? '✓' : s}
              </div>
            ))}
          </div>
        </div>

        {/* STEP 1: NORWOOD HAIR LOSS STAGE */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-1">
                1. {t(lang as Lang, 'calculator.step1')}
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                Select the diagram level that closest resembles your current scalp hair loss.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {NORWOOD_LEVELS.map((n) => (
                <button
                  key={n.level}
                  type="button"
                  onClick={() => setSelectedNorwood(n.level)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer min-h-[90px] flex flex-col justify-between ${
                    selectedNorwood === n.level
                      ? 'border-blue-600 bg-blue-50/70 shadow-sm ring-2 ring-blue-600/20'
                      : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black text-sm text-slate-900">{n.title}</span>
                    {selectedNorwood === n.level && (
                      <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-black">✓</span>
                    )}
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">{n.desc}</span>
                    <span className="text-xs font-black text-blue-700 block mt-1">{n.grafts}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="min-h-[48px] px-8 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                Continue to Step 2 →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: PACKAGE PREFERENCE */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-1">
                2. {t(lang as Lang, 'calculator.step2')}
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                Choose the DHI package structure tailored for your medical stay.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Standard */}
              <button
                type="button"
                onClick={() => setSelectedPackage('Standard DHI')}
                className={`p-6 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  selectedPackage === 'Standard DHI'
                    ? 'border-blue-600 bg-blue-50/70 shadow-sm ring-2 ring-blue-600/20'
                    : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-black text-base text-slate-900">Standard DHI</span>
                  <span className="text-xs font-black text-slate-600">90.000 TL</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  DHI surgery, local anesthesia, post-op medication kit, and lifetime warranty certificate.
                </p>
              </button>

              {/* VIP Experience */}
              <button
                type="button"
                onClick={() => setSelectedPackage('VIP DHI Experience')}
                className={`p-6 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  selectedPackage === 'VIP DHI Experience'
                    ? 'border-amber-500 bg-slate-900 text-white shadow-md ring-2 ring-amber-500/40'
                    : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-black text-base text-amber-400">VIP DHI Experience</span>
                  <span className="text-xs font-black text-amber-400">110.000 TL</span>
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  Includes DHI surgery, VIP Mercedes Vito transfer, hotel stay, personal coordinator & 12-month growth follow-up.
                </p>
              </button>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="min-h-[48px] px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="min-h-[48px] px-8 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                Continue to Step 3 →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: CONTACT & WHATSAPP ANALYSIS */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
            <div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-1">
                3. {t(lang as Lang, 'calculator.step3')}
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                {t(lang as Lang, 'calculator.step3_title')}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  placeholder={t(lang as Lang, 'calculator.name_placeholder')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 min-h-[48px] px-4 rounded-xl text-xs outline-none focus:border-blue-600 font-semibold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">Country *</label>
                  <select
                    value={countryCode}
                    onChange={handleCountryChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 min-h-[48px] px-3 rounded-xl text-xs outline-none focus:border-blue-600 font-bold"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name} ({c.code})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">WhatsApp Phone Number *</label>
                  <div className="flex items-center gap-2">
                    <span className="min-h-[48px] px-3 bg-slate-100 border border-slate-200 rounded-xl text-xs font-black text-slate-700 flex items-center justify-center">
                      {countryCode}
                    </span>
                    <input
                      type="tel"
                      placeholder={t(lang as Lang, 'calculator.phone_placeholder')}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 min-h-[48px] px-4 rounded-xl text-xs outline-none focus:border-blue-600 font-semibold"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-2xl text-xs text-emerald-800 font-semibold flex items-center gap-2">
                <span className="text-emerald-600 font-black text-base">💬</span>
                <span>Send your scalp photos via WhatsApp for a direct doctor consultation & exact graft quote.</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="min-h-[48px] px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="min-h-[48px] px-8 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2 active:scale-98"
              >
                <span>{t(lang as Lang, 'calculator.submit')}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
