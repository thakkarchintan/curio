import { ArrowRight, Sparkles, Heart } from 'lucide-react';

interface FinalStatementProps {
  onRegisterClick: () => void;
}

export default function FinalStatement({ onRegisterClick }: FinalStatementProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="curio-footer" className="bg-stone-950 text-white border-t border-stone-800">
      {/* Section 16: Final Brand Statement */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <span className="inline-block text-xs uppercase tracking-widest font-bold text-amber-400 mb-6 bg-stone-900 border border-stone-800 px-3.5 py-1 rounded-full">
          The Curio Creed
        </span>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display text-stone-300 tracking-tight leading-tight mb-3">
          Don't just prepare children for the next exam.
        </h2>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.08] mb-8">
          Prepare them for what's next.
        </h1>

        <div className="mb-10">
          <button
            id="footer-register-cta-btn"
            onClick={onRegisterClick}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold bg-amber-400 hover:bg-amber-300 active:scale-98 text-stone-950 shadow-xl transition-all cursor-pointer group"
          >
            <span>Register Your Interest</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-sm font-semibold tracking-wide text-stone-400 font-display">
          Curio — Learning for the real world.
        </p>
      </div>

      {/* Footer Navigation & Credentials */}
      <div className="border-t border-stone-900 bg-black/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand identity */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-white text-stone-950 flex items-center justify-center font-bold text-sm font-display">
                C
              </div>
              <span className="font-bold text-lg font-display tracking-tight text-white">
                CURIO
              </span>
              <span className="text-stone-500 text-xs ml-2">
                Project Curio • Experiential Education
              </span>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
              <a href="#why-curio" className="hover:text-white transition-colors">
                Why Curio
              </a>
              <a href="#what-they-learn" className="hover:text-white transition-colors">
                What They Learn
              </a>
              <a href="#how-it-works" className="hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#program-format" className="hover:text-white transition-colors">
                Program Format
              </a>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
            </div>

            {/* City Pilot Notice */}
            <div className="text-xs text-stone-500 text-center md:text-right">
              Initial pilot planned for Tier-1 Indian city.
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-900 text-center text-[11px] text-stone-600 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>
              © {currentYear} Project Curio. All rights reserved. Designed as supplementary, non-formal experiential learning.
            </p>
            <p className="text-stone-500">
              Curio does not replace formal schooling or conduct board examinations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
