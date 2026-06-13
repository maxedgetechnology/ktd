"use client";

import Image from "next/image";
import { ArrowRight, Play, Heart } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
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
    <section className="relative overflow-hidden bg-brand-light py-12 sm:py-20 lg:py-24 border-b border-brand-gray-border">
      {/* Decorative Warm Accent Gradients */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-12 -z-10 h-[300px] w-[300px] rounded-full bg-terracotta/5 blur-2xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content (Columns 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-terracotta-light text-terracotta px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider self-center lg:self-start mb-6 border border-terracotta/10 shadow-sm">
              <span>Zero Tolerance to FGM</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              Honor the Culture. <br className="hidden sm:inline" />
              <span className="text-terracotta">Protect the Girl Child.</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Empowering women, preserving West African heritage, and ending Female Genital Mutilation (FGM) through the healing power of traditional rhythm.
            </p>
            
            {/* Call to Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("donate-section")}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-terracotta to-[#FF4A3B] text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Heart className="h-5 w-5 fill-white" />
                Support Our Movement
              </button>
              
              <button
                onClick={() => scrollToSection("sarian")}
                className="inline-flex items-center justify-center gap-2 bg-white text-zinc-800 border-2 border-zinc-200 hover:border-zinc-800 px-8 py-4 rounded-xl text-base font-bold shadow-sm hover:shadow-md hover:bg-zinc-50 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Play className="h-4 w-4 fill-zinc-800" />
                Read Sarian’s Story
              </button>
            </div>

            {/* Video Link Highlight */}
            <div className="mt-4 text-xs font-semibold text-zinc-500 flex items-center justify-center lg:justify-start gap-1">
              <span>📽️ Watch the AmplifyChange feature:</span>
              <a
                href="https://web.facebook.com/amplifychange/videos/sarian-karim-kamara-from-keep-the-drums-lose-the-knife/1014483619363063/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta hover:underline hover:text-terracotta-dark flex items-center gap-0.5"
              >
                Sarian Karim-Kamara Interview Video ↗
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-200/60 grid grid-cols-3 gap-4 text-center lg:text-left max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-3xl font-extrabold text-terracotta">100%</p>
                <p className="text-xs text-zinc-500 font-semibold uppercase mt-1">Zero Tolerance Stance</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-zinc-900">Direct</p>
                <p className="text-xs text-zinc-500 font-semibold uppercase mt-1">Funding Impact</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gold">10k+</p>
                <p className="text-xs text-zinc-500 font-semibold uppercase mt-1">Advocacy Reach</p>
              </div>
            </div>
          </div>

          {/* Hero Image Showcase (Columns 8-12) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Photo Frame Effect */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white hover:rotate-1 hover:scale-[1.01] transition-all duration-500">
                <Image
                  src="/hero_drums.png"
                  alt="Traditional West African Bondo society drumming ceremony"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-light">Cultural Ceremony</p>
                  <p className="text-sm font-semibold mt-1 opacity-90">Preserving traditional drumming while eliminating the cutting knife.</p>
                </div>
              </div>
              
              {/* Little Floating Badge */}
              <div className="absolute -bottom-5 -right-5 bg-white border border-brand-gray-border p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce duration-1000 max-w-xs">
                <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-lg shrink-0">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-900">Zero Tolerance</p>
                  <p className="text-[10px] text-zinc-500 font-medium">Ending FGM, protecting girls.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
