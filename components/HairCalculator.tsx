'use client';

import React, { useState } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

const NORWOOD_LEVELS = [
  { level: 1, desc: 'Minimal', grafts: '1,000-1,500' },
  { level: 2, desc: 'Slight', grafts: '1,500-2,000' },
  { level: 3, desc: 'Moderate', grafts: '2,000-2,500' },
  { level: 4, desc: 'Moderate-Advanced', grafts: '2,500-3,000' },
  { level: 5, desc: 'Advanced', grafts: '3,000-3,500' },
  { level: 6, desc: 'Severe', grafts: '3,500-4,500' },
  { level: 7, desc: 'Very Severe', grafts: '4,500-5,500' },
];

const COUNTRY_CODES = [
  { code: '+44', label: 'UK' },
  { code: '+33', label: 'France' },
  { code: '+90', label: 'Turkey' },
  { code: '+1', label: 'USA' },
  { code: '+49', label: 'Germany' },
  { code: '+31', label: 'Netherlands' },
];

export default function HairCalculator() {
  const { lang } = useSiteContext();

  
  const [step, setStep] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<'standard' | 'vip' | null>(null);
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+44');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    const message = `Hello! I used the Hair Calculator.\nName: ${name}\nNorwood Level: ${selectedLevel}\nPackage Interest: ${selectedPackage}\nPhone: ${countryCode}${phone}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/905551234567?text=${encodedMessage}`, '_blank');
  };

  return (
    <div id="calculator" className="w-full max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-xl p-6 md:p-10 min-h-[500px] flex flex-col my-16">
      {/* Progress Bar */}
      <div className="flex items-center justify-center mb-10">
        {[1, 2, 3].map((s, idx) => (
          <React.Fragment key={s}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
              step === s ? 'bg-blue-600 text-white' : 
              step > s ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400'
            }`}>
              {s}
            </div>
            {idx < 2 && (
              <div className={`w-16 h-1 mx-2 rounded-full ${
                step > s ? 'bg-emerald-600' : 'bg-slate-100'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex-1">
        {step === 1 && (
          <div className="animate-in fade-in duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              {t(lang as Lang, 'calculator.step1')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {NORWOOD_LEVELS.map((nl) => (
                <div 
                  key={nl.level}
                  onClick={() => setSelectedLevel(nl.level)}
                  className={`border rounded-2xl p-3 cursor-pointer transition-all ${
                    selectedLevel === nl.level 
                      ? 'border-blue-600 bg-blue-50 shadow-sm' 
                      : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-black text-lg text-slate-900 mb-1">Level {nl.level}</div>
                  <div className="text-slate-600 text-sm mb-2">{nl.desc}</div>
                  <div className="text-emerald-600 font-bold text-sm">{nl.grafts} Grafts</div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button 
                onClick={() => setStep(2)}
                disabled={!selectedLevel}
                className="min-h-[48px] px-8 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              {t(lang as Lang, 'calculator.step2')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div 
                onClick={() => setSelectedPackage('standard')}
                className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${
                  selectedPackage === 'standard'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                <h4 className="text-xl font-bold text-slate-900 mb-2">Standard DHI</h4>
                <p className="text-slate-600 text-sm">Essential medical care and successful transplantation.</p>
              </div>
              <div 
                onClick={() => setSelectedPackage('vip')}
                className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${
                  selectedPackage === 'vip'
                    ? 'border-blue-600 bg-slate-900 text-white'
                    : 'border-slate-200 bg-slate-900 text-white opacity-80 hover:opacity-100'
                }`}
              >
                <h4 className="text-xl font-bold text-amber-400 mb-2">VIP All-Inclusive</h4>
                <p className="text-slate-300 text-sm">Premium hotel, luxury transfers, and priority care.</p>
              </div>
            </div>
            <div className="flex justify-between">
              <button 
                onClick={() => setStep(1)}
                className="min-h-[48px] px-8 border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors"
              >
                Back
              </button>
              <button 
                onClick={() => setStep(3)}
                disabled={!selectedPackage}
                className="min-h-[48px] px-8 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in duration-500 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              {t(lang as Lang, 'calculator.step3_title')}
            </h3>
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t(lang as Lang, 'calculator.name_placeholder') || "John Doe"}
                  className="w-full min-h-[48px] px-4 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">WhatsApp Number</label>
                <div className="flex gap-2">
                  <select 
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="min-h-[48px] px-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none bg-white"
                  >
                    {COUNTRY_CODES.map(c => (
                      <option key={c.code} value={c.code}>{c.code} {c.label}</option>
                    ))}
                  </select>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="555 123 4567"
                    className="flex-1 min-h-[48px] px-4 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <button 
                onClick={() => setStep(2)}
                className="min-h-[48px] px-6 border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors"
              >
                Back
              </button>
              <button 
                onClick={handleSubmit}
                disabled={!name || !phone}
                className="flex-1 min-h-[48px] bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-700 disabled:opacity-50 transition-colors flex items-center justify-center"
              >
                {t(lang as Lang, 'calculator.submit')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
