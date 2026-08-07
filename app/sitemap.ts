import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://antalyadhi.com';

  const blogPosts = [
    'antalya-dhi-sac-ekimi-fiyatlari-2026',
    'dhi-hair-transplant-turkey-guide',
    'uk-patients-guide-antalya-hair-transplant',
    'how-many-grafts-do-i-need',
    'dhi-vs-fue-hair-transplant',
    'antalya-sac-ekimi-en-iyi-zaman',
  ];

  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const landingPages = [
    'antalya-dhi-hair-transplant',
    'dhi-vs-fue',
    'hair-transplant-cost-turkey-2026',
    'uk-hair-transplant-turkey',
    'fr-greffe-cheveux-turquie',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...landingPages,
    ...blogUrls,
  ];
}
