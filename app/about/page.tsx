"use client";

import Image from "next/image";
import EmergencyBanner from "../components/EmergencyBanner";
import Header from "../components/Header";
import DonationWidget from "../components/DonationWidget";
import Footer from "../components/Footer";
import { Shield, Sparkles, Award, Users, BookOpen, Music, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF8] font-sans antialiased selection:bg-terracotta/20 selection:text-terracotta">
      {/* 1. Dismissible Alert Banner */}
      <EmergencyBanner />

      {/* 2. Navigation Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page Title & Intro */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
            Our Story & Movement
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-950">
            ABOUT US: OUR STORY & MOVEMENT
          </h1>
        </div>

        {/* 2-Column Split Grid (Content + Donation Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Columns (8 cols): Primary Page Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Section 1: Who We Are (The Identity) */}
            <section className="bg-white border border-brand-gray-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta mb-4">
                <Users className="h-4 w-4" /> 1. Who We Are
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 mb-4">
                The Identity
              </h2>
              <p className="text-zinc-650 text-sm sm:text-base leading-relaxed">
                Keep the Drums, Lose the Knife (KDLK) is a London-based, survivor-led Community Interest Company (CIC) dedicated to ending Female Genital Mutilation (FGM). Led by activist Sarian Karim-Kamara, we operate at the intersection of cultural preservation and human rights. We work within West African diaspora communities in the UK and grassroots societies in Sierra Leone to protect the girl child, dismantle systemic trauma, and celebrate African heritage safely.
              </p>
            </section>

            {/* Section 2: Our Unique Approach: Culture Over Trauma */}
            <section className="bg-white border border-brand-gray-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-dark mb-4">
                <Sparkles className="h-4 w-4 text-gold" /> 2. Our Unique Approach
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 mb-2">
                Culture Over Trauma
              </h2>
              <p className="text-zinc-500 text-xs mb-6">
                We do not ask communities to abandon their history. Instead, we advocate for Alternative Rites of Passage (ARP).
              </p>

              {/* Side-by-side or Stacked cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Keep the Drums */}
                <div className="bg-brand-light border border-brand-gray-border p-6 rounded-2xl flex flex-col">
                  <div className="h-10 w-10 bg-terracotta/10 text-terracotta rounded-xl flex items-center justify-center text-lg mb-4 shrink-0 font-bold">
                    🥁
                  </div>
                  <h3 className="text-base font-extrabold text-zinc-950 mb-2">We Keep the Drums</h3>
                  <p className="text-xs text-zinc-650 leading-relaxed flex-1">
                    We honor, protect, and elevate the rich music, sisterhood, and cultural pride of the traditional Sierra Leonean Bondo society.
                  </p>
                </div>

                {/* Lose the Knife */}
                <div className="bg-brand-light border border-brand-gray-border p-6 rounded-2xl flex flex-col">
                  <div className="h-10 w-10 bg-zinc-900/10 text-zinc-900 rounded-xl flex items-center justify-center text-lg mb-4 shrink-0 font-bold">
                    ❌🔪
                  </div>
                  <h3 className="text-base font-extrabold text-zinc-950 mb-2">We Lose the Knife</h3>
                  <p className="text-xs text-zinc-650 leading-relaxed flex-1">
                    We work systematically to completely remove the practice of cutting, replacing physical harm with education, mentorship, and health awareness.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Our Founder’s Journey */}
            <section className="bg-white border border-brand-gray-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta mb-4">
                <BookOpen className="h-4 w-4" /> 3. Our Founder’s Journey
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 mb-4">
                From Lived Experience to Leadership
              </h2>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative h-24 w-24 rounded-full overflow-hidden border border-brand-gray-border shrink-0 self-center md:self-start">
                  <Image
                    src="/sarian_portrait.png"
                    alt="Sarian Karim-Kamara portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed">
                    KDLK was born out of the lived experience of Sarian Karim-Kamara. Subjected to FGM at age 11 in Sierra Leone, Sarian later faced a life-threatening, four-day labor in a London hospital due to severe internal scar tissue. This harrowing experience sparked a lifelong commitment to advocacy.
                  </p>
                  <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed">
                    Equipped with a degree in Community Development and a deep understanding of her culture, Sarian began using her African food market in Peckham, South East London, as a grassroots sanctuary. Today, her survivor-led model bridges local community trust with international policy change.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Our Multi-Layered Impact */}
            <section className="bg-white border border-brand-gray-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4">
                <Shield className="h-4 w-4" /> 4. Our Multi-Layered Impact
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 mb-2">
                Shifting Mindsets Globally
              </h2>
              <p className="text-zinc-500 text-xs mb-6">
                Our work spans across borders, shifting mindsets from South London to rural Sierra Leone:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Impact 1 */}
                <div className="p-5 border border-brand-gray-border rounded-2xl hover:bg-brand-light transition-colors">
                  <span className="text-[10px] font-extrabold uppercase text-terracotta tracking-wider block mb-1">Sierra Leone</span>
                  <h4 className="text-sm font-extrabold text-zinc-950 mb-1.5">Community Trust</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Successfully engaged and persuaded 7 out of 19 local communities in Sierra Leone to adopt bloodless initiation ceremonies.
                  </p>
                </div>

                {/* Impact 2 */}
                <div className="p-5 border border-brand-gray-border rounded-2xl hover:bg-brand-light transition-colors">
                  <span className="text-[10px] font-extrabold uppercase text-gold-dark tracking-wider block mb-1">United Kingdom</span>
                  <h4 className="text-sm font-extrabold text-zinc-950 mb-1.5">Survivor Sanctuaries</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Hosting bi-weekly, trauma-informed support groups in the UK to help survivors heal from unspoken psychological and physical trauma.
                  </p>
                </div>

                {/* Impact 3 */}
                <div className="p-5 border border-brand-gray-border rounded-2xl hover:bg-brand-light transition-colors">
                  <span className="text-[10px] font-extrabold uppercase text-zinc-500 tracking-wider block mb-1">Public Policy</span>
                  <h4 className="text-sm font-extrabold text-zinc-950 mb-1.5">Institutional Shift</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Partnering with the UK Home Office to train teachers, healthcare workers, and the Metropolitan Police to recognize and prevent FGM risks.
                  </p>
                </div>

                {/* Impact 4 */}
                <div className="p-5 border border-brand-gray-border rounded-2xl hover:bg-brand-light transition-colors">
                  <span className="text-[10px] font-extrabold uppercase text-zinc-500 tracking-wider block mb-1">Art & Culture</span>
                  <h4 className="text-sm font-extrabold text-zinc-950 mb-1.5">Global Visibility</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Championing cultural healing on global platforms, including creative collaborations showcased at the Institute of Contemporary Arts (ICA) London.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Recognized Leadership */}
            <section className="bg-white border border-brand-gray-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4">
                <Award className="h-4 w-4" /> 5. Recognized Leadership
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 mb-2">
                Honors & Backing
              </h2>
              <p className="text-zinc-500 text-xs mb-6">
                Our innovative approach to human rights has earned critical institutional backing and honors:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-light border border-brand-gray-border">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-extrabold text-zinc-900">UK Prime Minister’s Points of Light Award</h4>
                    <p className="text-xs text-zinc-500 mt-1">Recognized for outstanding community service and activist leadership.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-light border border-brand-gray-border">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-extrabold text-zinc-900">Queen’s Baton Relay Official Batonbearer</h4>
                    <p className="text-xs text-zinc-500 mt-1">Selected as an official batonbearer representing grassroots community action.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-light border border-brand-gray-border">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-extrabold text-zinc-900">International Planned Parenthood Federation (IPPF) Partnership</h4>
                    <p className="text-xs text-zinc-500 mt-1">Maintaining continuous collaboration to protect girls and advocate globally.</p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Right Columns (4 cols): Sticky Airbnb Support Form */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 z-10">
            <div className="space-y-6">
              <DonationWidget />

              <div className="bg-[#FFF2F0] border border-brand-gray-border p-5 rounded-2xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-terracotta mb-2">Join Our Cause</h4>
                <p className="text-[11px] text-zinc-650 leading-relaxed">
                  Support alternative, bloodless rituals that protect children without erasing West African Bondo society tradition.
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
