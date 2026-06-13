import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Pillar {
  id: number;
  title: string;
  location: string;
  tagline: string;
  description: string;
  image: string;
  actionLabel: string;
}

export default function WhatWeDo() {
  const pillars: Pillar[] = [
    {
      id: 1,
      title: "Zero Tolerance to FGM",
      location: "Sierra Leone Communities",
      tagline: "End Bondo Practice",
      description: "We run grassroots education campaigns in Sierra Leone for the total abolition of FGM and Bondo society initiation practices, declaring they have no place in current society.",
      image: "/alternative_rite.png",
      actionLabel: "Support abolition"
    },
    {
      id: 2,
      title: "Diaspora Outreach & Education",
      location: "United Kingdom & Europe",
      tagline: "Warning risk prevention",
      description: "We provide educational tools, workshops, and multi-language posters across community spaces to help families recognize and prevent FGM risks early.",
      image: "/diaspora_outreach.png",
      actionLabel: "Access resources"
    },
    {
      id: 3,
      title: "Survivor Circles & Healing",
      location: "London, UK Sanctuary",
      tagline: "Safe therapeutic space",
      description: "We host regular, safe bi-weekly support groups in London to help women process unspoken emotional and physical trauma with peers.",
      image: "/survivor_circles.png",
      actionLabel: "Join a circle"
    },
    {
      id: 4,
      title: "Institutional Advisory",
      location: "UK Home Office & Police",
      tagline: "Frontline agency training",
      description: "We partner directly with public agencies to train frontline teachers, healthcare workers, and police officers to recognize and protect vulnerable girls.",
      image: "/institutional_advisory.png",
      actionLabel: "Read advisor brief"
    }
  ];

  return (
    <section id="pillars" className="py-16 sm:py-24 bg-white border-b border-brand-gray-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">Pillars of Action</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              What We Do
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-zinc-500 font-medium max-w-sm">
            Empowering change across borders. Our operations address FGM at the roots in Sierra Leone and in the diaspora communities.
          </p>
        </div>

        {/* Airbnb-style Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-zinc-100 shadow-sm border border-brand-gray-border">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                />
                {/* Floating Heart / Like Button (Airbnb feel) */}
                <div className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition-colors border border-black/5 shadow-sm">
                  <span className="text-xs">🥁</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="mt-3.5 flex flex-col flex-1">
                <div className="flex justify-between items-baseline text-xs">
                  <span className="font-extrabold text-zinc-900 truncate max-w-[70%]">{pillar.location}</span>
                  <span className="text-zinc-500 font-bold uppercase tracking-wider text-[9px] shrink-0">{pillar.tagline}</span>
                </div>
                
                <h3 className="font-extrabold text-sm text-zinc-800 mt-1.5 group-hover:text-terracotta transition-colors flex items-center gap-1">
                  {pillar.title}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-terracotta shrink-0" />
                </h3>
                
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed flex-1">
                  {pillar.description}
                </p>

                {/* Subtext CTA */}
                <div className="mt-4 pt-3 border-t border-brand-gray-border flex items-center justify-between text-[11px] font-extrabold text-zinc-800 group-hover:underline">
                  <span>{pillar.actionLabel}</span>
                  <span className="text-terracotta">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
