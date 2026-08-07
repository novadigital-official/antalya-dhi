'use client';

import React, { useState, useEffect } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

export default function LiveUrgencyBadge() {
  const { lang } = useSiteContext();

  const [msgIndex, setMsgIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const messages = [
    t(lang as Lang, 'social.live_badge_1') || '3 patients from UK/France booked today',
    t(lang as Lang, 'social.live_badge_2') || 'Dr. Mehmet is reviewing 2 new consultations now',
    t(lang as Lang, 'social.live_badge_3') || 'Next available VIP slot: This Thursday',
  ];

  useEffect(() => {
    if (!mounted) return;
    
    const timer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [messages.length, mounted]);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm animate-in fade-in duration-500 mb-4">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
      </span>
      <span className="text-xs font-bold text-slate-700 transition-opacity duration-300" key={msgIndex}>
        {messages[msgIndex]}
      </span>
    </div>
  );
}
