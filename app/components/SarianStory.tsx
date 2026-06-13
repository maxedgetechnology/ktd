"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShieldCheck, MessageSquare, Award, Heart, BookOpen } from "lucide-react";

export default function SarianStory() {
  const router = useRouter();

  return (
    <section id="sarian" className="py-16 sm:py-24 bg-brand-light border-b border-brand-gray-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Host Profile Title */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">Meet Your Host</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-none">
            The Story of Sarian Karim-Kamara
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Airbnb Host Card (Columns 1-4) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="w-full max-w-sm bg-white border border-brand-gray-border rounded-[2.5rem] p-6 shadow-lg relative">
              {/* Verified Icon badge */}
              <div className="absolute right-6 top-6 bg-terracotta text-white rounded-full p-1.5 shadow-md">
                <ShieldCheck className="h-5 w-5 fill-white text-terracotta" />
              </div>

              {/* Photo */}
              <div className="flex flex-col items-center text-center">
                <div className="relative h-28 w-28 rounded-full overflow-hidden border-2 border-brand-gray-border mb-4">
                  <Image
                    src="/Screenshot 2026-06-08 222753.png"
                    alt="Sarian Karim-Kamara portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-extrabold text-zinc-900">Sarian Karim-Kamara</h3>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">Founder & Survivor-Leader</p>
              </div>

              {/* Stats Block (like Airbnb Host Stats) */}
              <div className="grid grid-cols-3 gap-2 border-y border-brand-gray-border py-4 my-5 text-center">
                <div>
                  <p className="text-lg font-extrabold text-zinc-900">11</p>
                  <p className="text-[9px] text-zinc-500 font-bold uppercase">Age Cut</p>
                </div>
                <div className="border-x border-brand-gray-border">
                  <p className="text-lg font-extrabold text-terracotta">0%</p>
                  <p className="text-[9px] text-zinc-500 font-bold uppercase">Tolerance</p>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-zinc-900">UK</p>
                  <p className="text-[9px] text-zinc-500 font-bold uppercase">PM Award</p>
                </div>
              </div>

              {/* Verified details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-zinc-700">
                  <MessageSquare className="h-4.5 w-4.5 text-zinc-400 shrink-0" />
                  <span>Grassroots sanctuary creator</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-700">
                  <Award className="h-4.5 w-4.5 text-zinc-400 shrink-0" />
                  <span>Points of Light Recipient</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-700">
                  <Heart className="h-4.5 w-4.5 text-zinc-400 shrink-0" />
                  <span>Advocating Zero Tolerance</span>
                </div>
              </div>
            </div>

            {/* Founder Quote */}
            <div className="mt-6 text-center max-w-sm px-4">
              <p className="text-base font-serif italic text-zinc-700 leading-relaxed">
                "Educating young women about their rights is key to forging a better future."
              </p>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mt-2.5">
                — Sarian Karim-Kamara
              </p>
            </div>
          </div>

          {/* Right Column: Host Bio & Details (Columns 5-12) */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold text-zinc-900 mb-4">About Your Host</h3>
              <p className="text-zinc-650 leading-relaxed text-base">
                Sarian created KDLK to reconcile her deep love for her Sierra Leonean culture with the urgent necessity to protect young girls. Through grassroots activism, she addresses FGM with understanding, dialogue, and a firm stance on total abolition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Catalyst detail */}
              <div className="border border-brand-gray-border bg-white p-6 rounded-2xl">
                <span className="text-[10px] font-bold text-terracotta uppercase tracking-wider block mb-1">The Catalyst</span>
                <h4 className="text-base font-bold text-zinc-900 mb-2">A Pivotal Awakening</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  After surviving FGM at age 11, Sarian endured a critical four-day labor due to internal scar tissue. This personal trauma sparked her lifelong mission to save the next generation from the knife.
                </p>
              </div>

              {/* Hub detail */}
              <div className="border border-brand-gray-border bg-white p-6 rounded-2xl">
                <span className="text-[10px] font-bold text-gold-dark uppercase tracking-wider block mb-1">The Hub</span>
                <h4 className="text-base font-bold text-zinc-900 mb-2">Peckham Grassroots Sanctuary</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  From her African food market in Peckham, South East London, Sarian created a safe sanctuary for multicultural dialogue, counselor advice, and survivor peer support circles.
                </p>
              </div>

              {/* Impact detail */}
              <div className="border border-brand-gray-border bg-white p-6 rounded-2xl">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">The Impact</span>
                <h4 className="text-base font-bold text-zinc-900 mb-2">Zero Tolerance Advocacy</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Her community-led framework demands a complete and unconditional end to FGM (the Bondo practice), mobilizing communities to reject the ritual entirely.
                </p>
              </div>

              {/* Recognition detail */}
              <div className="border border-brand-gray-border bg-white p-6 rounded-2xl">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">Recognition</span>
                <h4 className="text-base font-bold text-zinc-900 mb-2">Points of Light Award</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Her innovative advocacy earned the prestigious UK Prime Minister’s Points of Light Award and established continuous partnerships with university researchers and global policy makers.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => router.push("/meet-the-founder")}
                className="inline-flex items-center gap-2 text-zinc-950 font-bold border-2 border-zinc-800 hover:bg-zinc-950 hover:text-white px-6 py-3 rounded-xl transition-all text-sm cursor-pointer shadow-sm"
              >
                <BookOpen className="h-4.5 w-4.5" />
                Read Sarian's Full Story
              </button>

              <a
                href="https://web.facebook.com/amplifychange/videos/sarian-karim-kamara-from-keep-the-drums-lose-the-knife/1014483619363063/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white bg-terracotta hover:bg-terracotta-dark font-bold px-6 py-3 rounded-xl transition-all text-sm cursor-pointer shadow-sm"
              >
                <span className="text-sm">▶</span>
                Watch Interview Video
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
