import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface NewsItem {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  link: string;
  image: string;
  linkLabel: string;
}

export default function NewsGrid() {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      category: "Grassroots Shifts: Alternative Rites of Passage Gain Ground",
      title: "7 Local Communities in Sierra Leone Lay Down the Knife",
      subtitle: "How our self-funded community engagement workshops successfully replaced cutting rituals while fully preserving traditional Bondo celebrations.",
      link: "https://www.giraffe.org/sarian-karim-kamara",
      image: "/alternative_rite.png",
      linkLabel: "Read the Impact Report"
    },
    {
      id: 2,
      category: "Creative Partnerships: Brand New Visual Toolkit Launched",
      title: "KDLK Partners with Creative Impact Club for 2024 Brand Refresh",
      subtitle: "Collaborating with designer Ana Grigorovici to elevate our message of cultural pride, hope, and survivor empowerment across the UK and Sierra Leone.",
      link: "https://www.facebook.com/KeeptheDrumsLosetheKnifeToEnfFGMSalone/",
      image: "/brand_refresh.png",
      linkLabel: "Explore the Creative Impact Journey"
    },
    {
      id: 3,
      category: "Survivor Stories: Breaking the Silence in the Diaspora",
      title: "From Grassroots to Global: Sarian Kamara’s Journey of Survival and Activism",
      subtitle: "Our founder shares her lived experience with the International Planned Parenthood Federation to spotlight London’s frontline advocacy.",
      link: "https://www.ippf.org/blogs/authors/sarian-kamara",
      image: "/sarian_portrait.png",
      linkLabel: "Read the IPPF Interview Feature"
    },
    {
      id: 4,
      category: "Policy Impact: National Recognition for Survivor Advocacy",
      title: "Founder Sarian Karim-Kamara Honored with UK Prime Minister's Points of Light Award",
      subtitle: "Recognizing innovative community leadership and structural training alignment with the UK Home Office to protect girls at risk.",
      link: "https://www.pointsoflight.gov.uk/keep-the-drums-lose-the-knife/",
      image: "/pm_award.png",
      linkLabel: "View the Official Award Announcement"
    }
  ];

  return (
    <div className="space-y-10">
      
      {/* Header section */}
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
          Milestones & Updates
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
          Recent Updates & Community Milestones
        </h2>
      </div>

      {/* 2x2 Grid (1 col on mobile, 2 cols on tablet/desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col bg-white border border-brand-gray-border rounded-3xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Image Preview with Aspect Ratio */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-100 border border-brand-gray-border">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-300"
                sizes="(max-w-768px) 100vw, 40vw"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-black/5">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-zinc-500">
                  Update #{item.id}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="mt-5 flex flex-col flex-1">
              <span className="text-[10px] font-extrabold text-terracotta uppercase tracking-wider">
                {item.category}
              </span>
              
              <h3 className="text-base font-extrabold text-zinc-950 mt-1.5 leading-snug group-hover:text-terracotta-dark transition-colors">
                {item.title}
              </h3>
              
              <p className="text-xs text-zinc-500 mt-2.5 leading-relaxed flex-1">
                {item.subtitle}
              </p>

              {/* Precise URL Anchor Tag Link */}
              <div className="mt-6 pt-4 border-t border-brand-gray-border">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-900 font-extrabold text-xs hover:text-terracotta hover:underline transition-colors cursor-pointer"
                >
                  <span>👉 {item.linkLabel}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
