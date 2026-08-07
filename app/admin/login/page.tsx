'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('admin@antalyadhi.com');
  const [password, setPassword] = useState('dhi2026');
  const router = useRouter();
  const { lang, setLang } = useSiteContext();

  const title = {
    en: 'Admin Panel Login',
    fr: 'Connexion Panneau Admin',
    tr: 'Yönetim Paneli Girişi'
  }[lang as Lang] || 'Admin Panel Login';

  const subtitle = {
    en: 'Manage patient leads, update prices, and upload media.',
    fr: 'Gérer les prospects, mettre à jour les prix et les médias.',
    tr: 'Hasta taleplerini yönetin, paket fiyatlarını ve görselleri güncelleyin.'
  }[lang as Lang] || 'Manage patient leads, update prices, and upload media.';

  const emailLabel = { en: 'Email', fr: 'E-mail', tr: 'E-posta Adresi' }[lang as Lang] || 'Email';
  const passLabel = { en: 'Password', fr: 'Mot de passe', tr: 'Şifre' }[lang as Lang] || 'Password';
  const loginBtn = { en: 'Enter Dashboard', fr: 'Accéder au Tableau de Bord', tr: 'Yönetim Paneline Giriş Yap' }[lang as Lang] || 'Enter Dashboard';
  const backText = { en: '← Back to Website', fr: '← Retour au Site', tr: '← Web Sitesine Dön' }[lang as Lang] || '← Back to Website';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@antalyadhi.com' && password === 'dhi2026') {
      router.push('/admin/dashboard');
    } else {
      alert(lang === 'tr' ? 'Hatalı e-posta veya şifre.' : lang === 'fr' ? 'E-mail ou mot de passe incorrect.' : 'Incorrect email or password.');
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        
        {/* Language Selector Bar */}
        <div className="flex justify-end gap-2 text-xs font-bold">
          <button onClick={() => setLang('en')} className={`px-2.5 py-1 rounded-lg border ${lang === 'en' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>🇬🇧 EN</button>
          <button onClick={() => setLang('fr')} className={`px-2.5 py-1 rounded-lg border ${lang === 'fr' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>🇫🇷 FR</button>
          <button onClick={() => setLang('tr')} className={`px-2.5 py-1 rounded-lg border ${lang === 'tr' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>🇹🇷 TR</button>
        </div>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-xl text-white mx-auto shadow-md border border-blue-400/30">
            DHI
          </div>
          <h1 className="text-2xl font-black text-white">{title}</h1>
          <p className="text-xs text-slate-400">{subtitle}</p>
        </div>

        <div className="bg-blue-950/40 border border-blue-800/40 p-4 rounded-2xl text-xs space-y-1">
          <div className="font-extrabold text-blue-300">Test Credentials:</div>
          <div>Email: <code className="bg-slate-950 px-2 py-0.5 rounded text-blue-200">admin@antalyadhi.com</code></div>
          <div>Password: <code className="bg-slate-950 px-2 py-0.5 rounded text-blue-200">dhi2026</code></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">{emailLabel}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-800 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-blue-500 font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">{passLabel}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-800 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-blue-500 font-bold"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl text-sm transition-all shadow-md cursor-pointer"
          >
            {loginBtn}
          </button>
        </form>

        <div className="text-center pt-2">
          <a href="/" className="text-xs text-slate-400 hover:text-white font-bold">{backText}</a>
        </div>
      </div>
    </main>
  );
}
