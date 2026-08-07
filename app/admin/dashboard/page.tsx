'use client';

import React, { useState, useEffect } from 'react';
import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

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

const INITIAL_DEMO_LEADS: PatientLead[] = [
  { id: '101', name: 'James Wilson', phone: '+44 7891 234567', country: 'United Kingdom', language: 'EN', package: 'VIP DHI Experience', norwood: 'Stage 4 (2,500 - 3,200 Grafts)', date: 'Today 14:20', status: 'New Lead' },
  { id: '102', name: 'Antoine Dubois', phone: '+33 6 12 34 56 78', country: 'France', language: 'FR', package: 'VIP DHI Experience', norwood: 'Stage 5 (3,200 - 4,000 Grafts)', date: 'Today 11:15', status: 'Contacted' },
  { id: '103', name: 'Emre Kaya', phone: '+90 532 123 4567', country: 'Turkey', language: 'TR', package: 'Standard DHI', norwood: 'Stage 3 (2,000 - 2,500 Grafts)', date: 'Yesterday 18:45', status: 'Offer Sent' },
  { id: '104', name: 'Michael Brown', phone: '+44 7456 789012', country: 'United Kingdom', language: 'EN', package: 'VIP DHI Experience', norwood: 'Stage 6 (4,000 - 4,500 Grafts)', date: '2 Days Ago', status: 'Booked' },
];

export default function AdminDashboard() {
  const { lang, setLang } = useSiteContext();
  const [activeTab, setActiveTab] = useState<'leads' | 'prices' | 'media' | 'content'>('leads');
  const [leads, setLeads] = useState<PatientLead[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);

  // New Lead Form State
  const [newLeadName, setNewLeadName] = useState('');
  const [newLeadPhone, setNewLeadPhone] = useState('');
  const [newLeadCountry, setNewLeadCountry] = useState('United Kingdom');
  const [newLeadPackage, setNewLeadPackage] = useState('VIP DHI Experience');
  const [newLeadNorwood, setNewLeadNorwood] = useState('Stage 4 (2,500 - 3,200 Grafts)');

  const [prices, setPrices] = useState({
    standard: { GBP: 1550, EUR: 1800, USD: 2000, TRY: 90000 },
    vip: { GBP: 1900, EUR: 2200, USD: 2400, TRY: 110000 }
  });

  const [clinicRef, setClinicRef] = useState('AK-84920');
  const [clinicName, setClinicName] = useState('T.C. Sağlık Bakanlığı Onaylı Anlaşmalı Klinik');
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  // Load Real Leads from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('dhi_patient_leads');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setLeads(parsed);
          return;
        }
      }
    } catch {
      // Ignore storage errors
    }
    // Fallback to initial demo leads if empty
    setLeads(INITIAL_DEMO_LEADS);
  }, []);

  // Save Leads to LocalStorage whenever modified
  const updateAndSaveLeads = (newLeads: PatientLead[]) => {
    setLeads(newLeads);
    try {
      localStorage.setItem('dhi_patient_leads', JSON.stringify(newLeads));
    } catch {
      // Ignore storage errors
    }
  };

  const handleStatusChange = (id: string, newStatus: PatientLead['status']) => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    updateAndSaveLeads(updated);
  };

  const handleDeleteLead = (id: string) => {
    if (confirm(lang === 'tr' ? 'Bu hasta talebini silmek istediğinizden emin misiniz?' : lang === 'fr' ? 'Voulez-vous vraiment supprimer ce prospect ?' : 'Are you sure you want to delete this patient lead?')) {
      const updated = leads.filter(l => l.id !== id);
      updateAndSaveLeads(updated);
    }
  };

  const handleAddManualLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadName || !newLeadPhone) return;

    const created: PatientLead = {
      id: Date.now().toString(),
      name: newLeadName,
      phone: newLeadPhone,
      country: newLeadCountry,
      language: lang.toUpperCase(),
      package: newLeadPackage,
      norwood: newLeadNorwood,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' (' + new Date().toLocaleDateString() + ')',
      status: 'New Lead'
    };

    updateAndSaveLeads([created, ...leads]);
    setNewLeadName('');
    setNewLeadPhone('');
    setShowAddModal(false);
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Name', 'Phone', 'Country', 'Language', 'Package', 'Hair Stage', 'Date', 'Status'];
    const rows = leads.map(l => [l.id, `"${l.name}"`, `"${l.phone}"`, `"${l.country}"`, l.language, `"${l.package}"`, `"${l.norwood}"`, `"${l.date}"`, l.status]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `antalya_dhi_patient_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  // Translations
  const tTitle = { en: 'Antalya DHI — Patient Lead & Content Manager', fr: 'Antalya DHI — Gestionnaire de Prospects et Contenus', tr: 'Antalya DHI — Hasta Talepleri ve İçerik Yönetim Paneli' }[lang as Lang] || 'Antalya DHI — Patient Lead & Content Manager';
  const tabLeads = { en: `Leads (${leads.length})`, fr: `Prospects (${leads.length})`, tr: `Hasta Talepleri (${leads.length})` }[lang as Lang] || `Leads (${leads.length})`;
  const tabPrices = { en: 'Package Prices', fr: 'Prix des Forfaits', tr: 'Paket Fiyatları' }[lang as Lang] || 'Package Prices';
  const tabMedia = { en: `Media Gallery (${uploadedFiles.length})`, fr: `Galerie Médias (${uploadedFiles.length})`, tr: `Görsel Galerisi (${uploadedFiles.length})` }[lang as Lang] || `Media Gallery (${uploadedFiles.length})`;
  const tabContent = { en: 'Clinic Info', fr: 'Infos Clinique', tr: 'Klinik Bilgileri' }[lang as Lang] || 'Clinic Info';

  const statusColor = (s: PatientLead['status']) => {
    if (s === 'New Lead') return 'bg-red-50 border-red-200';
    if (s === 'Contacted') return 'bg-amber-50 border-amber-200';
    if (s === 'Offer Sent') return 'bg-blue-50 border-blue-200';
    return 'bg-emerald-50 border-emerald-200';
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* HEADER BAR */}
        <header className="bg-slate-900 border border-slate-800 text-white p-6 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-black text-blue-400 uppercase tracking-widest block">
                {lang === 'tr' ? 'CANLI YÖNETİM PANELİ (REAL DATA)' : lang === 'fr' ? 'PANNEAU EN DIRECT (REAL DATA)' : 'LIVE DASHBOARD (REAL DATA)'}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white">{tTitle}</h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
              <button onClick={() => setLang('en')} className={`px-2 py-1 rounded-lg ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>🇬🇧 EN</button>
              <button onClick={() => setLang('fr')} className={`px-2 py-1 rounded-lg ${lang === 'fr' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>🇫🇷 FR</button>
              <button onClick={() => setLang('tr')} className={`px-2 py-1 rounded-lg ${lang === 'tr' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>🇹🇷 TR</button>
            </div>

            <a href="/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl border border-blue-500 shadow-md">
              {lang === 'tr' ? 'Web Sitesine Git ↗' : lang === 'fr' ? 'Voir le Site ↗' : 'View Website ↗'}
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
                  ? 'bg-blue-600 text-white border-blue-500 shadow-lg'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab === 'leads' && tabLeads}
              {tab === 'prices' && tabPrices}
              {tab === 'media' && tabMedia}
              {tab === 'content' && tabContent}
            </button>
          ))}
        </div>

        {/* TAB 1: PATIENT LEADS KANBAN (REAL DATA) */}
        {activeTab === 'leads' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-800 gap-4">
              <div>
                <h2 className="text-lg font-black text-white">
                  {lang === 'tr' ? 'Gelen Hasta Talepleri (Gerçek Veri Akışı)' : lang === 'fr' ? 'Demandes de Patients (Données Réelles)' : 'Patient Inquiries (Live Real Data Flow)'}
                </h2>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  {lang === 'tr' ? 'Sitedeki saç analiz sihirbazından gönderilen tüm gerçek hasta başvuruları burada listelenir.' : lang === 'fr' ? 'Toutes les vraies demandes soumises via le formulaire sont répertoriées ici.' : 'All real patient inquiries submitted through the website hair wizard are listed here.'}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-black text-xs px-4 py-2.5 rounded-xl cursor-pointer shadow-md"
                >
                  {lang === 'tr' ? '+ Manuel Talebi Ekle' : lang === 'fr' ? '+ Ajouter Manuel' : '+ Add Manual Lead'}
                </button>
                <button
                  onClick={handleExportCSV}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer"
                >
                  {lang === 'tr' ? '📥 Excel / CSV İndir' : lang === 'fr' ? '📥 Exporter CSV' : '📥 Export CSV'}
                </button>
              </div>
            </div>

            {/* LEADS LIST / CARDS */}
            {leads.length === 0 ? (
              <div className="text-center py-12 space-y-3 bg-slate-950/50 rounded-2xl border border-slate-800/60 p-6">
                <div className="text-3xl">📋</div>
                <div className="text-sm font-black text-white">{lang === 'tr' ? 'Henüz Yeni Hasta Talebi Yok' : lang === 'fr' ? 'Aucune demande pour le moment' : 'No Patient Leads Yet'}</div>
                <p className="text-xs text-slate-400 max-w-md mx-auto">{lang === 'tr' ? 'Siteden form doldurulduğunda talepler anında bu panele düşecektir.' : lang === 'fr' ? 'Les demandes soumises apparaîtront ici.' : 'Submissions from the website wizard will appear here instantly.'}</p>
                <button onClick={() => updateAndSaveLeads(INITIAL_DEMO_LEADS)} className="bg-slate-800 text-blue-400 hover:text-white text-xs font-bold px-4 py-2 rounded-xl border border-slate-700">
                  {lang === 'tr' ? 'Demo Örnek Verilerini Yükle' : lang === 'fr' ? 'Charger les Données Démo' : 'Load Demo Sample Leads'}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {leads.map((lead) => (
                  <div key={lead.id} className={`p-5 rounded-2xl border transition-all space-y-3 bg-slate-950 border-slate-800 shadow-md`}>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <div>
                        <span className="font-black text-base text-white block">{lead.name}</span>
                        <span className="text-xs text-slate-400 font-medium">📍 {lead.country} | 🌐 Language: {lead.language}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as any)}
                          className="bg-slate-900 border border-slate-700 text-white font-extrabold text-xs rounded-xl px-3 py-1.5 outline-none cursor-pointer"
                        >
                          <option value="New Lead">🔴 {lang === 'tr' ? 'Yeni Talep' : lang === 'fr' ? 'Nouveau' : 'New Lead'}</option>
                          <option value="Contacted">🟡 {lang === 'tr' ? 'Görüşüldü' : lang === 'fr' ? 'Contacté' : 'Contacted'}</option>
                          <option value="Offer Sent">🔵 {lang === 'tr' ? 'Teklif Gönderildi' : lang === 'fr' ? 'Offre Envoyée' : 'Offer Sent'}</option>
                          <option value="Booked">🟢 {lang === 'tr' ? 'Randevu Alındı' : lang === 'fr' ? 'Réservé' : 'Booked'}</option>
                        </select>

                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="text-slate-500 hover:text-red-400 text-xs font-bold p-1 rounded-lg hover:bg-red-950/40"
                          title="Delete Lead"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>

                    <div className="text-xs text-slate-300 space-y-1 bg-slate-900/60 p-3 rounded-xl border border-slate-800/60">
                      <div><strong className="text-blue-400">{lang === 'tr' ? 'Saç Seviyesi:' : lang === 'fr' ? 'Stade Cheveux:' : 'Hair Stage:'}</strong> {lead.norwood}</div>
                      <div><strong className="text-emerald-400">{lang === 'tr' ? 'Paket Tercihi:' : lang === 'fr' ? 'Forfait Choisi:' : 'Selected Package:'}</strong> {lead.package}</div>
                      <div><strong className="text-slate-400">{lang === 'tr' ? 'Telefon:' : lang === 'fr' ? 'Téléphone:' : 'Phone:'}</strong> {lead.phone}</div>
                      <div><strong className="text-slate-400">{lang === 'tr' ? 'Başvuru Tarihi:' : lang === 'fr' ? 'Date Demande:' : 'Inquiry Date:'}</strong> {lead.date}</div>
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
            )}
          </div>
        )}

        {/* MODAL: ADD MANUAL LEAD */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="font-black text-white text-base">{lang === 'tr' ? 'Yeni Manuel Hasta Talebi Ekle' : lang === 'fr' ? 'Ajouter Nouveau Prospect' : 'Add New Patient Lead'}</h3>
                <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white font-black">✕</button>
              </div>

              <form onSubmit={handleAddManualLead} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">{lang === 'tr' ? 'Hasta Adı Soyadı' : lang === 'fr' ? 'Nom du Patient' : 'Patient Name'}</label>
                  <input
                    type="text"
                    value={newLeadName}
                    onChange={e => setNewLeadName(e.target.value)}
                    required
                    placeholder="e.g. David Smith"
                    className="w-full bg-slate-950 border border-slate-800 text-white px-3 py-2.5 rounded-xl text-xs outline-none focus:border-blue-500 font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">{lang === 'tr' ? 'Telefon (WhatsApp)' : lang === 'fr' ? 'Téléphone (WhatsApp)' : 'Phone (WhatsApp)'}</label>
                  <input
                    type="text"
                    value={newLeadPhone}
                    onChange={e => setNewLeadPhone(e.target.value)}
                    required
                    placeholder="+44 7891 234567"
                    className="w-full bg-slate-950 border border-slate-800 text-white px-3 py-2.5 rounded-xl text-xs outline-none focus:border-blue-500 font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">{lang === 'tr' ? 'Ülke' : lang === 'fr' ? 'Pays' : 'Country'}</label>
                  <input
                    type="text"
                    value={newLeadCountry}
                    onChange={e => setNewLeadCountry(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 text-white px-3 py-2.5 rounded-xl text-xs outline-none focus:border-blue-500 font-bold"
                  />
                </div>

                <div className="pt-2 flex gap-2">
                  <button type="button" onClick={() => setShowAddModal(false)} className="w-1/2 bg-slate-800 text-slate-300 font-bold text-xs py-3 rounded-xl">
                    {lang === 'tr' ? 'İptal' : lang === 'fr' ? 'Annuler' : 'Cancel'}
                  </button>
                  <button type="submit" className="w-1/2 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs py-3 rounded-xl shadow-md">
                    {lang === 'tr' ? 'Kaydet' : lang === 'fr' ? 'Enregistrer' : 'Save Lead'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* TAB 2: PACKAGE PRICES */}
        {activeTab === 'prices' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
            <div>
              <h2 className="text-lg font-black text-white mb-1">
                {lang === 'tr' ? 'Paket Fiyatlarını Güncelle' : lang === 'fr' ? 'Mettre à Jour les Prix' : 'Update Package Prices'}
              </h2>
              <p className="text-xs text-slate-400">Standard (90k TL) & VIP (110k TL).</p>
            </div>

            {/* Standard DHI Prices */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-blue-400">Standard DHI Package</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(Object.keys(prices.standard) as Array<keyof typeof prices.standard>).map(cur => (
                  <div key={cur} className="bg-slate-950 border border-slate-800 p-3 rounded-2xl">
                    <span className="text-xs font-bold text-slate-400 block mb-1">{cur} Rate</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-black text-white">{cur === 'GBP' ? '£' : cur === 'EUR' ? '€' : cur === 'USD' ? '$' : '₺'}</span>
                      <input
                        type="number"
                        value={prices.standard[cur]}
                        onChange={e => setPrices({...prices, standard: {...prices.standard, [cur]: Number(e.target.value)}})}
                        className="w-full bg-slate-900 border border-slate-700 font-black text-white px-2 py-1.5 rounded-lg text-sm outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* VIP Prices */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-emerald-400">VIP DHI Experience</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(Object.keys(prices.vip) as Array<keyof typeof prices.vip>).map(cur => (
                  <div key={cur} className="bg-slate-950 border border-slate-800 p-3 rounded-2xl">
                    <span className="text-xs font-bold text-slate-400 block mb-1">{cur} Rate</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-black text-white">{cur === 'GBP' ? '£' : cur === 'EUR' ? '€' : cur === 'USD' ? '$' : '₺'}</span>
                      <input
                        type="number"
                        value={prices.vip[cur]}
                        onChange={e => setPrices({...prices, vip: {...prices.vip, [cur]: Number(e.target.value)}})}
                        className="w-full bg-slate-900 border border-slate-700 font-black text-white px-2 py-1.5 rounded-lg text-sm outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => alert(lang === 'tr' ? 'Fiyatlar başarıyla güncellendi!' : lang === 'fr' ? 'Prix mis à jour !' : 'Prices updated successfully!')}
              className="bg-blue-600 hover:bg-blue-500 text-white font-black text-xs py-3.5 px-6 rounded-xl cursor-pointer shadow-md"
            >
              {lang === 'tr' ? 'Fiyatları Kaydet ve Yayınla' : lang === 'fr' ? 'Enregistrer et Publier' : 'Save & Publish Rates'}
            </button>
          </div>
        )}

        {/* TAB 3: MEDIA GALLERY */}
        {activeTab === 'media' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
            <div>
              <h2 className="text-lg font-black text-white mb-1">
                {lang === 'tr' ? 'Klinik ve VIP Transfer Fotoğraf Galerisi' : lang === 'fr' ? 'Galerie Photos Clinique & Transfert' : 'Clinic & Transfer Photo Gallery'}
              </h2>
              <p className="text-xs text-slate-400">Drag and drop clinic environment & VIP transfer photos here.</p>
            </div>

            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-3xl p-10 text-center transition-all cursor-pointer ${
                dragOver ? 'border-blue-500 bg-blue-950/40 scale-[1.01]' : 'border-slate-800 bg-slate-950 hover:border-slate-700'
              }`}
            >
              <div className="w-14 h-14 bg-blue-900/60 text-blue-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-3 font-black">
                📁
              </div>
              <h4 className="text-sm font-black text-white mb-1">
                {lang === 'tr' ? 'Fotoğrafları Buraya Sürükleyin' : lang === 'fr' ? 'Déposez les photos ici' : 'Drop Clinic / Transfer Photos Here'}
              </h4>
              <p className="text-xs text-slate-400 mb-4">or click to choose files from device</p>
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
              <label htmlFor="fileInput" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black text-xs px-5 py-3 rounded-xl cursor-pointer shadow-sm">
                Select Photo
              </label>
            </div>

            {uploadedFiles.length > 0 && (
              <div>
                <h3 className="text-xs font-black text-slate-300 uppercase tracking-wider mb-3">
                  Uploaded Media ({uploadedFiles.length})
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {uploadedFiles.map((url, idx) => (
                    <div key={idx} className="relative group rounded-2xl overflow-hidden border border-slate-800 shadow-sm h-32">
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
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
            <div>
              <h2 className="text-lg font-black text-white mb-1">
                {lang === 'tr' ? 'Sağlık Bakanlığı & Anlaşmalı Klinik Bilgileri' : lang === 'fr' ? 'Informations Légales & Clinique' : 'Health Ministry & Partner Clinic Settings'}
              </h2>
              <p className="text-xs text-slate-400">Update legal authorization code and clinic name instantly.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Partner Clinic Name</label>
                <input
                  type="text"
                  value={clinicName}
                  onChange={e => setClinicName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 font-bold text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Health Ministry Authorization Ref Code</label>
                <input
                  type="text"
                  value={clinicRef}
                  onChange={e => setClinicRef(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 font-bold text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <button
              onClick={() => alert(lang === 'tr' ? 'Klinik bilgileri kaydedildi!' : lang === 'fr' ? 'Infos enregistrées !' : 'Clinic info saved!')}
              className="bg-blue-600 hover:bg-blue-500 text-white font-black text-xs py-3.5 px-6 rounded-xl cursor-pointer shadow-md"
            >
              Save Legal Details
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
