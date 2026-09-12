import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onRegisterClick: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why Curio', href: '#why-curio' },
    { label: 'What They Learn', href: '#what-they-learn' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Programs', href: '#program-format' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3'
          : 'bg-stone-50/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-2 group text-stone-900 focus:outline-hidden"
          >
            <div className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center text-white font-bold text-lg font-display tracking-wider group-hover:bg-indigo-600 transition-colors">
              C
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display tracking-tight text-stone-900 leading-none">
                CURIO
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-stone-500 mt-0.5">
                Real-world learning
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            id="desktop-nav-menu"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`desktop-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleLinkClick(link.href)}
                className="hover:text-stone-950 transition-colors cursor-pointer text-sm font-medium py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="desktop-header-register-btn"
              onClick={onRegisterClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold bg-stone-900 text-white hover:bg-indigo-700 active:scale-98 transition-all shadow-xs cursor-pointer"
            >
              <span>Register Interest</span>
              <ArrowRight className="w-4 h-4 text-stone-300" />
            </button>
          </div>

          {/* Mobile Right Actions: Quick CTA + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-header-quick-register-btn"
              onClick={onRegisterClick}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Register
            </button>
            <button
              id="mobile-menu-toggle-button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-200/60 focus:outline-hidden active:scale-95 transition-all"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          id="mobile-drawer-menu"
          className="md:hidden border-b border-stone-200 bg-stone-50 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col gap-2 pt-2">
            <div className="p-3 bg-indigo-50/80 rounded-xl border border-indigo-100/80 mb-2 flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-indigo-700 shrink-0" />
              <p className="text-xs text-indigo-950 font-medium leading-relaxed">
                Experiential learning for school-age children (Ages 10–16)
              </p>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleLinkClick(link.href)}
                className="flex items-center justify-between text-left py-3 px-3 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-100 hover:text-stone-950 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
            ))}

            <div className="pt-3 mt-1 border-t border-stone-200">
              <button
                id="mobile-drawer-register-cta-btn"
                onClick={() => {
                  setIsOpen(false);
                  onRegisterClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-base font-semibold bg-stone-900 text-white shadow-sm hover:bg-indigo-700 transition-colors cursor-pointer"
              >
                <span>Register Your Interest</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-stone-500 mt-2">
                Initial pilot launching soon for school-age children
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
