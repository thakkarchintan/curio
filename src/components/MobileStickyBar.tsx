import { useState, useEffect } from 'react';
import { ArrowRight, ChevronUp, Sparkles } from 'lucide-react';

interface MobileStickyBarProps {
  onRegisterClick: () => void;
}

export default function MobileStickyBar({ onRegisterClick }: MobileStickyBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroThreshold = 350;

      // Check if registration section or footer is in view
      const registerEl = document.getElementById('register-section');
      let inRegisterZone = false;
      if (registerEl) {
        const rect = registerEl.getBoundingClientRect();
        // If the registration form is on screen
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= window.innerHeight * 0.2) {
          inRegisterZone = true;
        }
      }

      setIsVisible(scrollY > heroThreshold && !inRegisterZone);
      setShowScrollTop(scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick mobile action bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-stone-950/95 backdrop-blur-md border-t border-stone-800 shadow-2xl animate-in slide-in-from-bottom-3 duration-200"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[11px] uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Ages 10–16
          </span>
          <span className="text-xs font-medium text-stone-200">
            Real-world skills
          </span>
        </div>

        <div className="flex items-center gap-2">
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center border border-stone-700 active:scale-95 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          )}

          <button
            id="mobile-sticky-register-btn"
            onClick={onRegisterClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-400 text-stone-950 hover:bg-amber-300 active:scale-95 shadow-md cursor-pointer transition-all"
          >
            <span>Register Interest</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
