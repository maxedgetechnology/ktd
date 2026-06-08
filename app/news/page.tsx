"use client";

import EmergencyBanner from "../components/EmergencyBanner";
import Header from "../components/Header";
import NewsHero from "../components/NewsHero";
import NewsGrid from "../components/NewsGrid";
import DonationWidget from "../components/DonationWidget";
import Footer from "../components/Footer";

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF8] font-sans antialiased selection:bg-terracotta/20 selection:text-terracotta">
      {/* 1. Alert Banner */}
      <EmergencyBanner />

      {/* 2. Navigation Header */}
      <Header />

      {/* Main Content Layout */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page title section */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
            KDLK Press & Media
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-950">
            News & Community Highlights
          </h1>
          <p className="mt-2.5 text-zinc-500 text-sm max-w-xl">
            Stay informed about our grassroots activities in Sierra Leone, diaspora healing circles in London, and advocacy recognition worldwide.
          </p>
        </div>

        {/* Column Grid (News + Donation Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Columns (8 cols): News Showcase */}
          <div className="lg:col-span-8 space-y-12">
            {/* Featured Story */}
            <NewsHero />

            {/* List Grid */}
            <NewsGrid />
          </div>

          {/* Right Columns (4 cols): Sticky Support card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 z-10">
            <div className="space-y-6">
              <DonationWidget />
              
              <div className="bg-white border border-brand-gray-border p-5 rounded-2xl shadow-sm">
                <h4 className="text-xs font-bold text-zinc-950 mb-2">Our Campaign Integrity</h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  We are survivor-founded and survivor-led. We coordinate directly with local Soweis (Bondo Society initiators) in Sierra Leone to achieve permanent, voluntary reform.
                </p>
              </div>
            </div>
          </div>

        </div>

      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
