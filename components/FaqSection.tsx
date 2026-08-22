'use client';

import { useState } from 'react';
import { useSiteContext } from '@/lib/context';
import { Sparkles, ChevronDown } from 'lucide-react';
import { Lang } from '@/lib/i18n';

export default function FaqSection() {
  const { lang } = useSiteContext();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = lang === 'tr' ? [
    {
      q: "Antalya'da DHI saç ekimi paket fiyatları ne kadar ve neler dahildir?",
      a: "Antalya DHI saç ekimi paketlerimiz 95.000 TL (Standart DHI) ile 115.000 TL (VIP Her Şey Dahil / £2,200) arasındadır. Paketlerimizde £0 ön ödeme güvencesi vardır; tüm ödemeyi klinikte doktor muayenesi ve kan tahlilleriniz sonrasında yaparsınız. VIP paketimizde steril hastanede maksimum greft DHI ameliyatı, iğnesiz konforlu anestezi, 5 yıldızlı otel konaklaması, havalimanı ve klinik Mercedes Vito VIP transferleri, PRP seansı, ilaç ve özel medikal bakım seti ile 12 aylık doktor takibi eksiksiz dahildir."
    },
    {
      q: "DHI (Choi Pen) ve Klasik FUE arasındaki temel klinik fark nedir?",
      a: "DHI tekniğinde Choi Implanter Pen kullanılarak kanal açma ve saç kökü yerleştirme işlemi eşzamanlı olarak tek bir mikroskobik hamlede gerçekleştirilir. Klasik FUE'de ise önce neşterle kanallar açılır. DHI yöntemi doku travmasını sıfıra indirir, cm² başına daha sık saç ekimine imkân tanır ve 360 derece doğal çıkış açısı kontrolü sağlar."
    },
    {
      q: "DHI saç ekiminde saçlarımı tamamen tıraş ettirmem gerekir mi?",
      a: "Hayır. DHI Choi Pen implanter teknolojisi sayesinde saç kökleri mevcut saç tellerinizin arasına doğrudan yerleştirilebilir. Bu sayede özellikle ön çizgi ve tepe bölgesinde mevcut saçlarınızı kesmeden tıraşsız saç ekimi yaptırabilirsiniz."
    },
    {
      q: "Operasyon sırasında veya anestezi aşamasında ağrı/acı hissedilir mi?",
      a: "Hayır. Operasyon öncesinde iğnesiz yüksek basınçlı püskürtme anestezi (ComfortIn) uygulanır. Geleneksel iğneli anestezinin yarattığı batma hissi yaşanmaz ve işlem tamamen konforlu şekilde tamamlanır."
    },
    {
      q: "Tek bir seansta en fazla kaç greft saç ekilebilir?",
      a: "Hastanın ense donör bölgesinin saç sıklığı ve kök kalitesine bağlı olarak tek bir DHI seansında güvenle 3.500 ila 4.800+ greft (yaklaşık 8.000 - 11.000 saç teli) transfer edilebilmektedir."
    },
    {
      q: "Şok dökülme evresi nedir ve yeni saçlarım ne zaman uzamaya başlar?",
      a: "Operasyondan sonraki 1. ve 2. aylar arasında ekilen saç tellerinin geçici olarak dökülmesi 'şok dökülme' olarak adlandırılır ve tamamen sağlıklı, doğal bir evredir. Canlı kökler deri altında sağlam kalır. 4. aydan itibaren kalıcı saçlar gözle görülür şekilde uzar, 6-8. ayda yoğunlaşır ve 12. ayda nihai saç yoğunluğuna ulaşılır."
    },
    {
      q: "Operasyondan kaç gün sonra uçağa binebilir ve işime dönebilirim?",
      a: "DHI yönteminde kesi veya dikiş olmadığı için iyileşme son derece hızlıdır. 3. gün klinikte yapılan ilk uzman saç yıkaması ve kontrolün ardından hastalarımız güvenle uçak yolculuğu yapabilir ve 3–5 gün içinde masa başı işlerine dönebilirler."
    },
    {
      q: "12 Aylık medikal takip ve garanti süreci nasıl işler?",
      a: "Operasyon tamamlandıktan sonra hastalarımıza ömür boyu kök tutunma sertifikası verilir. 1, 3, 6 ve 12. aylarda WhatsApp üzerinden uzman medikal ekibimiz tarafından saç gelişiminiz düzenli olarak değerlendirilir ve desteklenir."
    }
  ] : lang === 'fr' ? [
    {
      q: "Quel est le tarif d'une greffe DHI à Antalya et que comprend le forfait ?",
      a: "Nos forfaits DHI à Antalya s'échelonnent de 1 800€ (Standard) à 2 200€ (VIP Tout Compris). Le forfait VIP comprend l'intervention DHI avec nombre maximum de greffons en hôpital agréé, l'anesthésie sans aiguille, l'hébergement en hôtel 5 étoiles, tous les transferts privés en Mercedes Vito, la séance de PRP, le kit de soins médicaux et le suivi post-opératoire sur 12 mois."
    },
    {
      q: "Quelle est la différence entre la méthode DHI Choi Pen et la FUE classique ?",
      a: "La technique DHI utilise le stylo d'implantation Choi pour implanter directement les greffons sans incision préalable. Elle permet une densité supérieure (jusqu'à 75 greffons/cm²), un contrôle parfait de l'angle naturel et une cicatrisation deux fois plus rapide que la FUE classique."
    },
    {
      q: "Le rasage complet de la tête est-il obligatoire pour une greffe DHI ?",
      a: "Non. Grâce à la finesse du stylo Choi, l'implantation peut être réalisée entre vos cheveux existants sans raser l'ensemble de la zone receveuse."
    },
    {
      q: "L'intervention est-elle douloureuse ?",
      a: "Non. Nous utilisons une technologie d'anesthésie locale par jet sous pression sans aiguille traditionnelle, rendant la procédure entièrement indolore et confortable."
    },
    {
      q: "Combien de greffons peuvent être implantés en une seule séance ?",
      a: "Selon la densité de votre zone donneuse, nous implantons en toute sécurité entre 3 500 et 4 800+ greffons (soit environ 8 000 à 11 000 cheveux) lors d'une seule session DHI."
    },
    {
      q: "Qu'est-ce que la perte transitoire (shock loss) et quand poussent les cheveux finaux ?",
      a: "Entre le 1er et le 2ème mois, les tiges capillaires greffées tombent temporairement; les racines restent fermement ancrées. La repousse active commence dès le 4ème mois et le résultat dense et définitif est atteint au 12ème mois."
    },
    {
      q: "Quand puis-je reprendre l'avion et mes activités professionnelles ?",
      a: "Dès le 3ème jour, après le premier lavage médical clinique et le contrôle médical, vous pouvez reprendre l'avion en toute sécurité et retourner au travail sous 3 à 5 jours."
    },
    {
      q: "Comment fonctionne le suivi médical sur 12 mois ?",
      a: "Nous assurons un suivi mensuel personnalisé par WhatsApp aux 1er, 3ème, 6ème et 12ème mois avec notre équipe médicale pour garantir le résultat parfait de votre greffe."
    }
  ] : [
    {
      q: "How much does a DHI hair transplant cost in Antalya, and what is included?",
      a: "Our DHI hair transplant packages in Antalya range from £1,850 (€2,150) for Standard DHI to £2,200 (€2,550) for the VIP All-Inclusive experience. We operate on a £0 upfront deposit policy — you only pay at the clinic in Antalya after your surgeon consultation and blood tests. The VIP package includes maximum-graft DHI surgery in a licensed hospital, needle-free anesthesia, 5-star hotel accommodation, private Mercedes Vito transfers, PRP therapy, medical care kit, and 12-month post-op follow-up."
    },
    {
      q: "What is the key clinical difference between DHI Choi Pen and traditional FUE?",
      a: "DHI uses specialized Choi Implanter Pens to extract and place follicles directly in a single microscopic step without pre-cutting channel incisions. This minimizes scalp trauma, allows higher density placement (up to 75 grafts/cm²), and ensures 360-degree natural angle precision."
    },
    {
      q: "Is shaving my whole head mandatory for a DHI procedure?",
      a: "No. The Choi Pen technique enables precision placement between existing hairs, allowing completely unshaven or partially shaved options."
    },
    {
      q: "Is the DHI procedure or anesthesia painful?",
      a: "No. We administer needle-free pressure-spray jet anesthesia (ComfortIn) prior to extraction, eliminating standard needle pinch discomfort and ensuring a pain-free experience."
    },
    {
      q: "How many grafts can be transplanted in a single DHI session?",
      a: "Depending on your donor area density and hair characteristics, we safely transplant between 3,500 and 4,800+ grafts (approximately 8,000 to 11,000 hairs) in a single comprehensive session."
    },
    {
      q: "What is shock loss, and when do permanent hair results appear?",
      a: "Shock loss is the natural shedding of transplanted hair shafts between weeks 4 to 8 while living roots remain firmly anchored beneath the scalp. Permanent active regrowth begins in month 4, thickens noticeably by months 6–8, and reaches 100% full maturity at month 12."
    },
    {
      q: "How soon after surgery can I fly back home and return to work?",
      a: "On Day 3, following your clinical hair wash and surgeon sign-off, you can safely board your return flight and resume regular desk work within 3 to 5 days."
    },
    {
      q: "How does the 12-month post-op follow-up and guarantee work?",
      a: "Every patient receives a lifetime graft retention certificate. Our medical team conducts scheduled photo reviews at months 1, 3, 6, and 12 via WhatsApp to ensure optimal density and growth."
    }
  ];

  return (
    <section id="faq" className="py-14 sm:py-18 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            {lang === 'tr' ? "Sıkça Sorulan Sorular" : lang === 'fr' ? "Foire Aux Questions" : "Frequently Asked Questions"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            {lang === 'tr' ? "Antalya DHI saç ekimi, fiyatlar, iyileşme süreci ve VIP seyahat hakkında merak edilen tüm sorular." : "Essential clinical and travel details regarding DHI hair restoration in Antalya."}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-2.5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-2xs"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left font-heading font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 min-h-[50px]"
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${openIndex === idx ? 'rotate-180 text-emerald-600' : ''}`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 bg-slate-50/40">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
