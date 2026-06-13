"use client";

import { useEffect, useState } from "react";
import EmergencyBanner from "./components/EmergencyBanner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import SarianStory from "./components/SarianStory";
import WhatWeDo from "./components/WhatWeDo";
import ArtVisibility from "./components/ArtVisibility";
import DonationWidget from "./components/DonationWidget";
import Footer from "./components/Footer";
import { Heart } from "lucide-react";

export default function Home() {
  const [showMobileSticky, setShowMobileSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("donate-section");
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        // Show mobile bar if donate section is out of screen view
        setShowMobileSticky(rect.bottom < 0 || rect.top > window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDonate = () => {
    const element = document.getElementById("donate-section");
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF8] font-sans antialiased selection:bg-terracotta/20 selection:text-terracotta">
      {/* 1. Alert / Incident Banner */}
      <EmergencyBanner />

      {/* 2. Navigation Header */}
      <Header />

      {/* 3. Hero Section */}
      <Hero />

      {/* Main Interactive Grid (Airbnb listing details grid layout) */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Columns (8 cols): Primary Page Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Core Mission */}
            <div className="border border-brand-gray-border bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Mission />
            </div>

            {/* Founder Host Story */}
            <div className="border border-brand-gray-border bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <SarianStory />
            </div>

            {/* Four Pillars of Action */}
            <div className="border border-brand-gray-border bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <WhatWeDo />
            </div>

            {/* Immersive Photo/Film Art Gallery */}
            <div className="rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <ArtVisibility />
            </div>

          </div>

          {/* Right Columns (4 cols): Sticky Airbnb Support Form */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 z-10">
            <div className="space-y-6">
              
              {/* The Floating Booking Widget */}
              <DonationWidget />

              {/* Auxiliary Quick Information Card */}
              <div className="bg-[#FFF2F0] border border-brand-gray-border p-5 rounded-2xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-terracotta mb-2">UK & Sierra Leone Partnership</h4>
                <p className="text-[11px] text-zinc-600 leading-relaxed">
                  Our advocacy program combines grassroots zero-tolerance campaigns in Sierra Leone with clinical counselor circles in South East London.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Mobile Sticky Bottom Bar (Replicating Airbnb's mobile booking drawer) */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-white border-t border-brand-gray-border py-3 px-6 z-30 flex items-center justify-between shadow-2xl transition-all duration-300 md:hidden ${
          showMobileSticky ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div>
          <span className="block text-xs font-extrabold text-zinc-900">Support KDLK</span>
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Honor the Culture</span>
        </div>
        
        <button
          onClick={scrollToDonate}
          className="inline-flex items-center gap-1.5 bg-terracotta hover:bg-terracotta-dark text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md cursor-pointer transition-colors"
        >
          <Heart className="h-3.5 w-3.5 fill-white" />
          Donate Now
        </button>
      </div>

    </div>
  );
}
