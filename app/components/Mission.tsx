import { Music, RefreshCw, HeartHandshake } from "lucide-react";

export default function Mission() {
  return (
    <section id="mission" className="py-16 sm:py-24 bg-white border-b border-brand-gray-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Header section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">Our Foundation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              A Survivor-Led Movement for Lasting Reform
            </h2>
          </div>
          
          <div className="lg:col-span-8">
            <p className="text-lg sm:text-xl text-zinc-700 leading-relaxed font-medium">
              We are dedicated to addressing FGM within Sierra Leonean and global diaspora communities.
            </p>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              We believe that true liberation doesn’t require abandoning our rich West African heritage. 
              By standing firm on zero tolerance and demanding the complete eradication of the Bondo cutting practice, we give girls a future filled with choice, education, and pride.
            </p>
          </div>
        </div>

        {/* 3 Pillars of Belief (Airbnb listings of details) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          
          {/* Pillar 1 */}
          <div className="flex flex-col bg-brand-light p-8 rounded-3xl border border-brand-gray-border hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-2xl bg-terracotta/10 text-terracotta flex items-center justify-center mb-6 shrink-0">
              <Music className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-3">Culture without Harm</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              We utilize traditional West African drumming for healing and community mobilization, while standing firm on the complete eradication of the Bondo practice.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col bg-brand-light p-8 rounded-3xl border border-brand-gray-border hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-2xl bg-gold/10 text-gold-dark flex items-center justify-center mb-6 shrink-0">
              <RefreshCw className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-3">Breaking the Cycle</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              We educate youth, elders, and families to deconstruct deeply rooted patriarchal expectations that fuel female genital cutting.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col bg-brand-light p-8 rounded-3xl border border-brand-gray-border hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-2xl bg-[#D93B00]/10 text-[#D93B00] flex items-center justify-center mb-6 shrink-0">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-3">Uplifting Survivors</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              We provide safe, welcoming spaces that support physical and emotional healing, without reinforcing trauma or social stigma.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
