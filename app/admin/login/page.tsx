'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('admin@antalyadhi.com');
  const [password, setPassword] = useState('dhi2026');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@antalyadhi.com' && password === 'dhi2026') {
      router.push('/admin/dashboard');
    } else {
      alert('Incorrect email or password.');
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center font-black text-xl text-slate-900 mx-auto shadow-md">
            DHI
          </div>
          <h1 className="text-2xl font-black text-white">Admin Panel Login</h1>
          <p className="text-xs text-slate-400">Manage leads, update prices, and upload media.</p>
        </div>

        <div className="bg-amber-900/30 border border-amber-700/40 p-4 rounded-2xl text-xs space-y-1">
          <div className="font-extrabold text-amber-300">Test Credentials:</div>
          <div>Email: <code className="bg-slate-900 px-2 py-0.5 rounded text-amber-200">admin@antalyadhi.com</code></div>
          <div>Password: <code className="bg-slate-900 px-2 py-0.5 rounded text-amber-200">dhi2026</code></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-amber-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-black py-4 rounded-xl text-sm transition-all shadow-md cursor-pointer"
          >
            Enter Dashboard
          </button>
        </form>

        <div className="text-center pt-2">
          <a href="/" className="text-xs text-slate-500 hover:text-slate-400 font-bold">Back to Website</a>
        </div>
      </div>
    </main>
  );
}
