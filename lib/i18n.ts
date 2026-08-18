export type Lang = 'en' | 'fr' | 'tr';

export const translations = {
  en: {
    // Nav
    'nav.consultation': 'Request Scalp Analysis',
    'nav.freeConsultation': 'Request Scalp Analysis',
    'nav.home': 'Home',
    'nav.packages': 'Packages',
    'nav.process': 'Our Process',
    'nav.team': 'Medical Team',
    'nav.results': 'Patient Journey',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'VIP DHI Hair Transplant Experience in Antalya',
    'hero.subtitle': 'All-Inclusive VIP Transfer, Luxury Hotel Stay & Dedicated Coordination for UK & European Patients.',
    'hero.badge1': '4.9/5 Rating on Trustpilot & Google',
    'hero.badge2': 'Licensed Partner Clinics & Coordination',
    'hero.badge3': 'VIP Transfer & Luxury Hotel Stay',
    'hero.fromPrice': 'From £1,550',
    'hero.cta_whatsapp': 'Request Consultation on WhatsApp',
    'hero.whatsappCTA': 'Request Consultation on WhatsApp',
    'hero.cta_analysis': 'Get Free Hair Analysis',
    'hero.analysisCTA': 'Get Free Hair Analysis',
    'hero.ministryBadge': 'Procedures Performed in T.C. Ministry of Health Licensed Partner Clinics',

    // Hero Visual Tags
    'hero.vtag1': 'International Patient Coordination',
    'hero.vtag2': 'Native English & French Support',
    'hero.vtag3': 'Antalya VIP Health Tourism',
    'hero.vtag4': '12-Month Medical Follow-Up',

    // Trust Band
    'trust.certified': 'T.C. Ministry of Health Licensed Partner Facilities',
    'trust.warranty': '12-Month Clinical Follow-Up Protocol',
    'trust.vip_transfer': 'VIP Mercedes Airport & Clinic Transfer',
    'trust.aftercare': 'Active WhatsApp Patient Support',

    // Medical Team Section
    'team.title': 'Our Surgical & Patient Coordination Team',
    'team.subtitle': 'Experienced hair transplant specialists and international patient coordinators guiding your DHI stay in Antalya.',
    'team.member1.role': 'Hair Transplant Team',
    'team.member1.exp': '12+ Years Clinical Practice',
    'team.member1.desc': 'Specialized in Choi Pen DHI transplantation, natural hairline design, and high-density graft placement in licensed healthcare facilities.',
    'team.member2.role': 'Senior Patient Coordinator',
    'team.member2.exp': 'Multilingual Coordinator (EN/FR/TR)',
    'team.member2.desc': 'Manages your flight itinerary, VIP Mercedes Vito transfer, and luxury hotel accommodation.',
    'team.member3.role': 'Post-Op Care Supervisor',
    'team.member3.exp': 'Post-Op Care Specialist',
    'team.member3.desc': 'Guides your first hair wash, supplies medical care kit, and monitors graft growth every month.',

    // Competitor Features
    'competitor.title': 'Clinical Standards Included in Every Surgery',
    'competitor.subtitle': 'We match and exceed European clinic standards with zero hidden costs.',
    'competitor.f1.title': 'Needle-Free Comfort Anesthesia',
    'competitor.f1.desc': 'ComfortIn pressure-spray injection system minimizes discomfort before graft extraction.',
    'competitor.f2.title': '98%+ Graft Viability Rate',
    'competitor.f2.desc': 'Follicles stored in HypoThermosol ATP nutrient solution for maximum graft viability.',
    'competitor.f3.title': 'PRP & Mesotherapy Protocol',
    'competitor.f3.desc': 'Platelet-Rich Plasma therapy combined with targeted mesotherapy to support healing.',
    'competitor.f4.title': 'Trichological Scalp Mapping',
    'competitor.f4.desc': 'Microscopic hair follicle density mapping prior to Choi Pen hairline design.',

    // Advantages Section Keys
    'advantages.title': 'Why Choose DHI Choi Pen Technology?',
    'advantages.subtitle': 'Direct Hair Implantation with Choi Implanter Pen for maximum density and natural direction.',
    'advantages.items.no_shave.title': 'No-Shave Option',
    'advantages.items.no_shave.description': 'Ideal for maintaining existing hair. Graft implantation performed without completely shaving the recipient area.',
    'advantages.items.natural_angle.title': 'Natural Angle Precision',
    'advantages.items.natural_angle.description': 'The Choi Implanter Pen allows full 360-degree control over depth, angle, and growth direction for a natural hairline.',
    'advantages.items.high_density.title': 'Maximum Graft Density',
    'advantages.items.high_density.description': 'Enables up to 80 grafts per cm² placement by eliminating scalp incision channels, delivering high hair density.',
    'advantages.items.fast_recovery.title': 'Rapid Scalp Recovery',
    'advantages.items.fast_recovery.description': 'Minimal tissue trauma means significantly less bleeding, reduced scab formation, and fast 3-5 day scalp recovery.',

    // Process Timeline
    'process.title': 'Your Customized DHI Journey in Antalya',
    'process.subtitle': '4 transparent steps from your first online contact to your full hair recovery.',
    'process.step1.num': '01',
    'process.step1.title': 'Send Scalp Photos for Clinical Analysis',
    'process.step1.desc': 'Send 3 scalp photos via WhatsApp. Our surgical coordination team evaluates graft needs within 24 hours.',
    'process.step2.num': '02',
    'process.step2.title': 'Receive All-Inclusive Quote',
    'process.step2.desc': 'Receive your transparent treatment plan, package rate (£1,550 or £1,900), and travel itinerary.',
    'process.step3.num': '03',
    'process.step3.title': 'VIP Arrival & Hospital Procedure',
    'process.step3.desc': 'VIP airport pickup, hotel check-in, and comfortable DHI hair transplant under sterile hospital conditions by certified surgeons.',
    'process.step4.num': '04',
    'process.step4.title': 'Post-Op Care & Follow-Up',
    'process.step4.desc': 'Receive your aftercare kit, first wash demonstration, and ongoing WhatsApp medical follow-up.',

    // Packages
    'packages.title': 'Transparent DHI Packages',
    'packages.subtitle': 'High-quality medical care in Antalya with zero hidden costs.',
    'packages.standard_name': 'Standard DHI',
    'packages.standard_title': 'Standard DHI Package',
    'packages.standard_desc': 'Surgery-Focused Clinical Package (Ideal for local & self-arranging patients)',
    'packages.standard_includes': 'Maximum Graft DHI Operation in Licensed Hospital|Needle-Free Comfort Anesthesia|Post-Op Medication & Special Shampoo Kit|12-Month Post-Op Follow-Up Protocol|Dedicated WhatsApp Patient Support',
    'packages.vip_name': 'VIP Antalya Experience',
    'packages.vip_title': 'VIP Antalya Experience',
    'packages.vip_desc': 'Complete Medical Stay & Comfort Package (Full All-Inclusive Stay)',
    'packages.vip_popular': 'Most Requested',
    'packages.vip_includes': 'Full DHI Operation & Maximum Grafts in Licensed Hospital|VIP Mercedes Vito Airport & Clinic Transfers|1 Night Luxury Hotel Accommodation|Multilingual Patient Coordinator (EN/FR/TR)|PRP & Mesotherapy Session|12-Month Dedicated Post-Op Care',
    'packages.book_cta': 'Request Clinical Consultation',

    // Calculator / Wizard Form Keys
    'calculator.title': 'DHI Hair Density Analysis',
    'calculator.step_label': 'STEP',
    'calculator.of': 'OF',
    'calculator.step1': 'Select Hair Loss Level',
    'calculator.step1_desc': 'Choose the Norwood diagram level closest to your hair loss pattern.',
    'calculator.step2': 'Choose DHI Package Preference',
    'calculator.step2_desc': 'Select your preferred treatment package option.',
    'calculator.step3': 'Doctor Evaluation & Contact Details',
    'calculator.step3_title': 'Submit details for a direct medical evaluation.',
    'calculator.name_label': 'Full Name *',
    'calculator.name_placeholder': 'Enter your full name',
    'calculator.country_label': 'Country *',
    'calculator.phone_label': 'WhatsApp Phone Number *',
    'calculator.phone_placeholder': 'Enter phone number with country code',
    'calculator.wa_info': 'Submit your scalp details via WhatsApp for a direct clinical consultation & personalized graft quote.',
    'calculator.back': '← Back',
    'calculator.next': 'Continue →',
    'calculator.submit': 'Submit via WhatsApp',

    // Patient Journey
    'journey.title': 'The Antalya DHI Patient Journey',
    'journey.subtitle': 'How international patients experience medical travel with us.',
    'journey.step1.title': 'VIP Airport Arrival',
    'journey.step1.desc': 'Private driver meets you at Antalya Airport with Mercedes Vito and takes you to your hotel.',
    'journey.step2.title': 'Surgeon Consultation',
    'journey.step2.desc': 'In-person scalp evaluation, hairline design, and blood tests at our certified partner clinic.',
    'journey.step3.title': 'Choi Pen DHI Suite',
    'journey.step3.desc': 'Comfortable DHI graft extraction and Choi Pen implantation performed by certified surgical specialists in licensed facilities.',
    'journey.step4.title': 'First Wash & Aftercare',
    'journey.step4.desc': 'Special hair wash demonstration, aftercare kit delivery, and safe return transfer to airport.',

    // Disclaimer & Footer
    'disclaimer.text': 'LEGAL DISCLAIMER: This platform is an independent international patient consultation and coordination portal. All surgical and medical procedures are performed exclusively by certified specialist physicians in partner healthcare facilities licensed by the Ministry of Health of the Republic of Turkey.',
    'footer.rights': 'All Rights Reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Mobile CTA
    'mobile_cta.whatsapp': 'WhatsApp Care',
    'mobile_cta.analysis': 'Free Analysis',
    'mobile_cta.free_analysis': 'Free Analysis'
  },
  fr: {
    // Nav
    'nav.consultation': 'Demander une Analyse',
    'nav.freeConsultation': 'Demander une Analyse',
    'nav.home': 'Accueil',
    'nav.packages': 'Forfaits',
    'nav.process': 'Notre Processus',
    'nav.team': 'Équipe Médicale',
    'nav.results': 'Parcours Patient',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Expérience de Greffe DHI VIP à Antalya',
    'hero.subtitle': 'Transfert VIP, Hébergement de Luxe et Coordination Dédiée pour Patients Européens.',
    'hero.badge1': 'Évaluation 4.9/5 sur Trustpilot & Google',
    'hero.badge2': 'Établissements Partenaires Agréés & Coordination',
    'hero.badge3': 'Transfert VIP & Hôtel de Luxe',
    'hero.fromPrice': 'À partir de 1 800€',
    'hero.cta_whatsapp': 'Demander une Consultation sur WhatsApp',
    'hero.whatsappCTA': 'Demander une Consultation sur WhatsApp',
    'hero.cta_analysis': 'Analyse Capillaire Gratuite',
    'hero.analysisCTA': 'Analyse Capillaire Gratuite',
    'hero.ministryBadge': 'Interventions Réalisées dans des Établissements Partenaires Agréés par le Ministère de la Santé T.C.',

    // Hero Visual Tags
    'hero.vtag1': 'Coordination Patient Internationale',
    'hero.vtag2': 'Support en Français & Anglais',
    'hero.vtag3': 'Tourisme Médical VIP à Antalya',
    'hero.vtag4': 'Suivi Médical sur 12 Mois',

    // Trust Band
    'trust.certified': 'Établissements Partenaires Agréés par le Ministère de la Santé T.C.',
    'trust.warranty': 'Protocole de Suivi Médical 12 Mois',
    'trust.vip_transfer': 'Transfert VIP Mercedes Aéroport & Clinique',
    'trust.aftercare': 'Support Patient WhatsApp Dédié',

    // Medical Team Section
    'team.title': 'Notre Équipe Chirurgicale & Coordination',
    'team.subtitle': 'Chirurgiens certifiés et coordinateurs internationaux dédiés à votre séjour DHI à Antalya.',
    'team.member1.role': 'Équipe de Greffe Capillaire',
    'team.member1.exp': 'Plus de 12 ans de Pratique Clinique',
    'team.member1.desc': 'Spécialisé dans l\'implantation DHI Choi Pen, le dessin de la ligne frontale et la haute densité dans des cliniques agréées.',
    'team.member2.role': 'Coordinateur Patient International',
    'team.member2.exp': 'Coordinateur Multilingue (FR/EN/TR)',
    'team.member2.desc': 'Organise vos vols, transferts VIP en Mercedes et votre séjour à l\'hôtel.',
    'team.member3.role': 'Superviseur Médical Post-Opératoire',
    'team.member3.exp': 'Spécialiste Soins Post-Opératoires',
    'team.member3.desc': 'Guide votre premier lavage, fournit le kit de soins et suit la repousse chaque mois.',

    // Competitor Features
    'competitor.title': 'Standards Médicaux Inclus dans Chaque Procédure',
    'competitor.subtitle': 'Nous surpassons les standards cliniques européens sans aucun frais caché.',
    'competitor.f1.title': 'Anesthésie Sans Aiguille et Confortable',
    'competitor.f1.desc': 'Système d\'injection haute pression ComfortIn réduisant l\'inconfort avant l\'extraction.',
    'competitor.f2.title': 'Taux de Survie des Greffons > 98%',
    'competitor.f2.desc': 'Follicules conservés dans une solution nutritive HypoThermosol ATP.',
    'competitor.f3.title': 'Protocole PRP & Mésothérapie',
    'competitor.f3.desc': 'Séance de PRP et mésothérapie pour soutenir la cicatrisation et la repousse.',
    'competitor.f4.title': 'Cartographie Trichologique du Cuir Chevelu',
    'competitor.f4.desc': 'Analyse microscopique de densité avant le dessin de la ligne frontale.',

    // Advantages Section Keys
    'advantages.title': 'Pourquoi Choisir la Technologie DHI Choi Pen ?',
    'advantages.subtitle': 'Implantation Directe de Cheveux avec Choi Implanter Pen pour une densité maximale.',
    'advantages.items.no_shave.title': 'Option Sans Raser',
    'advantages.items.no_shave.description': 'Idéal pour conserver vos cheveux longs. L\'implantation est réalisée sans raser complètement la zone réceptrice.',
    'advantages.items.natural_angle.title': 'Précision de l\'Angle Naturel',
    'advantages.items.natural_angle.description': 'Le stylo Choi permet un contrôle total sur la profondeur, l\'angle et la direction de chaque greffon.',
    'advantages.items.high_density.title': 'Densité Maximale de Greffons',
    'advantages.items.high_density.description': 'Permet de placer jusqu\'à 80 greffons par cm² sans ouvrir de canaux préalables, garantissant une densité optimale.',
    'advantages.items.fast_recovery.title': 'Récupération Rapide du Cuir Chevelu',
    'advantages.items.fast_recovery.description': 'Traumatisme tissulaire minimal, saignements réduits et guérison rapide en 3 à 5 jours.',

    // Process Timeline
    'process.title': 'Votre Parcours DHI Personnalisé à Antalya',
    'process.subtitle': '4 étapes transparentes du premier contact au résultat final.',
    'process.step1.num': '01',
    'process.step1.title': 'Analyse Capillaire en Ligne',
    'process.step1.desc': 'Envoyez vos photos par WhatsApp pour une consultation médicale sous 24h.',
    'process.step2.num': '02',
    'process.step2.title': 'Plan de Traitement Personnalisé',
    'process.step2.desc': 'Recevez un devis DHI clair et tout compris avec l\'itinéraire de voyage.',
    'process.step3.num': '03',
    'process.step3.title': 'Arrivée VIP & Procédure DHI',
    'process.step3.desc': 'Accueil VIP à l\'aéroport, hébergement et greffe DHI dans un environnement stérile par des chirurgiens certifiés.',
    'process.step4.num': '04',
    'process.step4.title': 'Soins Post-Op & Suivi WhatsApp',
    'process.step4.desc': 'Kit de soins, formation au premier lavage et support WhatsApp dédié pour votre suivi.',

    // Packages
    'packages.title': 'Forfaits DHI Transparents',
    'packages.subtitle': 'Des soins médicaux de haute qualité à Antalya sans aucun frais caché.',
    'packages.standard_name': 'Standard DHI',
    'packages.standard_title': 'Standard DHI Package',
    'packages.standard_desc': 'Forfait Axé Opération Seule (Idéal pour patients autonomes)',
    'packages.standard_includes': 'Opération DHI en Hôpital Agréé|Anesthésie Sans Aiguille|Médicaments & Kit Spécial Shampoing|Protocole de Suivi Médical 12 Mois|Support WhatsApp Patient Dédié',
    'packages.vip_name': 'VIP Antalya Experience',
    'packages.vip_title': 'VIP Antalya Experience',
    'packages.vip_desc': 'Expérience Tourisme Médical & Confort VIP (Séjour Tout Compris)',
    'packages.vip_popular': 'Formule Privilège',
    'packages.vip_includes': 'Opération DHI Complète en Hôpital Agréé|Transferts VIP en Mercedes Vito Aéroport & Clinique|1 Nuit d\'Hébergement en Hôtel de Luxe|Coordinateur Multilingue (FR/EN/TR)|Séance PRP & Mésothérapie|Suivi Médical Personnalisé sur 12 Mois',
    'packages.book_cta': 'Demander une Consultation',

    // Calculator / Wizard Form Keys
    'calculator.title': 'Analyse de Densité Capillaire',
    'calculator.step_label': 'ÉTAPE',
    'calculator.of': 'SUR',
    'calculator.step1': 'Sélectionnez le Niveau de Perte',
    'calculator.step1_desc': 'Choisissez le stade du schéma de Norwood le plus proche de votre situation.',
    'calculator.step2': 'Préférence de Forfait DHI',
    'calculator.step2_desc': 'Sélectionnez votre formule de traitement préférée.',
    'calculator.step3': 'Évaluation Médicale & Contact',
    'calculator.step3_title': 'Transmettez vos coordonnées pour une évaluation personnalisée.',
    'calculator.name_label': 'Nom et Prénom *',
    'calculator.name_placeholder': 'Entrez votre nom complet',
    'calculator.country_label': 'Pays *',
    'calculator.phone_label': 'Numéro WhatsApp *',
    'calculator.phone_placeholder': 'Entrez votre numéro avec indicatif',
    'calculator.wa_info': 'Transmettez vos photos par WhatsApp pour obtenir une analyse clinique directe et une estimation précise.',
    'calculator.back': '← Retour',
    'calculator.next': 'Continuer →',
    'calculator.submit': 'Envoyer via WhatsApp',

    // Patient Journey
    'journey.title': 'Le Parcours Patient DHI Antalya',
    'journey.subtitle': 'Comment nos patients internationaux vivent leur séjour médical.',
    'journey.step1.title': 'Accueil VIP Aéroport',
    'journey.step1.desc': 'Un chauffeur privé vous accueille à l\'aéroport d\'Antalya en Mercedes Vito et vous conduit à l\'hôtel.',
    'journey.step2.title': 'Consultation Clinique',
    'journey.step2.desc': 'Évaluation du cuir chevelu, tracé de la ligne frontale et bilans sanguins dans notre clinique partenaire agréée.',
    'journey.step3.title': 'Jour de la Procédure DHI',
    'journey.step3.desc': 'Extraction et implantation DHI réalisées par des spécialistes chirurgicaux certifiés.',
    'journey.step4.title': 'Premier Lavage & Suivi',
    'journey.step4.desc': 'Démonstration du premier lavage, remise du kit de soin et transfert de retour.',

    // Disclaimer & Footer
    'disclaimer.text': 'MENTIONS LÉGALES: Cette plateforme est un portail indépendant d\'information et de coordination pour les patients internationaux. Toutes les interventions chirurgicales sont réalisées exclusivement par des médecins spécialistes certifiés dans des établissements de santé partenaires agréés par le Ministère de la Santé de Turquie.',
    'footer.rights': 'Tous Droits Réservés',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',

    // Mobile CTA
    'mobile_cta.whatsapp': 'Conseiller WhatsApp',
    'mobile_cta.analysis': 'Analyse Gratuite',
    'mobile_cta.free_analysis': 'Analyse Gratuite'
  },
  tr: {
    // Nav
    'nav.consultation': 'Ön Analiz Talep Edin',
    'nav.freeConsultation': 'Ön Analiz Talep Edin',
    'nav.home': 'Ana Sayfa',
    'nav.packages': 'Paketler',
    'nav.process': 'Sürecimiz',
    'nav.team': 'Medikal Ekip',
    'nav.results': 'Hasta Deneyimi',
    'nav.contact': 'İletişim',
    
    // Hero Section
    'hero.title': 'Antalya\'da VIP DHI Saç Ekimi Deneyimi',
    'hero.subtitle': 'Avrupa\'dan Gelen Hastalar İçin VIP Transfer, Otel Konaklaması ve Medikal Koordinasyon Dahil Kişiye Özel Tedavi Planı.',
    'hero.badge1': 'Trustpilot & Google Üzerinde 4.9/5 Puan',
    'hero.badge2': 'Ruhsatlı Anlaşmalı Sağlık Kuruluşları & Koordinasyon',
    'hero.badge3': 'VIP Transfer & Otel Konaklaması',
    'hero.fromPrice': '90.000 TL\'den',
    'hero.cta_whatsapp': 'WhatsApp ile Ön Değerlendirme Alın',
    'hero.whatsappCTA': 'WhatsApp ile Ön Değerlendirme Alın',
    'hero.cta_analysis': 'Saç Analizi Talep Edin',
    'hero.analysisCTA': 'Saç Analizi Talep Edin',
    'hero.ministryBadge': 'Tüm Operasyonlar T.C. Sağlık Bakanlığı Ruhsatlı Anlaşmalı Sağlık Kuruluşlarında Yapılmaktadır',

    // Hero Visual Tags
    'hero.vtag1': 'Uluslararası Hasta Koordinasyonu',
    'hero.vtag2': 'İngilizce & Fransızca Destek',
    'hero.vtag3': 'Antalya VIP Sağlık Turizmi',
    'hero.vtag4': '12 Ay Medikal Takip Protokolü',

    // Trust Band
    'trust.certified': 'T.C. Sağlık Bakanlığı Ruhsatlı Anlaşmalı Sağlık Kuruluşları',
    'trust.warranty': '12 Ay Medikal Takip ve Destek',
    'trust.vip_transfer': 'VIP Mercedes Havaalanı & Klinik Transferi',
    'trust.aftercare': 'Aktif WhatsApp Hasta Destek Hattı',

    // Medical Team Section
    'team.title': 'Medikal & Koordinasyon Ekibimiz',
    'team.subtitle': 'Antalya\'daki DHI tedavi yolculuğunuza rehberlik eden uzman medikal kadro ve uluslararası hasta koordinatörleri.',
    'team.member1.role': 'Saç Ekimi Ekibi',
    'team.member1.exp': '12+ Yıl Klinik Deneyim',
    'team.member1.desc': 'Ruhsatlı kliniklerde Choi Pen DHI implantasyonu, doğal ön saç çizgisi tasarımı ve yüksek yoğunluklu ekimde uzmanlaşmıştır.',
    'team.member2.role': 'Uluslararası Hasta Koordinatörü',
    'team.member2.exp': 'Çok Dilli Koordinasyon (EN/FR/TR)',
    'team.member2.desc': 'Uçuş seyahat programınızı, VIP Mercedes Vito transferlerinizi ve otel konaklamanızı organize eder.',
    'team.member3.role': 'Operasyon Sonrası Takip Sorumlusu',
    'team.member3.exp': 'Operasyon Sonrası Bakım Uzmanı',
    'team.member3.desc': 'İlk yıkamanızı yaptırır, bakım kitinizi teslim eder ve her ay saç uzama gelişiminizi takip eder.',

    // Competitor Features
    'competitor.title': 'Her Operasyona Dahil Medikal Standartlarımız',
    'competitor.subtitle': 'Avrupa ve Türkiye\'nin en prestijli klinik standartlarını hiçbir gizli maliyet olmadan eksiksiz sunuyoruz.',
    'competitor.f1.title': 'İğnesiz Konforlu Anestezi',
    'competitor.f1.desc': 'ComfortIn yüksek basınçlı püskürtme anestezi sistemi ile konforlu lokal anestezi.',
    'competitor.f2.title': '%98+ Greft Canlılık Oranı',
    'competitor.f2.desc': 'Toplanan saç kökleri özel HypoThermosol besleyici ATP solüsyonunda muhafaza edilerek %98+ tutunma sağlanır.',
    'competitor.f3.title': 'PRP ve Mezoterapi Protokolü',
    'competitor.f3.desc': 'Kendi kanınızdan hazırlanan PRP ve mezoterapi seansı ile hızlı doku iyileşmesi ve kök beslenmesi.',
    'competitor.f4.title': 'Trikolojik Saç Derisi Haritalama',
    'competitor.f4.desc': 'Choi Pen implantasyon öncesi mikroskobik saç derisi esnekliği ve donör alan yoğunluk haritalaması.',

    // Advantages Section Keys
    'advantages.title': 'Neden DHI Choi Pen Teknolojisi?',
    'advantages.subtitle': 'Choi Implanter Pen ile kanal açmadan doğrudan implantasyon, yüksek yoğunluk ve doğal görünüm.',
    'advantages.items.no_shave.title': 'Tıraşsız Ekim Seçeneği',
    'advantages.items.no_shave.description': 'Mevcut saç yapısını korumak isteyenler için idealdir. Ekim alanı tamamen tıraş edilmeden implantasyon gerçekleştirilebilir.',
    'advantages.items.natural_angle.title': 'Doğal Açı ve Yön Hassasiyeti',
    'advantages.items.natural_angle.description': 'Choi Implanter Pen sayesinde her bir saç kökünün derinliği, çıkış açısı ve yönü 360 derece hassasiyetle kontrol edilir.',
    'advantages.items.high_density.title': 'Maksimum Greft Yoğunluğu',
    'advantages.items.high_density.description': 'Kanal açma nekröz riski oluşturmadığı için cm² başına 80 grefe kadar sık ve doğal implantasyon imkanı sunar.',
    'advantages.items.fast_recovery.title': 'Hızlı Deri İyileşmesi',
    'advantages.items.fast_recovery.description': 'Minimum doku travması sayesinde kanama ve kabuklanma son derece az olur; 3-5 gün içinde hızlı deride iyileşme sağlanır.',

    // Process Timeline
    'process.title': 'Size Özel DHI Süreci',
    'process.subtitle': 'İlk iletişiminizden tam saç gelişimine kadar 4 şeffaf adım.',
    'process.step1.num': '01',
    'process.step1.title': 'Online Ön Analiz',
    'process.step1.desc': 'Fotoğraflarınızı WhatsApp üzerinden iletin; uzman koordinasyon ekibimiz greft miktarınızı ve uygunluğunuzu ücretsiz analiz etsin.',
    'process.step2.num': '02',
    'process.step2.title': 'Kişisel Tedavi Planı',
    'process.step2.desc': 'Şeffaf fiyatlandırma, paket detayları ve Antalya ziyaret seyahat programınızı içeren özel teklifinizi alın.',
    'process.step3.num': '03',
    'process.step3.title': 'Antalya Operasyon Süreci',
    'process.step3.desc': 'VIP Mercedes karşılama, otel konaklaması ve steril hastane ortamında sertifikalı cerrahlarca konforlu DHI operasyonu.',
    'process.step4.num': '04',
    'process.step4.title': 'Sonrası Bakım & Medikal Takip',
    'process.step4.desc': 'Medikal yıkama eğitimi, bakım kiti teslimi ve sorularınız için aktif WhatsApp destek hattımız her zaman yanınızda.',

    // Packages
    'packages.title': 'Şeffaf DHI Paketleri',
    'packages.subtitle': 'Gizli maliyet olmadan Antalya\'da dünya standartlarında medikal bakım.',
    'packages.standard_name': 'Standard DHI',
    'packages.standard_title': 'Standard DHI',
    'packages.standard_desc': 'Operasyon Odaklı Paket (Yerel & kendi organizasyonunu yapan hastalar için)',
    'packages.standard_includes': 'Ruhsatlı Hastanede DHI Operasyonu (Maksimum Greft)|İğnesiz Konforlu Anestezi|İlaçlar & Özel Şampuan Bakım Kiti|12 Ay Medikal Takip Protokolü|Aktif WhatsApp Destek Hattı',
    'packages.vip_name': 'VIP Antalya Experience',
    'packages.vip_title': 'VIP Antalya Experience',
    'packages.vip_desc': 'Türkiye Deneyimi + Konfor Paketi (VIP Transfer & Otel Konaklaması Dahil)',
    'packages.vip_popular': 'En Çok Tercih Edilen',
    'packages.vip_includes': 'Ruhsatlı Hastanede Tam DHI Operasyonu|VIP Mercedes Vito Havaalanı & Klinik Transferleri|1 Gece Otel Konaklaması|Çok Dilli Hasta Koordinatörü (TR/EN/FR)|PRP & Mezoterapi Seansı|12 Ay Özel Medikal Takip',
    'packages.book_cta': 'Klinik Değerlendirme Talep Edin',

    // Calculator / Wizard Form Keys
    'calculator.title': 'Saç Yoğunluk Analizi',
    'calculator.step_label': 'ADIM',
    'calculator.of': '/',
    'calculator.step1': 'Saç Dökülme Seviyenizi Seçin',
    'calculator.step1_desc': 'Mevcut saç dökülme durumunuza en yakın Norwood seviyesini seçin.',
    'calculator.step2': 'DHI Paket Tercihinizi Belirleyin',
    'calculator.step2_desc': 'Antalya seyahatinize uygun paket seçeneğini belirleyin.',
    'calculator.step3': 'Doktor Değerlendirmesi ve İletişim',
    'calculator.step3_title': 'Ön değerlendirme için bilgilerinizi iletin.',
    'calculator.name_label': 'Adınız Soyadınız *',
    'calculator.name_placeholder': 'Adınızı ve soyadınızı giriniz',
    'calculator.country_label': 'Ülke *',
    'calculator.phone_label': 'WhatsApp Telefon Numarası *',
    'calculator.phone_placeholder': 'Numaranızı giriniz',
    'calculator.wa_info': 'Kafa derisi fotoğraflarınızı WhatsApp üzerinden göndererek uzman ekibimizden doğrudan greft analizi ve kişisel teklif alın.',
    'calculator.back': '← Geri',
    'calculator.next': 'Devam Et →',
    'calculator.submit': 'WhatsApp ile İletin',

    // Patient Journey
    'journey.title': 'Antalya DHI Deneyimi',
    'journey.subtitle': 'Uluslararası hastalarımızın Antalya\'daki tedavi yolculuğu.',
    'journey.step1.title': 'VIP Havaalanı Karşılama',
    'journey.step1.desc': 'Özel şoförünüz Antalya Havalimanı\'nda sizi Mercedes Vito ile karşılar ve otelinize transfer eder.',
    'journey.step2.title': 'Klinik Muayenesi',
    'journey.step2.desc': 'Anlaşmalı uzman kliniğimizde doktor muayenesi, ön saç çizgisi çizimi ve kan tahlilleri.',
    'journey.step3.title': 'Choi Pen DHI Operasyonu',
    'journey.step3.desc': 'Steril hastane ortamında ağrısız Choi Pen teknolojisi ile konforlu DHI ekim operasyonu.',
    'journey.step4.title': 'İlk Yıkama & Takip',
    'journey.step4.desc': 'Klinikte medikal saç yıkama eğitimi, bakım kiti teslimi ve havalimanına VIP dönüş transferi.',

    // Disclaimer & Footer
    'disclaimer.text': 'YASAL BİLGİLENDİRME: Bu web sitesi bağımsız bir uluslararası hasta bilgilendirme ve koordinasyon portalıdır. Sitede yer alan tüm cerrahi ve tıbbi operasyonlar T.C. Sağlık Bakanlığı tarafından ruhsatlandırılmış anlaşmalı A++ sağlık kuruluşlarında uzman hekim ve cerrahlar tarafından gerçekleştirilmektedir.',
    'footer.rights': 'Tüm Hakları Saklıdır',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Şartları',

    // Mobile CTA
    'mobile_cta.whatsapp': 'WhatsApp Destek',
    'mobile_cta.analysis': 'Ön Analiz',
    'mobile_cta.free_analysis': 'Ön Analiz'
  }
} as const;

export function t(lang: Lang, key: string): string {
  const dict = translations[lang] as Record<string, string>;
  const fallback = translations['en'] as Record<string, string>;
  return dict?.[key] || fallback?.[key] || key;
}
