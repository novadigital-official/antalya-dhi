'use client';

import { use } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { SiteProvider } from '@/lib/context';
import { BLOG_POSTS } from '@/lib/blogData';

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug) || BLOG_POSTS[0];

  return (
    <SiteProvider>
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans relative">
        <Navbar />

        <article className="pt-32 pb-16">
          <header className="bg-slate-900 text-white py-16 px-4">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex items-center gap-3 text-xs font-extrabold text-slate-300">
                <Link href="/blog" className="text-amber-400 hover:underline">← All Medical Guides</Link>
                <span>•</span>
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                {post.title}
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm font-medium">
                Published by Antalya DHI Medical Tourism Advisory Board | {post.date}
              </p>
            </div>
          </header>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
            <div
              className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* High-Conversion CTA Card inside every Blog Post */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-4 shadow-xl text-center">
              <span className="inline-block bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                FREE MEDICAL CONSULTATION
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Get Your Free DHI Hair Analysis & Custom Quote
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-medium">
                Send your scalp photos via WhatsApp for an immediate graft estimation by our surgical specialists.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  href="/#analysis-wizard"
                  className="w-full sm:w-auto min-h-[48px] px-8 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs rounded-xl flex items-center justify-center shadow-md"
                >
                  Ücretsiz Saç Analizi Al
                </Link>
                <a
                  href="https://wa.me/905551234567?text=Hello,%20I%20read%20your%20blog%20article%20and%20would%20like%20a%20free%20hair%20analysis."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[48px] px-8 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl flex items-center justify-center shadow-md"
                >
                  💬 WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </article>

        <MedicalDisclaimer />
        <Footer />
      </main>
    </SiteProvider>
  );
}
