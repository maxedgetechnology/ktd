import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function NewsHero() {
  const link = "https://x.com/ICALondon/status/1927335987341861258";

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 text-white border border-zinc-900 shadow-2xl group">
      
      {/* Background Graphic overlay */}
      <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-terracotta/20 blur-3xl opacity-60" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
        
        {/* Story Text details (Columns 1-7) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-5">
          <div className="inline-flex items-center gap-1.5 bg-zinc-800 text-gold-light text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full border border-zinc-700 w-fit">
            <Sparkles className="h-3 w-3 text-gold" /> Featured Headline Story
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Keep the Drums, Lose the Knife Takes Center Stage at the Institute of Contemporary Arts (ICA) London
          </h1>
          
          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl">
            Celebrating West African culture and exploring community-led healing from FGM through film, dialogue, and live drumming processions.
          </p>

          <div className="pt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-terracotta to-[#FF4A3B] text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all cursor-pointer"
            >
              View Featured Story
              <ArrowUpRight className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Story Image container (Columns 8-12) */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div className="relative aspect-[4/3] w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
            <Image
              src="/ica_exhibition.png"
              alt="ICA London KDLK Exhibition featuring Bondo drums photo installation"
              fill
              className="object-cover group-hover:scale-102 transition-all duration-500"
              sizes="(max-w-768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Exhibition Venue</span>
              <p className="text-xs font-bold text-white mt-0.5">ICA London, The Mall, London SW1Y</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
