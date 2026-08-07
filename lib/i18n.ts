export type Lang = 'en' | 'fr' | 'tr';

export const translations = {
  en: {
    // Nav
    'nav.consultation': 'Send Photos for Analysis',
    'nav.freeConsultation': 'Send Photos for Analysis',
    'nav.home': 'Home',
    'nav.packages': 'Packages',
    'nav.process': 'Our Process',
    'nav.team': 'Medical Team',
    'nav.results': 'Patient Journey',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Antalya DHI Hair Transplant',
    'hero.subtitle': 'Send your scalp photos today for a 24-hour doctor evaluation and personalized all-inclusive DHI plan.',
    'hero.badge1': '★ ★ ★ ★ ★ 4.9/5 Verified Patient Rating',
    'hero.badge2': 'Sağlık Bakanlığı Authorized Partner Clinic',
    'hero.badge3': 'VIP Transfer & Luxury Hotel Stay',
    'hero.fromPrice': 'From £1,550',
    'hero.cta_whatsapp': 'Send Photos via WhatsApp',
    'hero.whatsappCTA': 'Send Photos via WhatsApp',
    'hero.cta_analysis': 'Send Photos for 24-Hour Evaluation',
    'hero.analysisCTA': 'Send Photos for 24-Hour Evaluation',
    'hero.ministryBadge': 'T.C. Ministry of Health Authorized Partner Clinic (Ref: AK-84920)',

    // Trust Band
    'trust.certified': 'T.C. Ministry of Health Authorized Clinic',
    'trust.warranty': 'Lifetime Warranty Certificate',
    'trust.vip_transfer': 'VIP Mercedes Airport & Clinic Transfer',
    'trust.aftercare': '12-Month Post-Op Follow-up Support',

    // Medical Team Section
    'team.title': 'Our Surgical & Patient Coordination Team',
    'team.subtitle': 'Certified surgeons and dedicated patient coordinators guiding your DHI transformation in Antalya.',
    'team.member1.role': 'Lead Hair Transplant Surgeon',
    'team.member1.exp': '12+ Years Surgical Practice',
    'team.member1.desc': 'Specialized in Choi Pen DHI transplantation, natural hairline design, and high-density graft placement.',
    'team.member2.role': 'Senior Patient Coordinator',
    'team.member2.exp': 'Native Language Specialist (EN/FR/TR)',
    'team.member2.desc': 'Manages your flight itinerary, VIP Mercedes Vito transfer, and luxury hotel accommodation.',
    'team.member3.role': 'Post-Op Care Supervisor',
    'team.member3.exp': '12-Month Growth Specialist',
    'team.member3.desc': 'Guides your first hair wash, supplies medical care kit, and monitors graft growth every month.',

    // Competitor Features (What Top Antalya Clinics Offer)
    'competitor.title': 'Standard Medical Standards Included in Every Procedure',
    'competitor.subtitle': 'We match and exceed top European & Turkish clinic standards with zero hidden costs.',
    'competitor.f1.title': 'Needle-Free Painless Anesthesia',
    'competitor.f1.desc': 'High-pressure ComfortIn anesthesia delivery system eliminates needle pain before graft extraction.',
    'competitor.f2.title': '98%+ Graft Survival Rate',
    'competitor.f2.desc': 'Extracted follicles are stored in HypoThermosol ATP nutrient solution for maximum graft viability.',
    'competitor.f3.title': 'PRP & Oxygenation Therapy',
    'competitor.f3.desc': 'Platelet-Rich Plasma therapy combined with hyperbaric oxygen session to accelerate post-op healing.',
    'competitor.f4.title': 'Trichological Scalp Analysis',
    'competitor.f4.desc': 'Microscopic hair follicle density and scalp elasticity mapping prior to Choi Pen hairline design.',

    // Advantages
    'advantages.title': 'Why DHI Choi Pen Technology?',
    'advantages.subtitle': 'Direct Hair Implantation with Choi Implanter Pen for maximum density and natural direction.',
    'advantages.items.no_shave.title': 'No-Shave DHI Option',
    'advantages.items.no_shave.description': 'Implantation without shaving your entire head. Ideal for patients requiring high discretion.',
    'advantages.items.natural_angle.title': 'Natural Direction & Angle',
    'advantages.items.natural_angle.description': 'Choi Implanter Pen enables precise 40-45 degree angle placement for 100% natural hair direction.',
    'advantages.items.high_density.title': 'High-Density Grafting',
    'advantages.items.high_density.description': 'Allows up to 60-80 grafts per cm² without damaging existing hair follicles.',
    'advantages.items.fast_recovery.title': 'Micro-Incision Recovery',
    'advantages.items.fast_recovery.description': 'No scalpel or stitches. Minimal tissue trauma leads to rapid healing within 3-5 days.',

    // Process Timeline ("Size Özel DHI Süreci")
    'process.title': 'Your Customized DHI Journey in Antalya',
    'process.subtitle': '4 transparent steps from your first online contact to your full hair recovery.',
    'process.step1.num': '01',
    'process.step1.title': 'Send Scalp Photos for Free Analysis',
    'process.step1.desc': 'Send 3 scalp photos via WhatsApp. Our surgical team evaluates graft needs within 24 hours.',
    'process.step2.num': '02',
    'process.step2.title': 'Receive All-Inclusive Quote',
    'process.step2.desc': 'Receive your transparent treatment plan, package rate (£1,550 or £1,900), and flight schedule.',
    'process.step3.num': '03',
    'process.step3.title': 'VIP Arrival & Hospital Procedure',
    'process.step3.desc': 'VIP airport pickup, hotel check-in, and painless DHI hair transplant under sterile hospital conditions.',
    'process.step4.num': '04',
    'process.step4.title': '12-Month Post-Op Follow-up',
    'process.step4.desc': 'Personal coordinator monitoring your wash routine and hair growth milestones every month.',

    // Packages
    'packages.title': 'Transparent DHI Packages',
    'packages.subtitle': 'High-quality medical care in Antalya with zero hidden costs.',
    'packages.standard_name': 'Standard DHI Package',
    'packages.standard_title': 'Standard DHI Package',
    'packages.standard_desc': 'DHI surgery package for local & self-arranging patients.',
    'packages.standard_includes': 'Maximum Graft DHI Operation|Painless Needle-Free Anesthesia|Post-Op Medication & Special Shampoo Kit|Lifetime Warranty Certificate|12-Month Online Follow-up Support',
    'packages.vip_name': 'VIP Antalya Experience',
    'packages.vip_title': 'VIP Antalya Experience',
    'packages.vip_desc': 'Complete health tourism experience with luxury stay & transfer.',
    'packages.vip_popular': 'MOST RECOMMENDED',
    'packages.vip_includes': 'Full DHI Operation & Maximum Grafts|VIP Mercedes Vito Airport & Clinic Transfers|1 Night Luxury Hotel Accommodation|Personal Native Language Coordinator (EN/FR/TR)|PRP & Oxygen Therapy Session|12-Month Post-Op Growth Follow-up',
    'packages.book_cta': 'Send Photos for Evaluation',

    // Calculator / Wizard
    'calculator.title': 'Free DHI Hair Analysis',
    'calculator.subtitle': 'Select your hair loss stage to receive a customized graft estimate and price quote.',
    'calculator.step1': 'Hair Loss Stage',
    'calculator.step2': 'Package Preference',
    'calculator.step3': 'WhatsApp Analysis',
    'calculator.step3_title': 'Send Scalp Photos for 24-Hour Doctor Review',
    'calculator.name_placeholder': 'Full Name',
    'calculator.country_placeholder': 'Select Your Country',
    'calculator.phone_placeholder': 'WhatsApp Phone Number',
    'calculator.submit': 'Send Photos via WhatsApp',

    // Patient Journey (Social Proof Replacement)
    'journey.title': 'The Antalya DHI Patient Journey',
    'journey.subtitle': 'How international patients experience medical tourism with us.',
    'journey.step1.title': 'VIP Airport Arrival',
    'journey.step1.desc': 'Private driver meets you at Antalya Airport with Mercedes Vito and takes you to your hotel.',
    'journey.step2.title': 'Doctor Consultation',
    'journey.step2.desc': 'In-person scalp evaluation, hairline design, and blood tests at our certified partner clinic.',
    'journey.step3.title': 'DHI Procedure Day',
    'journey.step3.desc': 'Comfortable DHI graft extraction and Choi Pen implantation performed by certified surgical specialists.',
    'journey.step4.title': 'First Wash & Aftercare',
    'journey.step4.desc': 'Special hair wash demonstration, aftercare kit delivery, and safe return transfer to airport.',

    // Disclaimer & Footer
    'disclaimer.text': 'This platform is an informational and guidance portal for international health tourism. All medical procedures are performed by certified surgeons at our T.C. Ministry of Health Authorized Partner Clinic (Ref: AK-84920).',
    'footer.rights': 'All Rights Reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Mobile CTA
    'mobile_cta.whatsapp': 'WhatsApp Consultant',
    'mobile_cta.analysis': 'Send Photos',
    'mobile_cta.free_analysis': 'Send Photos'
  },
  fr: {
    // Nav
    'nav.consultation': 'Envoyer Photos pour Analyse',
    'nav.freeConsultation': 'Envoyer Photos pour Analyse',
    'nav.home': 'Accueil',
    'nav.packages': 'Forfaits',
    'nav.process': 'Notre Processus',
    'nav.team': 'Équipe Médicale',
    'nav.results': 'Parcours Patient',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Greffe de Cheveux DHI à Antalya',
    'hero.subtitle': 'Envoyez vos photos aujourd\'hui pour une évaluation médicale en 24h et un devis tout compris.',
    'hero.badge1': '★ ★ ★ ★ ★ Évaluation Patients 4.9/5',
    'hero.badge2': 'Équipe Médicale Agréée par le Ministère',
    'hero.badge3': 'Transferts VIP Mercedes & Hôtel',
    'hero.fromPrice': 'À partir de 1 800€',
    'hero.cta_whatsapp': 'Envoyer Photos sur WhatsApp',
    'hero.whatsappCTA': 'Envoyer Photos sur WhatsApp',
    'hero.cta_analysis': 'Évaluation en 24h',
    'hero.analysisCTA': 'Évaluation en 24h',
    'hero.ministryBadge': 'Clinique Partenaire Certifiée par le Ministère de la Santé T.C. (Ref: AK-84920)',

    // Trust Band
    'trust.certified': 'Clinique Certifiée Ministère de la Santé T.C.',
    'trust.warranty': 'Certificat de Garantie à Vie',
    'trust.vip_transfer': 'Transferts VIP Aéroport & Clinique',
    'trust.aftercare': 'Suivi Post-Opératoire 12 Mois',

    // Medical Team Section
    'team.title': 'Notre Équipe Médicale & Coordination',
    'team.subtitle': 'Chirurgiens certifiés et coordinateurs internationaux dédiés à votre parcours DHI à Antalya.',
    'team.member1.role': 'Chirurgien Spécialiste DHI',
    'team.member1.exp': 'Plus de 12 ans d\'Expérience',
    'team.member1.desc': 'Spécialisé dans l\'implantation DHI Choi Pen, le dessin de la ligne frontale et la haute densité.',
    'team.member2.role': 'Coordinateur Patient International',
    'team.member2.exp': 'Spécialiste de la Prise en Charge',
    'team.member2.desc': 'Assure le suivi dans votre langue (FR/EN/TR), les transferts VIP Mercedes et l\'hôtel.',
    'team.member3.role': 'Superviseur Médical Post-Opératoire',
    'team.member3.exp': 'Spécialiste de la Repousse',
    'team.member3.desc': 'Guide votre routine de lavage, l\'utilisation des soins post-op et suit la repousse chaque mois.',

    // Competitor Features
    'competitor.title': 'Standards Médicaux Inclus dans Chaque Procédure',
    'competitor.subtitle': 'Nous surpassons les plus grands standards cliniques européens sans aucun frais caché.',
    'competitor.f1.title': 'Anesthésie Sans Aiguille et Indolore',
    'competitor.f1.desc': 'Système d\'anesthésie à haute pression ComfortIn éliminant la douleur avant l\'extraction.',
    'competitor.f2.title': 'Taux de Survie des Greffons > 98%',
    'competitor.f3.title': 'Thérapie PRP & Oxygénation',
    'competitor.f4.title': 'Analyse Trichologique du Cuir Chevelu',

    // Advantages
    'advantages.title': 'Pourquoi la Greffe Capillaire DHI ?',
    'advantages.subtitle': 'Implantation Directe de Cheveux avec Choi Implanter Pen pour une densité maximale.',

    // Process Timeline
    'process.title': 'Votre Parcours DHI Personnalisé à Antalya',
    'process.subtitle': '4 étapes transparentes du premier contact au résultat final.',

    // Packages
    'packages.title': 'Forfaits DHI Transparents',
    'packages.subtitle': 'Des soins médicaux de haute qualité à Antalya sans aucun frais caché.',
    'packages.standard_name': 'Standard DHI Package',
    'packages.standard_title': 'Standard DHI Package',
    'packages.vip_name': 'VIP Antalya Experience',
    'packages.vip_title': 'VIP Antalya Experience',
    'packages.vip_popular': 'LE PLUS RECOMMANDÉ',
    'packages.book_cta': 'Évaluation en 24h',

    // Calculator / Wizard
    'calculator.title': 'Analyse Capillaire DHI Gratuite',
    'calculator.step3_title': 'Envoyez vos photos pour une évaluation médicale sous 24h',
    'calculator.submit': 'Envoyer Photos sur WhatsApp',

    // Patient Journey
    'journey.title': 'L\'Expérience DHI à Antalya',

    // Disclaimer & Footer
    'disclaimer.text': 'Cette plateforme est un portail d\'information et d\'orientation pour le tourisme médical. Toutes les procédures sont effectuées dans notre clinique partenaire autorisée par le Ministère de la Santé T.C. (Ref: AK-84920).',
    'footer.rights': 'Tous Droits Réservés',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',

    // Mobile CTA
    'mobile_cta.whatsapp': 'Conseiller WhatsApp',
    'mobile_cta.analysis': 'Envoyer Photos',
    'mobile_cta.free_analysis': 'Envoyer Photos'
  },
  tr: {
    // Nav
    'nav.consultation': 'Fotoğraf Gönder & Analiz Al',
    'nav.freeConsultation': 'Fotoğraf Gönder & Analiz Al',
    'nav.home': 'Ana Sayfa',
    'nav.packages': 'Paketler',
    'nav.process': 'Sürecimiz',
    'nav.team': 'Medikal Ekip',
    'nav.results': 'Hasta Deneyimi',
    'nav.contact': 'İletişim',
    
    // Hero Section
    'hero.title': 'Antalya DHI Saç Ekimi',
    'hero.subtitle': 'Fotoğrafınızı bugün gönderin, 24 saat içinde uzman doktorumuz değerlendirip kişiye özel DHI planınızı hazırlasın.',
    'hero.badge1': '★ ★ ★ ★ ★ 4.9/5 Onaylı Hasta Derecelendirmesi',
    'hero.badge2': 'Sağlık Bakanlığı Onaylı Sağlık Ekibi',
    'hero.badge3': 'VIP Transfer & Konaklama Desteği',
    'hero.fromPrice': '90.000 TL\'den',
    'hero.cta_whatsapp': 'WhatsApp\'tan Fotoğraf Gönder',
    'hero.whatsappCTA': 'WhatsApp\'tan Fotoğraf Gönder',
    'hero.cta_analysis': 'Fotoğrafını Gönder, 24 Saatte Uzman Değerlendirsin',
    'hero.analysisCTA': 'Fotoğrafını Gönder, 24 Saatte Uzman Değerlendirsin',
    'hero.ministryBadge': 'T.C. Sağlık Bakanlığı Onaylı Anlaşmalı Klinik (Ref: AK-84920)',

    // Trust Band
    'trust.certified': 'T.C. Sağlık Bakanlığı Onaylı Anlaşmalı Klinik',
    'trust.warranty': 'Ömür Boyu Garanti Sertifikası',
    'trust.vip_transfer': 'VIP Havaalanı & Klinik Transferi',
    'trust.aftercare': '12 Ay Operasyon Sonrası Takip',

    // Medical Team Section
    'team.title': 'Medikal & Koordinasyon Ekibimiz',
    'team.subtitle': 'Antalya\'daki DHI tedavi yolculuğunuza rehberlik eden uzman medikal kadro ve uluslararası hasta koordinatörleri.',
    'team.member1.role': 'Kıdemli Saç Ekimi Cerrahı',
    'team.member1.exp': '12+ Yıl Cerrahi Pratik',
    'team.member1.desc': 'Choi Pen DHI implantasyonu, doğal ön saç çizgisi tasarımı ve yüksek yoğunluklu ekimde uzmanlaşmıştır.',
    'team.member2.role': 'Uluslararası Hasta Koordinatörü',
    'team.member2.exp': 'Ana Dil Desteği (EN/FR/TR)',
    'team.member2.desc': 'Uçuş seyahat programınızı, VIP Mercedes Vito transferlerinizi ve otel konaklamanızı organize eder.',
    'team.member3.role': 'Operasyon Sonrası Takip Sorumlusu',
    'team.member3.exp': '12 Ay Gelişim Uzmanı',
    'team.member3.desc': 'İlk yıkamanızı yaptırır, bakım kitinizi teslim eder ve her ay saç uzama gelişiminizi takip eder.',

    // Competitor Features
    'competitor.title': 'Her Operasyona Dahil Medikal Standartlarımız',
    'competitor.subtitle': 'Avrupa ve Türkiye\'nin en prestijli klinik standartlarını hiçbir gizli maliyet olmadan eksiksiz sunuyoruz.',
    'competitor.f1.title': 'İğnesiz ve Ağrısız Anestezi',
    'competitor.f1.desc': 'ComfortIn yüksek basınçlı püskürtme anestezi sistemi ile iğne acısı olmadan konforlu lokal anestezi.',
    'competitor.f2.title': '%98+ Greft Canlılık Oranı',
    'competitor.f2.desc': 'Toplanan saç kökleri özel HypoThermosol besleyici ATP solüsyonunda muhafaza edilerek %98+ tutunma sağlanır.',
    'competitor.f3.title': 'PRP ve Oksijen Terapisi',
    'competitor.f3.desc': 'Kendi kanınızdan hazırlanan PRP ile doku iyileşmesini ve saç hücrelerinin hızlı uzamasını sağlayan tedavi.',
    'competitor.f4.title': 'Trikolojik Saç Derisi Analizi',
    'competitor.f4.desc': 'Choi Pen implantasyon öncesi mikroskobik saç derisi esnekliği ve donör alan yoğunluk haritalaması.',

    // Advantages
    'advantages.title': 'Neden DHI Saç Ekimi?',
    'advantages.subtitle': 'Choi Implanter Pen ile kanal açmadan doğrudan implantasyon ve doğal görünüm.',

    // Process Timeline ("Size Özel DHI Süreci")
    'process.title': 'Size Özel DHI Süreci',
    'process.subtitle': 'İlk iletişiminizden tam saç gelişimine kadar 4 şeffaf adım.',

    // Packages
    'packages.title': 'Şeffaf DHI Paketleri',
    'packages.subtitle': 'Gizli maliyet olmadan Antalya\'da dünya standartlarında medikal bakım.',
    'packages.standard_name': 'Standard DHI',
    'packages.standard_title': 'Standard DHI',
    'packages.vip_name': 'VIP Antalya Experience',
    'packages.vip_title': 'VIP Antalya Experience',
    'packages.vip_popular': 'EN ÇOK TERCİH EDİLEN',
    'packages.book_cta': 'Fotoğraf Gönder & Analiz Al',

    // Calculator / Wizard
    'calculator.title': 'Ücretsiz Saç Analizi',
    'calculator.step3_title': 'Fotoğrafınızı Gönderin, 24 Saat İçinde Uzman Doktorumuz Değerlendirsin',
    'calculator.submit': 'WhatsApp\'tan Fotoğraf Gönder',

    // Patient Journey
    'journey.title': 'Antalya DHI Deneyimi',

    // Disclaimer & Footer
    'disclaimer.text': 'Bu platform uluslararası sağlık turizmi bilgilendirme ve rehberlik portalıdır. Tüm tıbbi operasyonlar T.C. Sağlık Bakanlığı Yetkili Kliniği bünyesinde uzman hekimler tarafından gerçekleştirilmektedir (Ref: AK-84920).',
    'footer.rights': 'Tüm Hakları Saklıdır',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Şartları',

    // Mobile CTA
    'mobile_cta.whatsapp': 'WhatsApp Danışman',
    'mobile_cta.analysis': 'Fotoğraf Gönder',
    'mobile_cta.free_analysis': 'Fotoğraf Gönder'
  }
} as const;

export function t(lang: Lang, key: string): string {
  const dict = translations[lang] as Record<string, string>;
  const fallback = translations['en'] as Record<string, string>;
  return dict?.[key] || fallback?.[key] || key;
}
