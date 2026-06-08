"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, MessageSquare, Award, Heart, X, BookOpen } from "lucide-react";

export default function SarianStory() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                    src="/sarian_portrait.png"
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
                  <p className="text-lg font-extrabold text-terracotta">7/19</p>
                  <p className="text-[9px] text-zinc-500 font-bold uppercase">Communities</p>
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
                  <span>Advocating Alternative Rites</span>
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
              <p className="text-zinc-600 leading-relaxed text-base">
                Sarian created KDLK to reconcile her deep love for her Sierra Leonean culture with the urgent necessity to protect young girls. Through grassroots activism, she addresses FGM with understanding, dialogue, and alternative traditions.
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
                <h4 className="text-base font-bold text-zinc-900 mb-2">Alternative Rites of Passage</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Her community-led framework has successfully guided 7 out of 19 local communities in Sierra Leone to adopt bloodless rites of initiation, keeping drumming while eliminating cutting.
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

            <div className="pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 text-zinc-950 font-bold border-2 border-zinc-850 hover:bg-zinc-950 hover:text-white px-6 py-3 rounded-xl transition-all text-sm cursor-pointer shadow-sm"
              >
                <BookOpen className="h-4.5 w-4.5" />
                Read Sarian's Full Story
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Sarian's Full Story Modal (Airbnb style overlay) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content container */}
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative z-10 shadow-2xl animate-in zoom-in-95 duration-200 border border-brand-gray-border">
            
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-brand-gray-border px-6 py-4 flex items-center justify-between z-10">
              <h3 className="text-lg font-extrabold text-zinc-900">Sarian Karim-Kamara’s Journey</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-zinc-400 hover:text-zinc-800 p-1.5 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              <div className="relative h-60 w-full rounded-2xl overflow-hidden shadow-inner bg-zinc-100">
                <Image
                  src="/sarian_portrait.png"
                  alt="Sarian Karim-Kamara in London"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="prose prose-zinc max-w-none text-zinc-600 text-sm leading-relaxed space-y-4">
                <p>
                  Sarian Karim-Kamara’s story is one of profound resilience, transforming personal trauma into a global blueprint for cultural preservation and child protection.
                </p>
                <h4 className="text-zinc-900 font-extrabold text-base pt-2">The Catalyst of Activism</h4>
                <p>
                  At age 11, Sarian underwent Female Genital Mutilation in Sierra Leone as part of the traditional Bondo society rites of passage. The physical trauma of this cut manifested years later during child birth in the UK. She endured a critical, life-threatening four-day labor because internal scar tissue prevented normal delivery. 
                </p>
                <p>
                  Survivors of FGM often suffer in silence due to cultural taboo and trauma-reinforcing stigma. Surviving this labor became Sarian's awakening: she resolved to end the physical knife while preserving the spiritual beauty of her heritage.
                </p>
                <h4 className="text-zinc-900 font-extrabold text-base pt-2">The London Sanctuary: Peckham Market</h4>
                <p>
                  From her African food market in Peckham, South East London, Sarian began hosting casual conversations with West African mothers. This food hub transformed into a grassroots sanctuary. Mothers discussed cultural identity, family expectations, and the risks daughters faced during holiday trips abroad. She created a non-judgmental space for survivors to speak about unspoken physical and emotional trauma.
                </p>
                <h4 className="text-zinc-900 font-extrabold text-base pt-2">Sierra Leone Framework & International Impact</h4>
                <p>
                  Sarian knew that lectures from abroad would not change ancient rituals in Sierra Leone. She returned to work directly with the "Soweis"—the elder female leaders of the Bondo society who perform the initiations. 
                </p>
                <p>
                  Her framework separate the Bondo teachings (respect, community strength, motherhood transition, Bondo drumming) from the cutting ritual. Sarian provides alternative initiation support, funding ceremonies that celebrate girls' transitions without any cutting. To date, 7 out of 19 primary communities in Sierra Leone have adopted these bloodless rites.
                </p>
                <p>
                  Her tireless advocacy has led to her serving as an advisor to the UK Home Office, training frontline staff to protect girls at risk, and receiving the UK Prime Minister's Points of Light award.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-zinc-50 border-t border-brand-gray-border px-6 py-4 flex justify-between items-center">
              <span className="text-xs text-zinc-500 font-medium">Keep the Drums, Lose the Knife</span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-zinc-900 text-white font-bold text-xs px-4 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Close Story
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
