import { Shield, Mail, Phone, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-gray-light border-t border-brand-gray-border py-12 sm:py-16 text-zinc-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-brand-gray-border">
          
          {/* Logo & Description (Columns 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-terracotta flex items-center justify-center text-white text-sm font-bold shadow-sm">
                🥁
              </div>
              <div>
                <span className="font-extrabold text-sm tracking-tight text-terracotta block leading-none">
                  KDLK
                </span>
                <span className="text-[9px] text-zinc-500 font-medium uppercase tracking-widest leading-none">
                  Keep the Drums, Lose the Knife
                </span>
              </div>
            </div>
            
            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
              We are a survivor-led movement dedicated to addressing FGM within Sierra Leonean and global diaspora communities, advocating for zero tolerance and complete abolition of Bondo cutting practices.
            </p>
          </div>

          {/* Column 2: Pillars (Columns 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-zinc-900 uppercase tracking-widest text-[10px]">What We Do</h4>
            <ul className="space-y-2.5">
              <li><a href="#pillars" className="hover:text-zinc-900 transition-colors">Zero Tolerance</a></li>
              <li><a href="#pillars" className="hover:text-zinc-900 transition-colors">Diaspora Education</a></li>
              <li><a href="#pillars" className="hover:text-zinc-900 transition-colors">Survivor Circles</a></li>
              <li><a href="#pillars" className="hover:text-zinc-900 transition-colors">Institutional Advisory</a></li>
            </ul>
          </div>

          {/* Column 3: Resources (Columns 7-8) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-zinc-900 uppercase tracking-widest text-[10px]">Resources</h4>
            <ul className="space-y-2.5">
              <li><a href="#sarian" className="hover:text-zinc-900 transition-colors">Sarian’s Story</a></li>
              <li><a href="#art" className="hover:text-zinc-900 transition-colors">Cultural Gallery</a></li>
              <li><a href="https://www.nspcc.org.uk" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">NSPCC Advisory ↗</a></li>
              <li><a href="https://www.gov.uk/female-genital-mutilation" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">UK Gov Policy ↗</a></li>
            </ul>
          </div>

          {/* Column 4: Urgent Help Action (Columns 9-12) */}
          <div className="lg:col-span-4 bg-white border border-brand-gray-border p-5 rounded-2xl shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-rose-600 font-extrabold text-[10px] uppercase tracking-wider">
              <Shield className="h-4 w-4 shrink-0" /> Protect & Report
            </div>
            <h4 className="font-bold text-zinc-900 text-sm">Need Urgent Assistance?</h4>
            <p className="text-zinc-500 leading-relaxed text-xs">
              If you or a young girl in the UK is in immediate danger of FGM, contact the police (999) or report it anonymously via the NSPCC helpline:
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a 
                href="tel:+447846777058" 
                className="inline-flex items-center gap-2 font-bold text-zinc-800 hover:text-terracotta text-xs animate-pulse"
              >
                <Phone className="h-3.5 w-3.5 text-terracotta fill-terracotta-light" /> KDLK Business: +44 7846 777058
              </a>
              <a 
                href="tel:08088005000" 
                className="inline-flex items-center gap-2 font-semibold text-zinc-500 hover:text-terracotta text-[11px]"
              >
                <Phone className="h-3.5 w-3.5 text-zinc-400" /> NSPCC Helpline: 0808 800 5000
              </a>
              <a 
                href="mailto:help@nspcc.org.uk" 
                className="inline-flex items-center gap-2 font-semibold text-zinc-500 hover:text-terracotta text-[11px]"
              >
                <Mail className="h-3.5 w-3.5 text-zinc-400" /> help@nspcc.org.uk
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-zinc-500 text-xs gap-4">
          <div>
            © {new Date().getFullYear()} Keep the Drums, Lose the Knife (KDLK). All rights reserved.
          </div>
          
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 fill-terracotta text-terracotta" />
            <span>for community healing</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
