"use client";

import Image from "next/image";
import EmergencyBanner from "../components/EmergencyBanner";
import Header from "../components/Header";
import DonationWidget from "../components/DonationWidget";
import Footer from "../components/Footer";
import { User, Shield, BookOpen, Globe, Award, Quote } from "lucide-react";

export default function FounderPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF8] font-sans antialiased selection:bg-terracotta/20 selection:text-terracotta">
      {/* 1. Alert Banner */}
      <EmergencyBanner />

      {/* 2. Navigation Header */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Page Title */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
            Leadership & Vision
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 uppercase">
            Meet the Founder: Sarian Karim-Kamara
          </h1>
        </div>

        {/* 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column (8 cols): Founder Editorial Bio */}
          <div className="lg:col-span-8 space-y-12">

            {/* 1. Hero Introduction */}
            <section className="bg-white border border-brand-gray-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Sarian's portrait (4 cols) */}
                <div className="md:col-span-4 flex justify-center">
                  <div className="relative aspect-[3/4] w-full max-w-[200px] rounded-2xl overflow-hidden border border-brand-gray-border shadow-md bg-zinc-100">
                    <Image
                      src="/Screenshot 2026-06-08 222753.png"
                      alt="Sarian Karim-Kamara Portrait"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                </div>

                {/* Intro titles (8 cols) */}
                <div className="md:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-1.5 bg-terracotta-light text-terracotta text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md border border-terracotta/10">
                    <User className="h-3.5 w-3.5" /> 1. Hero Introduction
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 leading-tight">
                    Turning Personal Trauma into Global Triumph.
                  </h2>

                  <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-medium">
                    Meet Sarian Karim-Kamara—an FGM survivor, community development expert, and the visionary leader reshaping cultural advocacy from South London to Sierra Leone.
                  </p>
                </div>
              </div>

              {/* Blockquote wrapper */}
              <div className="mt-6 pt-6 border-t border-brand-gray-border flex items-start gap-3 bg-brand-light p-5 rounded-2xl">
                <Quote className="h-6 w-6 text-terracotta shrink-0 opacity-70" />
                <div>
                  <p className="text-sm font-serif italic text-zinc-800 leading-relaxed">
                    "Educating young women about their rights is key to forging a better future."
                  </p>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mt-2">
                    — Sarian Karim-Kamara
                  </p>
                </div>
              </div>
            </section>

            {/* 2. The Turning Point (Her Story) */}
            <section className="bg-white border border-brand-gray-border rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-1.5 bg-zinc-800 text-gold-light text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md border border-zinc-700 w-fit">
                ⚔️ 2. The Turning Point (Her Story)
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-zinc-900 mb-2">Grounded in Survival</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Sarian’s journey as an activist is rooted in lived experience and survival.
                </p>
              </div>

              <div className="space-y-4">
                {/* The Ritual */}
                <div className="p-4 bg-brand-light border border-brand-gray-border rounded-xl">
                  <h4 className="text-xs font-extrabold text-zinc-900 uppercase tracking-wide mb-1">The Ritual</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    At just 11 years old, Sarian underwent Female Genital Mutilation (FGM) in Sierra Leone during her initiation into the traditional Bondo society.
                  </p>
                </div>

                {/* The Catalyst */}
                <div className="p-4 bg-[#FFF2F0] border border-brand-gray-border rounded-xl">
                  <h4 className="text-xs font-extrabold text-terracotta uppercase tracking-wide mb-1">The Catalyst</h4>
                  <p className="text-xs text-zinc-650 leading-relaxed">
                    Years later, in a London hospital, she endured a agonizing, four-day labor <span className="font-bold text-terracotta">[1]</span>. Internal scar tissue from FGM blocked her child from being born safely <span className="font-bold text-terracotta">[1]</span>.
                  </p>
                </div>

                {/* The Promise */}
                <div className="p-4 bg-brand-light border border-brand-gray-border rounded-xl">
                  <h4 className="text-xs font-extrabold text-zinc-900 uppercase tracking-wide mb-1">The Promise</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    After a midwife identified the scar tissue, Sarian made a life-changing vow: she would never stop speaking out until the knife was completely removed from cultural traditions.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Grounded in Community Development */}
            <section className="bg-white border border-brand-gray-border rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-1.5 bg-terracotta-light text-terracotta text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md border border-terracotta/10 w-fit">
                <BookOpen className="h-3.5 w-3.5" /> 3. Grounded in Community Development
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-zinc-900 mb-2">A Framework for Change</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Sarian did not just speak out; she built a systematic framework for change.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Academic Backing */}
                <div className="p-5 border border-brand-gray-border rounded-2xl hover:bg-brand-light transition-colors flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-zinc-800 uppercase block mb-1">Academic Backing</span>
                    <p className="text-xs text-zinc-500 leading-relaxed mt-2">
                      She earned a university degree in Community Development, focusing her dissertation entirely on the institutional impacts of FGM.
                    </p>
                  </div>
                </div>

                {/* The Peckham Hub */}
                <div className="p-5 border border-brand-gray-border rounded-2xl hover:bg-brand-light transition-colors flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-zinc-800 uppercase block mb-1">The Peckham Hub</span>
                    <p className="text-xs text-zinc-500 leading-relaxed mt-2">
                      Sarian transformed her African food market in Peckham, South East London, into a grassroots sanctuary. She used the space to hang educational posters, start dialogues, and break the silence within diaspora communities.
                    </p>
                  </div>
                </div>

                {/* Empowering Survivors */}
                <div className="p-5 border border-brand-gray-border rounded-2xl hover:bg-brand-light transition-colors flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-zinc-800 uppercase block mb-1">Empowering Survivors</span>
                    <p className="text-xs text-zinc-500 leading-relaxed mt-2">
                      Recognizing the hidden physical and emotional scars left by cutting, she launched bi-weekly support groups to give survivors a safe space to heal without stigma.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Driving Cross-Border Impact */}
            <section className="bg-white border border-brand-gray-border rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-1.5 bg-zinc-800 text-gold-light text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md border border-zinc-700 w-fit">
                <Globe className="h-3.5 w-3.5" /> 4. Driving Cross-Border Impact
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-zinc-900 mb-2">Bridges Across Oceans</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                  Sarian’s work bridges local trust in the UK with traditional leadership in West Africa.
                </p>
              </div>

              {/* Real Initiative Image from the field */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-brand-gray-border shadow-sm mb-4">
                <Image
                  src="https://pbs.twimg.com/media/Gr9F3bcXsAA8uJb.jpg"
                  alt="KDLK Alternative Rite of Passage Initiative in Sierra Leone"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 50vw"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Bondo Society */}
                <div className="flex flex-col bg-brand-light p-5 rounded-2xl border border-brand-gray-border">
                  <div className="text-sm font-extrabold text-zinc-950 mb-2">Reforming Bondo</div>
                  <p className="text-xs text-zinc-550 leading-relaxed flex-1">
                    Rather than fighting traditional culture, Sarian respects it. She self-funds regular trips to Sierra Leone to run youth workshops.
                  </p>
                </div>

                {/* Tangible Shifts */}
                <div className="flex flex-col bg-brand-light p-5 rounded-2xl border border-brand-gray-border">
                  <div className="text-sm font-extrabold text-zinc-950 mb-2">Tangible Shifts</div>
                  <p className="text-xs text-zinc-550 leading-relaxed flex-1">
                    Her unique approach has successfully persuaded 7 out of 19 local communities in Sierra Leone to replace cutting rituals with bloodless, educational Alternatives Rites of Passage (ARP).
                  </p>
                </div>

                {/* Engaging Men */}
                <div className="flex flex-col bg-brand-light p-5 rounded-2xl border border-brand-gray-border">
                  <div className="text-sm font-extrabold text-zinc-950 mb-2">Engaging Men</div>
                  <p className="text-xs text-zinc-550 leading-relaxed flex-1">
                    Sarian actively integrates men and boys into her outreach, tackling the patriarchal marriage expectations that fuel FGM.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. National and International Recognition */}
            <section className="bg-white border border-brand-gray-border rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-1.5 bg-terracotta-light text-terracotta text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md border border-terracotta/10 w-fit">
                <Award className="h-3.5 w-3.5" /> 5. National and International Recognition
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-zinc-900 mb-2">Institutional Advisory</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Sarian’s innovative leadership has made her a highly respected advisor to policymakers worldwide.
                </p>
              </div>

              <div className="space-y-4">
                {/* Institutional Influence */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-brand-light border border-brand-gray-border">
                  <CheckCircleIcon />
                  <div>
                    <h4 className="text-xs font-extrabold text-zinc-900 uppercase">Institutional Influence</h4>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                      Since 2014, she has worked alongside the UK Home Office <span className="font-bold text-terracotta">[2]</span> to train frontline healthcare workers, teachers, and the Metropolitan Police to recognize and protect girls at risk.
                    </p>
                  </div>
                </div>

                {/* Points of Light */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-brand-light border border-brand-gray-border">
                  <CheckCircleIcon />
                  <div>
                    <h4 className="text-xs font-extrabold text-zinc-900 uppercase">The Points of Light Award</h4>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                      In 2019, the UK Prime Minister honored Sarian with the Points of Light Award for her exceptional, creative approach to ending FGM.
                    </p>
                  </div>
                </div>

                {/* Global Visibility */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-brand-light border border-brand-gray-border">
                  <CheckCircleIcon />
                  <div>
                    <h4 className="text-xs font-extrabold text-zinc-900 uppercase">Global Visibility</h4>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                      She was selected as an official batonbearer for the Queen’s Baton Relay in London, and her work has been showcased at the Institute of Contemporary Arts (ICA) London.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footnotes Section */}
            <section className="pt-6 border-t border-brand-gray-border text-[10px] text-zinc-400 space-y-1.5 leading-relaxed">
              <p>
                <strong>[1]</strong> Lived experiences regarding clinical delivery complications due to scar tissues from early Female Genital Cutting procedures.
              </p>
              <p>
                <strong>[2]</strong> Direct training advisory alignment supporting vulnerable child safety protocols across UK municipalities.
              </p>
            </section>

          </div>

          {/* Right Column (4 cols): Sticky Booking widget */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 z-10">
            <div className="space-y-6">
              <DonationWidget />

              <div className="bg-white border border-brand-gray-border p-5 rounded-2xl shadow-sm">
                <h4 className="text-xs font-bold text-zinc-950 mb-2">Campaign Impact</h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  Support Sarian's self-funded trips and community-led workshops in Sierra Leone to expand alternatives to cutting.
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

// Icon helper
function CheckCircleIcon() {
  return (
    <svg className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
