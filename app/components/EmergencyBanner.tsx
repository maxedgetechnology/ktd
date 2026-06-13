"use client";

import { useState } from "react";
import { AlertCircle, X, ShieldAlert } from "lucide-react";

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#5B21B6] text-white py-3.5 px-4 sm:px-6 lg:px-8 text-center text-sm font-medium z-50 flex items-center justify-center gap-2 transition-all duration-300 shadow-md">
      <div className="flex items-center gap-2 max-w-7xl mx-auto pr-6">
        <ShieldAlert className="h-4.5 w-4.5 shrink-0 animate-pulse text-amber-300" />
        <span>
          <strong>UK Resident?</strong> If you or someone you know is at risk of FGM, you can report it safely and anonymously through the NSPCC.
        </span>
        <a
          href="https://www.nspcc.org.uk/what-is-child-abuse/types-of-abuse/female-genital-mutilation-fgm/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 underline font-bold hover:text-amber-200 transition-colors ml-1"
        >
          Get Urgent Help / Report a Concern
          <span className="text-xs">↗</span>
        </a>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-all cursor-pointer"
        aria-label="Dismiss banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
