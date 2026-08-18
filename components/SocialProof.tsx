'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function SocialProof() {
  const { lang } = useSiteContext();

  const title = {
    en: 'Patient Experiences',
    fr: 'Témoignages Patients',
    tr: 'Hasta Deneyimleri',
  }[lang as Lang] || 'Patient Experiences';

  const subtitle = {
    en: 'Selected testimonials from international patients treated at our licensed partner facilities in Antalya.',
    fr: 'Témoignages sélectionnés de patients internationaux soignés dans nos établissements partenaires agréés à Antalya.',
    tr: 'Antalya\'daki lisanslı partner kliniklerimizde tedavi olan uluslararası hastalardan seçilmiş deneyimler.',
  }[lang as Lang] || 'Selected testimonials from international patients treated at our licensed partner facilities in Antalya.';

  const reviews = [
    {
      location: { en: 'United Kingdom', fr: 'Royaume-Uni', tr: 'Birleşik Krallık' },
      platform: { en: 'Patient, 41', fr: 'Patient, 41 ans', tr: 'Hasta, 41' },
      rating: 5,
      text: {
        en: '"I was apprehensive about travelling abroad for this procedure, but the coordination from first contact to aftercare was seamless. The clinic was sterile, modern and the surgical team was professional throughout. Eight months post-op the result speaks for itself."',
        fr: '"J\'étais réticent à voyager à l\'étranger pour cette intervention, mais la coordination de la prise de contact jusqu\'aux soins post-opératoires était irréprochable. Huit mois après l\'opération, le résultat parle de lui-même."',
        tr: '"Yurt dışında böyle bir işlem için seyahat etmek konusunda endişeliydim, ancak ilk temastan ameliyat sonrası bakıma kadar koordinasyon kusursuzdu. Ameliyat sonrası sekizinci ayda sonuç kendini gösteriyor."',
      },
      grafts: { en: '3,800 Grafts — VIP Package', fr: '3 800 Greffons — Forfait VIP', tr: '3.800 Greft — VIP Paket' },
    },
    {
      location: { en: 'France', fr: 'France', tr: 'Fransa' },
      platform: { en: 'Patient, 36', fr: 'Patient, 36 ans', tr: 'Hasta, 36' },
      rating: 5,
      text: {
        en: '"I compared clinics across Europe for months. The price difference for DHI in Antalya is significant, but what convinced me was the clinical quality — single-use Choi pens, pre-op blood tests, and a 12-month follow-up protocol. Very satisfied."',
        fr: '"J\'ai comparé des cliniques à travers l\'Europe pendant des mois. La différence de prix pour le DHI à Antalya est significative, mais ce qui m\'a convaincu c\'est la qualité clinique — stylos Choi à usage unique, analyses pré-op, et protocole de suivi de 12 mois."',
        tr: '"Aylarca Avrupa\'daki klinikleri karşılaştırdım. Antalya\'da DHI için fiyat farkı önemli, ancak beni ikna eden klinik kaliteydi — tek kullanımlık Choi kalemleri, ameliyat öncesi kan testleri ve 12 aylık takip protokolü."',
      },
      grafts: { en: '4,200 Grafts — VIP Package', fr: '4 200 Greffons — Forfait VIP', tr: '4.200 Greft — VIP Paket' },
    },
    {
      location: { en: 'Germany', fr: 'Allemagne', tr: 'Almanya' },
      platform: { en: 'Patient, 44', fr: 'Patient, 44 ans', tr: 'Hasta, 44' },
      rating: 5,
      text: {
        en: '"The no-shave DHI option was important to me professionally. The jet-injection anaesthesia was genuinely painless and I was back to work within four days. The hospital facility was clean and fully accredited. Would recommend without hesitation."',
        fr: '"L\'option DHI sans rasage était importante pour moi professionnellement. L\'anesthésie par jet-injection était vraiment indolore et j\'ai repris le travail en quatre jours. L\'établissement hospitalier était propre et entièrement accrédité."',
        tr: '"Traşsız DHI seçeneği benim için mesleki açıdan önemliydi. Jet-enjeksiyon anestezisi gerçekten ağrısızdı ve dört gün içinde işe döndüm. Hastane tesisi temiz ve tamamen akrediteydi."',
      },
      grafts: { en: '3,200 Grafts — Standard Package', fr: '3 200 Greffons — Forfait Standard', tr: '3.200 Greft — Standart Paket' },
    }
  ];

  return (
    <div id="reviews" className="w-full space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">{title}</h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">{subtitle}</p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((r, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="text-xs font-bold text-slate-500">{r.location[lang as Lang] || r.location['en']}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{r.platform[lang as Lang] || r.platform['en']}</div>
                </div>
                <div className="text-amber-400 text-xs font-black tracking-tight">
                  {'★'.repeat(r.rating)}
                </div>
              </div>

              <p className="text-xs text-slate-700 italic leading-relaxed font-medium">
                {r.text[lang as Lang] || r.text['en']}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <div className="text-[11px] font-black text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full text-center">
                {r.grafts[lang as Lang] || r.grafts['en']}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Metrics Footer */}
      <div className="bg-slate-950 text-white rounded-3xl p-6 max-w-5xl mx-auto flex flex-col sm:flex-row justify-around items-center text-center gap-4 shadow-xl border border-slate-800">
        <div>
          <div className="text-amber-400 font-black text-lg">4.9 / 5.0</div>
          <span className="text-xs text-slate-400 font-medium">
            {lang === 'tr' ? 'Ortalama Hasta Puanı' : lang === 'fr' ? 'Note Moyenne Patients' : 'Average Patient Rating'}
          </span>
        </div>
        <div className="hidden sm:block w-px h-8 bg-slate-800"></div>
        <div>
          <div className="text-white font-black text-lg">1,200+</div>
          <span className="text-xs text-slate-400 font-medium">
            {lang === 'tr' ? 'Başarılı DHI Operasyonu' : lang === 'fr' ? 'Opérations DHI Réussies' : 'Successful DHI Operations'}
          </span>
        </div>
        <div className="hidden sm:block w-px h-8 bg-slate-800"></div>
        <div>
          <div className="text-blue-400 font-black text-lg">35+</div>
          <span className="text-xs text-slate-400 font-medium">
            {lang === 'tr' ? 'Ülkeden Uluslararası Hasta' : lang === 'fr' ? 'Pays Représentés' : 'Countries Represented'}
          </span>
        </div>
      </div>
    </div>
  );
}
