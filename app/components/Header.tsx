"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, Menu, User, Sparkles, Heart, HelpCircle, BookOpen, Newspaper, Info } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // offset for the header height
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

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const navigateToNews = () => {
    router.push("/news");
    setIsMenuOpen(false);
  };

  const navigateToAbout = () => {
    router.push("/about");
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3 border-b border-brand-gray-border"
          : "bg-white/95 backdrop-blur-md py-4 border-b border-brand-gray-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <div 
          onClick={() => router.push("/")}
          className="flex items-center gap-2.5 cursor-pointer shrink-0"
        >
          <div className="h-10 w-10 rounded-full bg-terracotta flex items-center justify-center text-white font-bold text-lg shadow-sm hover:scale-105 transition-transform">
            🥁
          </div>
          <div className="hidden sm:block">
            <span className="font-extrabold text-lg tracking-tight text-terracotta block leading-none">
              KDLK
            </span>
            <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest leading-none">
              Keep the Drums
            </span>
          </div>
        </div>

        {/* Central Search-like Navigation Pill */}
        <div className="flex-1 max-w-lg mx-4 hidden md:block">
          <div className="flex items-center justify-between border border-brand-gray-border rounded-full py-2 px-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
            <button
              onClick={() => handleNavClick("mission")}
              className="text-xs font-semibold text-zinc-800 px-4 py-1 hover:bg-zinc-50 rounded-full transition-colors cursor-pointer"
            >
              Our Mission
            </button>
            <span className="h-4 w-[1px] bg-zinc-200"></span>
            <button
              onClick={() => handleNavClick("sarian")}
              className="text-xs font-semibold text-zinc-800 px-4 py-1 hover:bg-zinc-50 rounded-full transition-colors cursor-pointer"
            >
              Sarian’s Story
            </button>
            <span className="h-4 w-[1px] bg-zinc-200"></span>
            <button
              onClick={() => handleNavClick("pillars")}
              className="text-xs font-semibold text-zinc-800 px-4 py-1 hover:bg-zinc-50 rounded-full transition-colors cursor-pointer"
            >
              What We Do
            </button>
            <span className="h-4 w-[1px] bg-zinc-200"></span>
            <button
              onClick={() => handleNavClick("donate-section")}
              className="text-xs font-semibold text-white bg-terracotta hover:bg-terracotta-dark px-4 py-1.5 rounded-full transition-colors cursor-pointer shadow-sm"
            >
              Support Us
            </button>
          </div>
        </div>

        {/* Right Section (Actions & Menu) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={navigateToAbout}
            className={`hidden lg:block text-sm font-semibold py-2.5 px-4 rounded-full transition-colors cursor-pointer ${
              pathname === "/about" 
                ? "text-terracotta bg-terracotta-light" 
                : "text-zinc-800 hover:bg-zinc-50"
            }`}
          >
            About Us
          </button>

          <button
            onClick={navigateToNews}
            className={`hidden lg:block text-sm font-semibold py-2.5 px-4 rounded-full transition-colors cursor-pointer ${
              pathname === "/news" 
                ? "text-terracotta bg-terracotta-light" 
                : "text-zinc-800 hover:bg-zinc-50"
            }`}
          >
            News & Highlights
          </button>
          
          <button
            onClick={() => handleNavClick("art")}
            className="text-zinc-800 hover:bg-zinc-50 p-2.5 rounded-full transition-colors cursor-pointer"
            title="Cultural Showcase"
          >
            <Globe className="h-5 w-5" />
          </button>

          {/* Profile Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 border border-brand-gray-border rounded-full p-2 hover:shadow-md transition-shadow bg-white cursor-pointer select-none"
            >
              <Menu className="h-4.5 w-4.5 text-zinc-600" />
              <div className="h-7 w-7 rounded-full bg-zinc-800 flex items-center justify-center text-white text-xs font-bold">
                <User className="h-4 w-4" />
              </div>
            </button>

            {isMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsMenuOpen(false)}
                ></div>
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-brand-gray-border py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2 border-b border-brand-gray-border mb-1">
                    <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                      Welcome to KDLK
                    </p>
                    <p className="text-sm font-bold text-zinc-800">Honor the Culture</p>
                  </div>
                  <button
                    onClick={() => handleNavClick("mission")}
                    className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="h-4 w-4 text-gold" />
                    <span>Our Mission & Culture</span>
                  </button>
                  <button
                    onClick={() => handleNavClick("sarian")}
                    className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <BookOpen className="h-4 w-4 text-terracotta" />
                    <span>Sarian's Story</span>
                  </button>
                  <button
                    onClick={() => handleNavClick("pillars")}
                    className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Heart className="h-4 w-4 text-terracotta" />
                    <span>What We Do (Our Pillars)</span>
                  </button>
                  
                  <div className="h-[1px] bg-brand-gray-border my-1"></div>

                  <button
                    onClick={navigateToAbout}
                    className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors flex items-center gap-2 cursor-pointer font-semibold"
                  >
                    <Info className="h-4.5 w-4.5 text-zinc-500" />
                    <span>About Us & Movement</span>
                  </button>
                  
                  <button
                    onClick={navigateToNews}
                    className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors flex items-center gap-2 cursor-pointer font-semibold"
                  >
                    <Newspaper className="h-4 w-4 text-zinc-500" />
                    <span>News & Highlights</span>
                  </button>
                  <button
                    onClick={() => handleNavClick("donate-section")}
                    className="w-full text-left px-4 py-2.5 text-sm font-bold text-terracotta hover:bg-zinc-50 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Heart className="h-4 w-4 fill-terracotta" />
                    <span>Support Our Movement</span>
                  </button>
                  <a
                    href="https://www.nspcc.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-left px-4 py-2.5 text-sm text-zinc-500 hover:bg-zinc-50 transition-colors flex items-center gap-2 cursor-pointer border-t border-brand-gray-border mt-1"
                  >
                    <HelpCircle className="h-4 w-4" />
                    <span>NSPCC Support (UK) ↗</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Search/Navigation Pill Bar */}
      <div className="px-4 mt-2 md:hidden">
        <div className="flex items-center justify-around border border-brand-gray-border rounded-full py-1.5 px-2 shadow-sm bg-zinc-50/50">
          <button
            onClick={() => handleNavClick("mission")}
            className="text-[11px] font-semibold text-zinc-700 py-1 px-2 rounded-full hover:bg-white"
          >
            Mission
          </button>
          <button
            onClick={navigateToAbout}
            className={`text-[11px] font-semibold py-1 px-2 rounded-full ${
              pathname === "/about" ? "text-terracotta font-bold" : "text-zinc-700"
            }`}
          >
            About
          </button>
          <button
            onClick={navigateToNews}
            className={`text-[11px] font-semibold py-1 px-2 rounded-full ${
              pathname === "/news" ? "text-terracotta font-bold" : "text-zinc-700"
            }`}
          >
            News
          </button>
          <button
            onClick={() => handleNavClick("donate-section")}
            className="text-[11px] font-semibold text-white bg-terracotta py-1 px-2.5 rounded-full shadow-sm"
          >
            Support
          </button>
        </div>
      </div>
    </header>
  );
}
