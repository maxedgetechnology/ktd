"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Camera, Film } from "lucide-react";

interface ArtItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ArtVisibility() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const artItems: ArtItem[] = [
    {
      id: 1,
      title: "The Rhythm of Bondo",
      category: "Cinematic Photography Series",
      description: "Close-up study of traditional hand-carved Bondo society drums, highlighting the texture and historical craftsmanship.",
      image: "/cultural_art_1.png"
    },
    {
      id: 2,
      title: "The Hands of Heritage",
      category: "Documentary Film Still",
      description: "Capturing a Sowei elder gently resting her beaded hands on the sacred drum, passing wisdom through generations.",
      image: "/cultural_art_2.png"
    },
    {
      id: 3,
      title: "Dance of the Shadows",
      category: "Film Still / Golden Hour",
      description: "Sunset silhouettes of Bondo society women dancing, illustrating drumming and community strength in Sierra Leone.",
      image: "/cultural_art_3.png"
    }
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="art" className="py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-zinc-800 text-gold-light text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md mb-3 border border-zinc-700">
              <Film className="h-3.5 w-3.5" /> Cultural Art & Visibility
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              The Rhythm of Change
            </h2>
            <p className="mt-4 text-zinc-400 max-w-xl text-sm leading-relaxed">
              Culture is our loudest instrument for healing. Through collaborative visual projects by filmmaker <strong>Henry J. Kamara</strong>, we share the vibrant rhythm of the Bondo drums, proving that art can rebuild collective strength.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex gap-2.5 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="h-11 w-11 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-11 w-11 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer shadow-md"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Gallery Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-none scroll-snap-x snap-mandatory touch-pan-x"
          style={{ scrollbarWidth: "none" }}
        >
          {artItems.map((item) => (
            <div
              key={item.id}
              className="min-w-[85vw] sm:min-w-[50vw] md:min-w-[40vw] lg:min-w-[32vw] scroll-snap-align-start flex flex-col group cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-w-768px) 85vw, 40vw"
                />
                
                {/* Visual Category Label */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-zinc-300">
                  <Camera className="h-3 w-3 text-gold" />
                  <span>{item.category}</span>
                </div>
              </div>

              {/* Details */}
              <div className="mt-4">
                <h3 className="text-base font-extrabold text-white group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Exhibition Notice Card */}
          <div className="min-w-[85vw] sm:min-w-[45vw] md:min-w-[35vw] lg:min-w-[28vw] scroll-snap-align-start bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 bg-gold/10 text-gold rounded-xl flex items-center justify-center text-lg mb-6">
                🏛️
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Exhibited at ICA London</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Our collaborative showcases have been presented at the <strong>Institute of Contemporary Arts (ICA) London</strong>, amplifying local Sierra Leonean survivor voices to international policy audiences.
              </p>
            </div>
            
            <div className="pt-6 border-t border-zinc-800/80 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
              Art & Visibility Showcase
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
