'use client';

import { useState } from 'react';
import { useSiteContext } from '@/lib/context';

export default function FaqSection() {
  const { lang } = useSiteContext();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = lang === 'tr' ? [
    {
      q: "Antalya'da DHI saç ekimi paket fiyatları ne kadar?",
      a: "Antalya'da DHI saç ekimi paket fiyatları 90.000 TL (Standart DHI) ile 110.000 TL (VIP Her Şey Dahil) arasında değişmektedir. Paketlerimize DHI ameliyatı, konforlu anestezi, ilaç ve bakım kiti, VIP havalimanı transferi ve otel konaklaması dahildir."
    },
    {
      q: "DHI ve Klasik FUE saç ekimi arasındaki temel fark nedir?",
      a: "DHI (Direct Hair Implantation) yönteminde Choi Implanter Pen kullanılarak kanal açma ve greft yerleştirme adımları eşzamanlı gerçekleştirilir. Klasik FUE'de ise önce kanallar açılır. DHI daha sık ekim, doğal açı kontrolü ve tıraşsız uygulama imkânı sunar."
    },
    {
      q: "DHI saç ekiminde ekim yapılacak alanın tıraş edilmesi zorunlu mu?",
      a: "Hayır. DHI Choi Pen implanter teknolojisi sayesinde mevcut saçların arasına doğrudan giriş yapılabildiğinden alıcı alanın tamamen tıraş edilmesine gerek kalmaz."
    },
    {
      q: "VIP Her Şey Dahil paketine neler dahildir?",
      a: "VIP paketimizde maksimum greft DHI saç ekim operasyonu, Antalya Havalimanı & klinik Mercedes Vito transferleri, otel konaklaması, çok dilli hasta koordinatörü (EN/FR/TR) ve 12 aylık medikal takip yer almaktadır."
    },
    {
      q: "DHI saç ekimi sonrası iyileşme süreci nasıldır?",
      a: "DHI yönteminde mikroskobik uçlar kullanıldığı için doku hassasiyeti asgari düzeydedir. Mikro kabuklanmalar 7–10 gün içinde dökülür ve hastalar genellikle 3–5 gün içinde normal rutinlerine dönebilirler."
    }
  ] : lang === 'fr' ? [
    {
      q: "Quel est le tarif d'une greffe de cheveux DHI à Antalya ?",
      a: "Les forfaits DHI à Antalya s'échelonnent de 1 800€ (£1,550) pour le forfait Standard à 2 200€ (£1,900) pour l'expérience VIP All-Inclusive incluant séjour à l'hôtel, transferts privés en Mercedes Vito et coordination multilingue."
    },
    {
      q: "Quelle est la différence entre la méthode DHI et la FUE classique ?",
      a: "La technique DHI utilise le stylo d'implantation Choi pour insérer directement les greffons sans incision préalable. Elle offre une densité accrue et une convalescence plus rapide."
    },
    {
      q: "Le rasage est-il obligatoire pour une greffe DHI ?",
      a: "Non, la technique DHI permet d'implanter les greffons entre vos cheveux existants sans raser l'ensemble de la zone receveuse."
    },
    {
      q: "Que comprend le forfait VIP All-Inclusive ?",
      a: "Le forfait VIP comprend l'intervention DHI, les transferts privés en Mercedes Vito, l'hébergement hôtelier, un coordinateur multilingue et le protocole de suivi post-opératoire sur 12 mois."
    },
    {
      q: "Quel est le délai de récupération après une intervention DHI ?",
      a: "Grâce aux micro-aiguilles Choi, la cicatrisation est rapide. Les croûtes disparaissent en 7 à 10 jours et la reprise des activités est possible en 3 à 5 jours."
    }
  ] : [
    {
      q: "How much does a DHI hair transplant cost in Antalya, Turkey?",
      a: "DHI hair transplant packages in Antalya range from £1,550 (€1,800) for Standard DHI to £1,900 (€2,200) for the VIP All-Inclusive package, which includes hotel stay, private Mercedes Vito transfers, and dedicated patient coordination."
    },
    {
      q: "What is the key difference between DHI and traditional FUE?",
      a: "DHI (Direct Hair Implantation) utilizes specialized Choi Implanter Pens to place follicles directly without pre-cutting channel incisions, allowing higher density, precise angle placement, and faster scalp recovery."
    },
    {
      q: "Is it required to shave my entire head for a DHI procedure?",
      a: "No. The Choi Pen technique enables direct placement between existing hairs without completely shaving the recipient area."
    },
    {
      q: "What is included in the VIP All-Inclusive package?",
      a: "The VIP package covers maximum-graft DHI surgery in a licensed hospital, private Mercedes Vito airport and hotel transfers, comfortable hotel accommodation, multilingual patient coordination, and 12-month post-op care."
    },
    {
      q: "What is the typical recovery timeline after DHI?",
      a: "Because Choi pens minimize epidermal trauma, micro-scabs naturally detach within 7–10 days, allowing most patients to resume normal daily activities within 3–5 days."
    }
  ];

  return (
    <div id="faq" className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          {lang === 'tr' ? "Sıkça Sorulan Sorular" : lang === 'fr' ? "Foire Aux Questions" : "Frequently Asked Questions"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {lang === 'tr' ? "Antalya DHI saç ekimi ve hasta koordinasyon süreci hakkında merak edilenler." : "Essential information regarding DHI procedures and patient coordination in Antalya."}
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
              className="w-full p-5 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 min-h-[52px]"
            >
              <span>{faq.q}</span>
              <svg 
                className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${openIndex === idx ? 'rotate-180 text-blue-600' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
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
