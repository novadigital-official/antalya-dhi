'use client';

import { useState } from 'react';
import { useSiteContext } from '@/lib/context';

export default function FaqSection() {
  const { lang } = useSiteContext();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = lang === 'tr' ? [
    {
      q: "Antalya'da DHI saç ekimi fiyatları ne kadar?",
      a: "Antalya'da DHI saç ekimi paket fiyatları 90.000 TL (Standart DHI) ile 110.000 TL (VIP Antalya Experience) arasında değişmektedir. Paketlerimize DHI ameliyatı, ağrısız anestezi, ilaç seti, VIP Mercedes transfer ve otel konaklaması dahildir."
    },
    {
      q: "DHI ve FUE saç ekimi arasındaki fark nedir?",
      a: "DHI (Direct Hair Implantation) yönteminde Choi Implanter Pen kullanılarak kanal açma ve greft yerleştirme aşamaları aynı anda yapılır. FUE'de ise önce neşter veya safirle kanallar açılır. DHI daha sık ekim, doğal açı kontrolü ve tıraşsız uygulama olanağı sağlar."
    },
    {
      q: "DHI saç ekiminde ekim yapılacak alanın tıraş edilmesi zorunlu mu?",
      a: "Hayır. DHI Choi Pen kalem teknolojisi sayesinde ekim yapılacak alandaki mevcut saçlar tıraş edilmeden aralara doğrudan ekim yapılabilir."
    },
    {
      q: "VIP Antalya Experience paketine neler dahildir?",
      a: "VIP paketimizde maksimum greft DHI saç ekim operasyonu, Antalya Havalimanı & klinik VIP Mercedes Vito transferleri, 1 gece otel konaklaması, çok dilli hasta koordinatörü (EN/FR/TR), PRP & mezoterapi seansı ve aktif WhatsApp destek hattı yer almaktadır."
    },
    {
      q: "DHI saç ekimi sonrası iyileşme süresi kaç gündür?",
      a: "DHI yönteminde neşter veya kesi yapılmadığı için doku tahribatı minimumdur. Kabuklanma 7-10 gün içinde dökülür ve hastalar 3-5 gün içinde normal günlük ve iş hayatlarına dönebilirler."
    }
  ] : lang === 'fr' ? [
    {
      q: "Quel est le prix d'une greffe de cheveux DHI à Antalya ?",
      a: "Les prix des forfaits DHI à Antalya varient de 1 800€ (£1,550) pour le forfait Standard à 2 200€ (£1,900) pour l'expérience VIP All-Inclusive avec séjour en hôtel, transferts VIP en Mercedes et ligne WhatsApp active."
    },
    {
      q: "Quelle est la différence entre la méthode DHI et FUE ?",
      a: "La technique DHI utilise le Choi Implanter Pen pour implanter directement les greffons sans créer au préalable d'incisions. La méthode FUE nécessite une ouverture préalable des canaux. La DHI offre une plus grande densité et une récupération plus rapide."
    },
    {
      q: "Le rasage est-il obligatoire pour une greffe DHI ?",
      a: "Non, la technique DHI permet d'implanter les greffons entre vos cheveux existants sans raser l'ensemble du cuir chevelu."
    },
    {
      q: "Que comprend le forfait VIP Antalya Experience ?",
      a: "Le forfait VIP comprend l'opération DHI avec greffons maximaux, les transferts VIP en Mercedes Vito, 1 nuit d'hôtel, un coordinateur multilingue et une ligne WhatsApp active pour vos questions."
    },
    {
      q: "Quel est le temps de récupération après une greffe DHI ?",
      a: "Grâce à l'absence de scalpel, la cicatrisation est très rapide. Vous pouvez reprendre vos activités normales en 3 à 5 jours."
    }
  ] : [
    {
      q: "How much does a DHI hair transplant cost in Antalya, Turkey?",
      a: "DHI hair transplant packages in Antalya range from £1,550 (€1,800) for Standard DHI to £1,900 (€2,200) for the VIP Antalya Experience. The VIP package includes hotel accommodation, VIP Mercedes Vito transfers, and an active WhatsApp support line."
    },
    {
      q: "What is the difference between DHI and FUE hair transplant?",
      a: "DHI (Direct Hair Implantation) uses a specialized Choi Implanter Pen to extract and insert hair follicles simultaneously without making prior channel incisions. FUE requires separate channel incisions before placement. DHI allows higher density and faster healing."
    },
    {
      q: "Is it necessary to shave my head for a DHI procedure?",
      a: "No. DHI Choi Pen technology allows direct implantation between existing hair follicles without completely shaving the recipient area."
    },
    {
      q: "What is included in the VIP Antalya Experience package?",
      a: "The VIP package includes maximum graft DHI surgery, private Mercedes Vito airport & clinic transfers, 1-night hotel accommodation, a multilingual patient coordinator (EN/FR/TR), and an active WhatsApp support line for any questions."
    },
    {
      q: "How long is the recovery time after DHI hair transplant?",
      a: "Because DHI involves no scalpels or stitches, micro-wounds heal rapidly. Scabs fall off within 7-10 days, and patients return to normal daily routines in 3-5 days."
    }
  ];

  return (
    <div id="faq" className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 uppercase tracking-wider">
          AI SEARCH & PATIENT Q&A
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          {lang === 'tr' ? "Sıkça Sorulan Sorular & DHI Rehberi" : lang === 'fr' ? "Foire Aux Questions & Guide DHI" : "Frequently Asked Questions & DHI Guide"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {lang === 'tr' ? "Antalya DHI saç ekimi ve sağlık turizmi süreci hakkında merak edilen tüm sorular." : "Everything you need to know about DHI hair restoration and medical stay in Antalya."}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full p-5 text-left font-black text-sm text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 min-h-[52px]"
            >
              <span>{faq.q}</span>
              <span className="text-blue-600 font-black text-lg transition-transform" style={{ transform: openIndex === idx ? 'rotate(180deg)' : 'none' }}>
                ▼
              </span>
            </button>

            {openIndex === idx && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 bg-slate-50/50">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
