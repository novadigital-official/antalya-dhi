'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { SiteProvider } from '@/lib/context';
import { BLOG_POSTS } from '@/lib/blogData';

export default function BlogListPage() {
  return (
    <SiteProvider>
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans relative">
        <Navbar />

        <section className="pt-32 pb-16 bg-slate-900 text-white px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="inline-block bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              DHI MEDICAL & PATIENT KNOWLEDGE BASE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white">
              Antalya DHI Hair Transplant Blog & Medical Guides
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium">
              Expert guides on DHI technology, 2026 pricing, Norwood graft scale, and health tourism in Antalya.
            </p>
          </div>
        </section>

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-3">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-black">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-lg font-black text-slate-900 mb-2 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-black text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    Read Guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <MedicalDisclaimer />
        <Footer />
      </main>
    </SiteProvider>
  );
}
