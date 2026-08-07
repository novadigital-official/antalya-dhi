'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Lang } from './i18n';
import { Currency } from './currency';

interface SiteContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  detectedCountry: string | null;
}

const langCurrencyMap: Record<Lang, Currency> = {
  en: 'GBP',
  fr: 'EUR',
  tr: 'TRY',
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [currency, setCurrency] = useState<Currency>('GBP');
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    setCurrency(langCurrencyMap[newLang] || 'GBP');
    try {
      localStorage.setItem('dhi_user_lang', newLang);
    } catch {
      // Ignore storage errors
    }
  };

  useEffect(() => {
    // 1. Check if user already manually selected a language
    try {
      const savedLang = localStorage.getItem('dhi_user_lang') as Lang;
      if (savedLang && ['en', 'fr', 'tr'].includes(savedLang)) {
        setLangState(savedLang);
        setCurrency(langCurrencyMap[savedLang] || 'GBP');
        return;
      }
    } catch {
      // Ignore storage errors
    }

    // 2. Fast Browser Language Detection
    if (typeof navigator !== 'undefined') {
      const navLang = (navigator.language || '').toLowerCase();
      if (navLang.startsWith('fr')) {
        setLangState('fr');
        setCurrency('EUR');
      } else if (navLang.startsWith('tr')) {
        setLangState('tr');
        setCurrency('TRY');
      } else if (navLang.startsWith('en')) {
        setLangState('en');
        setCurrency('GBP');
      }
    }

    // 3. Geo-IP Country Detection via Fast IP API
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code) {
          const country = String(data.country_code).toUpperCase();
          setDetectedCountry(country);

          // French Speaking Countries
          if (['FR', 'BE', 'CH', 'MC', 'LU', 'DZ', 'MA', 'TN'].includes(country)) {
            setLangState('fr');
            setCurrency('EUR');
          }
          // Turkey
          else if (country === 'TR') {
            setLangState('tr');
            setCurrency('TRY');
          }
          // UK & English Speaking Countries
          else if (['GB', 'UK', 'IE', 'US', 'CA', 'AU'].includes(country)) {
            setLangState('en');
            setCurrency('GBP');
          }
        }
      })
      .catch(() => {
        // Silently fall back to browser detection
      });
  }, []);

  return (
    <SiteContext.Provider value={{ lang, setLang, currency, setCurrency, detectedCountry }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteContext() {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSiteContext must be used within a SiteProvider');
  }
  return context;
}
