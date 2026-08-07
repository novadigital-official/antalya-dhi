'use client';

import React, { useState } from 'react';

interface PatientLead {
  id: string;
  name: string;
  phone: string;
  country: string;
  language: string;
  package: string;
  norwood: string;
  date: string;
  status: 'New Lead' | 'Contacted' | 'Offer Sent' | 'Booked';
}

const INITIAL_LEADS: PatientLead[] = [
  { id: '1', name: 'James Wilson', phone: '+447891234567', country: 'United Kingdom', language: 'EN', package: 'VIP DHI Experience', norwood: 'Stage 4 (2,500 - 3,200 Grafts)', date: 'Today 14:20', status: 'New Lead' },
  { id: '2', name: 'Antoine Dubois', phone: '+33612345678', country: 'France', language: 'FR', package: 'VIP DHI Experience', norwood: 'Stage 5 (3,200 - 4,000 Grafts)', date: 'Today 11:15', status: 'Contacted' },
  { id: '3', name: 'Emre Kaya', phone: '+905321234567', country: 'Turkey', language: 'TR', package: 'Standard DHI', norwood: 'Stage 3 (2,000 - 2,500 Grafts)', date: 'Yesterday', status: 'Offer Sent' },
  { id: '4', name: 'Michael Brown', phone: '+447456789012', country: 'United Kingdom', language: 'EN', package: 'VIP DHI Experience', norwood: 'Stage 6 (4,000 - 4,500 Grafts)', date: '2 Days Ago', status: 'Booked' },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'leads' | 'prices' | 'media' | 'content'>('leads');
  const [leads, setLeads] = useState<PatientLead[]>(INITIAL_LEADS);

  const [prices, setPrices] = useState({
    standard: { GBP: 1550, EUR: 1800, USD: 2000, TRY: 90000 },
    vip: { GBP: 1900, EUR: 2200, USD: 2400, TRY: 110000 }
  });

  const [clinicRef, setClinicRef] = useState('AK-84920');
  const [clinicName, setClinicName] = useState('T.C. Sağlık Bakanlığı Onaylı Anlaşmalı Klinik');
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleStatusChange = (id: string, newStatus: PatientLead['status']) => {
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const newUrl = URL.createObjectURL(file);
      setUploadedFiles([newUrl, ...uploadedFiles]);
    }
  };

  const statusColor = (s: PatientLead['status']) => {
    if (s === 'New Lead') return 'bg-red-50 border-red-200';
    if (s === 'Contacted') return 'bg-amber-50 border-amber-200';
    if (s === 'Offer Sent') return 'bg-blue-50 border-blue-200';
    return 'bg-emerald-50 border-emerald-200';
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* HEADER */}
        <header className="bg-slate-900 text-white p-6 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
          <div>
            <span className="text-[11px] font-black text-amber-400 uppercase tracking-widest block mb-1">
              NO-CODE VISUAL CMS
            </span>
            <h1 className="text-2xl font-black text-white">
              Antalya DHI — Patient Lead & Content Manager
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1.5 rounded-full font-extrabold">
              Active: admin@antalyadhi.com
            </span>
            <a href="/" className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl border border-slate-700">
              Website
            </a>
          </div>
        </header>

        {/* TABS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(['leads', 'prices', 'media', 'content'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-3 rounded-2xl font-black text-xs sm:text-sm border transition-all cursor-pointer text-center ${
                activeTab === tab
                  ? 'bg-amber-500 text-slate-900 border-amber-500 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              {tab === 'leads' && `Leads (${leads.length})`}
              {tab === 'prices' && 'Package Prices'}
              {tab === 'media' && `Media Gallery (${uploadedFiles.length})`}
              {tab === 'content' && 'Clinic Info'}
            </button>
          ))}
        </div>

        {/* TAB 1: PATIENT LEADS KANBAN */}
        {activeTab === 'leads' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <h2 className="text-lg font-black text-slate-900">Patient Inquiry Kanban</h2>
              <span className="text-xs text-slate-500 font-bold">One-click WhatsApp client contact</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {leads.map((lead) => (
                <div key={lead.id} className={`p-5 rounded-2xl border transition-all space-y-3 ${statusColor(lead.status)}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-black text-base text-slate-900 block">{lead.name}</span>
                      <span className="text-xs text-slate-500 font-medium">{lead.country} | Language: {lead.language}</span>
                    </div>
                    <select
                      value={lead.status}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value as any)}
                      className="bg-white border border-slate-300 text-slate-900 font-extrabold text-xs rounded-xl px-3 py-1.5 outline-none"
                    >
                      <option value="New Lead">🔴 New Lead</option>
                      <option value="Contacted">🟡 Contacted</option>
                      <option value="Offer Sent">🔵 Offer Sent</option>
                      <option value="Booked">🟢 Booked</option>
                    </select>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1">
                    <div><strong>Hair Stage:</strong> {lead.norwood}</div>
                    <div><strong>Selected Package:</strong> {lead.package}</div>
                    <div><strong>Phone:</strong> {lead.phone}</div>
                    <div><strong>Inquiry Date:</strong> {lead.date}</div>
                  </div>

                  <a
                    href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${lead.name}, thank you for requesting a DHI Hair Analysis with Antalya DHI. I'm your patient coordinator and I'd like to share your customized plan.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm cursor-pointer transition-transform active:scale-95"
                  >
                    <span>💬 WhatsApp Patient ({lead.phone})</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: PACKAGE PRICES */}
        {activeTab === 'prices' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg font-black text-slate-900 mb-1">Update Package Prices</h2>
              <p className="text-xs text-slate-500">Edit rates across currencies. Standard (90k TL) & VIP (110k TL).</p>
            </div>

            {/* Standard DHI Prices */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-slate-900">Standard DHI Package</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(Object.keys(prices.standard) as Array<keyof typeof prices.standard>).map(cur => (
                  <div key={cur} className="bg-slate-50 border border-slate-200 p-3 rounded-2xl">
                    <span className="text-xs font-bold text-slate-500 block mb-1">{cur} Rate</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-black">{cur === 'GBP' ? '£' : cur === 'EUR' ? '€' : cur === 'USD' ? '$' : '₺'}</span>
                      <input
                        type="number"
                        value={prices.standard[cur]}
                        onChange={e => setPrices({...prices, standard: {...prices.standard, [cur]: Number(e.target.value)}})}
                        className="w-full bg-white border border-slate-300 font-black text-slate-900 px-2 py-1.5 rounded-lg text-sm outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* VIP Prices */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-slate-900">VIP DHI Experience</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(Object.keys(prices.vip) as Array<keyof typeof prices.vip>).map(cur => (
                  <div key={cur} className="bg-slate-50 border border-slate-200 p-3 rounded-2xl">
                    <span className="text-xs font-bold text-slate-500 block mb-1">{cur} Rate</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-black">{cur === 'GBP' ? '£' : cur === 'EUR' ? '€' : cur === 'USD' ? '$' : '₺'}</span>
                      <input
                        type="number"
                        value={prices.vip[cur]}
                        onChange={e => setPrices({...prices, vip: {...prices.vip, [cur]: Number(e.target.value)}})}
                        className="w-full bg-white border border-slate-300 font-black text-slate-900 px-2 py-1.5 rounded-lg text-sm outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => alert('Prices updated successfully!')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs py-3.5 px-6 rounded-xl cursor-pointer shadow-md"
            >
              Save & Publish Rates
            </button>
          </div>
        )}

        {/* TAB 3: MEDIA GALLERY */}
        {activeTab === 'media' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg font-black text-slate-900 mb-1">Clinic & Transfer Photo Gallery</h2>
              <p className="text-xs text-slate-500">Drag and drop clinic environment & VIP transfer photos here.</p>
            </div>

            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-3xl p-10 text-center transition-all cursor-pointer ${
                dragOver ? 'border-amber-500 bg-amber-50/50 scale-[1.01]' : 'border-slate-300 bg-slate-50 hover:border-slate-400'
              }`}
            >
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-3 font-black">
                📁
              </div>
              <h4 className="text-sm font-black text-slate-900 mb-1">Drop Clinic / Transfer Photos Here</h4>
              <p className="text-xs text-slate-500 mb-4">or click to choose files from device</p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const newUrl = URL.createObjectURL(e.target.files[0]);
                    setUploadedFiles([newUrl, ...uploadedFiles]);
                  }
                }}
                className="hidden"
                id="fileInput"
              />
              <label htmlFor="fileInput" className="inline-block bg-slate-900 text-white font-black text-xs px-5 py-3 rounded-xl cursor-pointer shadow-sm hover:bg-slate-800">
                Select Photo
              </label>
            </div>

            {uploadedFiles.length > 0 && (
              <div>
                <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3">
                  Uploaded Media ({uploadedFiles.length})
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {uploadedFiles.map((url, idx) => (
                    <div key={idx} className="relative group rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-32">
                      <img src={url} alt={`Media ${idx}`} className="w-full h-full object-cover" />
                      <button
                        onClick={() => setUploadedFiles(uploadedFiles.filter((_, i) => i !== idx))}
                        className="absolute top-1.5 right-1.5 bg-red-600 text-white w-6 h-6 rounded-full text-xs font-black opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer shadow"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: CLINIC INFO & LEGAL SETTINGS */}
        {activeTab === 'content' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg font-black text-slate-900 mb-1">Health Ministry & Partner Clinic Settings</h2>
              <p className="text-xs text-slate-500">Update legal authorization code and clinic name instantly.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">Partner Clinic Name</label>
                <input
                  type="text"
                  value={clinicName}
                  onChange={e => setClinicName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 font-bold text-slate-900 px-4 py-3 rounded-xl text-xs outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">Health Ministry Authorization Ref Code</label>
                <input
                  type="text"
                  value={clinicRef}
                  onChange={e => setClinicRef(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 font-bold text-slate-900 px-4 py-3 rounded-xl text-xs outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <button
              onClick={() => alert('Clinic info saved!')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs py-3.5 px-6 rounded-xl cursor-pointer shadow-md"
            >
              Save Legal Details
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
