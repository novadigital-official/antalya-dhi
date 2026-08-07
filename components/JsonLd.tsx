export default function JsonLd() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalClinic', 'LocalBusiness'],
        '@id': 'https://antalyadhi.com/#clinic',
        'name': 'Antalya DHI Hair Transplant & Medical Tourism Portal',
        'image': 'https://antalyadhi.com/favicon.svg',
        'url': 'https://antalyadhi.com',
        'telephone': '+905551234567',
        'priceRange': '£1550 - £2050',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Muratpaşa Sağlık Turizmi Bölgesi',
          'addressLocality': 'Antalya',
          'addressRegion': 'Antalya',
          'postalCode': '07100',
          'addressCountry': 'TR',
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 36.8848,
          'longitude': 30.7056,
        },
        'medicalSpecialty': 'Dermatology & Hair Restoration',
        'healthPlanNetworkId': 'T.C. Ministry of Health Authorization Ref: AK-84920',
      },
      {
        '@type': 'MedicalProcedure',
        '@id': 'https://antalyadhi.com/#dhi-procedure',
        'name': 'Direct Hair Implantation (DHI)',
        'procedureType': 'SurgicalProcedure',
        'bodyLocation': 'Scalp',
        'description': 'Direct Hair Implantation using Choi Implanter Pen for maximum density and natural hair direction without shaving the recipient area.',
        'howItIsPerformed': 'Single graft extraction followed by immediate direct implantation using 0.6mm-0.8mm Choi Pens.',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://antalyadhi.com/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Antalya’da DHI saç ekimi fiyatları ne kadar?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Antalya’da DHI saç ekimi paket fiyatları 90.000 TL (Standart DHI) ile 110.000 TL (VIP Antalya Experience) arasında değişmektedir. VIP paket 1 gece otel konaklaması, VIP Mercedes transfer ve operasyon sonrası takibi içerir.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What is the price of DHI hair transplant in Antalya, Turkey?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'DHI hair transplant package rates in Antalya start from £1,550 (€1,800) for Standard DHI and £1,900 (€2,200) for VIP All-Inclusive Experience including 4-star hotel stay, VIP Mercedes transfers, and personal native coordinator.',
            },
          },
          {
            '@type': 'Question',
            'name': 'DHI ve FUE saç ekimi arasındaki fark nedir?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'DHI yönteminde Choi Implanter Pen kalemi kullanılarak önceden neşterle kanal açılmadan greftler doğrudan ekilir. FUE yönteminde ise önce neşter veya safir uçla kanallar açılır, ardından greftler pensetle yerleştirilir. DHI daha sık ekim imkanı ve hızlı iyileşme sağlar.',
            },
          },
          {
            '@type': 'Question',
            'name': 'DHI saç ekiminde tıraş zorunlu mu?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Hayır, DHI tekniği alıcı alanda tamamen tıraşsız ekim imkanı sunar. Sadece donör alandaki küçük bölge tıraş edilerek işlem gerçekleştirilebilir.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
