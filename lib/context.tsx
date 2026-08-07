'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Lang } from './i18n';
import { Currency, getDefaultCurrency } from './currency';

interface SiteContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const [currency, setCurrency] = useState<Currency>(getDefaultCurrency());

  return (
    <SiteContext.Provider value={{ lang, setLang, currency, setCurrency }}>
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
